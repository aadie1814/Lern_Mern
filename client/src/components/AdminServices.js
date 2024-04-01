import React, { useRef, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
const AdminServices = () => {
    const [service_name, setService_name] = useState("")
    const [description, setDescription,] = useState("")
    const [uploadFile, setUploadFile] = useState("")
    const file= useRef("");

    const addService = async (e) =>{
        e.preventDefault()
        const data = new FormData()
        data.append('service_name',service_name)
        data.append('description',description)
        data.append('uploadFile',uploadFile)

        try{
            const dataToAdd =await fetch('http://localhost:9000/api/admin/service/post',{
                method:'POST',
                body: data
            })
            const res = await dataToAdd.json()
            console.log(res)
            setService_name("")
            setDescription("")
            file.current.value = ("")
        }
        catch (error){
            console.log(error)

        }
    }
    return (
        <>
            <form className=" serform" onSubmit={addService} encType='multipart/form-data'>
                <h3 className="text-dark  text-center">Add To Services</h3>
                <label className="lable text-dark mt-4">SERVICES NAME:</label>
                <input type='text' value={service_name} onChange={(e) => setService_name(e.target.value) }  className="form-control form " placeholder=" SERVICES NAME" id="email" name="email"></input> <br />
                <label className="lable text-dark"> SERVICES DESCRIPTION:</label>
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} className="form-control form" placeholder="DESCRIPTION" id="text" name="contact"></input> <br />
                <label className="lable text-dark ">IMAGE:</label>
                <input ref={file} type='file'  onChange={(e) => setUploadFile(e.target.files[0])} className="form-control form" placeholder="IMAGE" id="text" name="name"></input> <br />
                
                <button type="submit" class="btn btn-primary buttons ">Submit</button><br /><br />
            </form>
        </>
    )
}
export default AdminServices;
