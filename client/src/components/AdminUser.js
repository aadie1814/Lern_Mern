import React, { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

const AdminUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [user, setUser] = useState([])
    const [modelid, setModelid] = useState("")
    const [id,setId]= useState()

    const getData = async () => {
        try {
            const data = await fetch('http://localhost:9000/api/admin/user')
            const res = await data.json()
            console.log(res)
            setUser(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    const singleuser = async (_id) => {
        try {
            const data = await fetch(`http://localhost:9000/api/admin/user/${_id}`)
            const res = await data.json()
            console.log(res)
            setName(res.name)
            setEmail(res.email)
            setContact(res.contact)
            setId(res._id)
        }
        catch (error) {
            console.log(error)
        }
    }
    const deleteUserById = async (_id) => {
        try {
            const data = await fetch(`http://localhost:9000/api/admin/user/delete/${_id}`, {
                method: 'DELETE'
            })
            const res1 = await data.json()
            console.log(res1)

            if (res1.msg) {
                getData()
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const updateuserById = async () => {
        try {
            const data3 = await fetch(`http://localhost:9000/api/admin/user/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    name,
                    email,
                    contact,
                }),
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
                
            })
            const res = await data3.json()
            console.log(res)
            getData()
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <table className=" tablepo  ">
                <thead className="m-5">
                    <tr>
                        <th className="text-center">S.No</th>
                        <th className="text-center">NAME</th>
                        <th className="text-center ">EMAIL</th>
                        <th className="text-center">CONTACT</th>
                        <th className="text-center ">ACTION</th>
                    </tr>
                </thead>

                {/* Edit modal section */}
                <div class="modal" id="myModal">
                    <div class="modal-dialog modal-sm conmo">
                        <div class="modal-content">
                            
                            <div class="modal-body">
                                <form>
                                    <label className="lable ">Name:</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control " placeholder="Name" id="text" name="name"></input> <br />
                                    <label className="lable">Email:</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control " placeholder=" Email Address" id="email" name="email"></input> <br />
                                    <label className="lable">Contact:</label>
                                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="form-control" placeholder="Contact" id="text" name="contact"></input> <br />
                                </form>
                            </div>
                            <div class="modal-footer">
                            <td><button type="submit" class="btn btn-success  " onClick={updateuserById}  data-bs-dismiss="modal">Update</button>|
                                <button type="submit" class="btn btn-danger ">Cancel</button>
                            </td>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delete modol section */}
                <div class="modal" id="myModal2">
                    <div class="modal-dialog modal-sm conmo">
                        <div class="modal-content">
                           {/*  <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div> */}
                            <div class="modal-body">
                                <h5 className="text-dark">Are you sure want to delete data</h5>
                            </div>
                            <div class="modal-footer ">
                                <td><button type="button" class="btn btn-success" onClick={() => deleteUserById(modelid)} data-bs-dismiss="modal">YES</button>|
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancle</button>
                                </td>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    user.map((value, index) => {
                        return <tbody>
                            <tr>
                                <td className="text-center ">{index + 1}</td>
                                <td className="text-center">{value.name}</td>
                                <td className="text-center">{value.email}</td>
                                <td className="text-center">{value.contact}</td>
                                <td className="text-center" >
                                    <button className="btn btn-primary m-2" onClick={() => singleuser(`${value._id}`)} data-bs-toggle="modal" data-bs-target="#myModal"> Edit </button> 
                                    | 
                                    <button className="btn btn-danger m-2" onClick={() => setModelid(`${value._id}`)} data-bs-toggle="modal" data-bs-target="#myModal2" >Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    })
                }
            </table>
        </>
    )
}

export default AdminUser;