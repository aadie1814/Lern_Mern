import React, { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
const AdminContact = () => {
    const [contact, setcontact] = useState([])
    const [modelid, setModelid] = useState("")
    const getData = async () => {
        try {
            const data = await fetch('http://localhost:9000/api/admin/contact')
            const res = await data.json()
            console.log(res)
            setcontact(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    },
        [])
    /* delete section */
    const deleteContactById = async (_id) => {
        try {
            const data = await fetch(`http://localhost:9000/api/admin/contact/delete/${_id}`, {
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
    return (
        <>
            <table className="tablepo">
                <thead>
                    <tr>
                        <th className="text-center">S.No</th>
                        <th className="text-center">NAME</th>
                        <th className="text-center ">EMAIL</th>
                        <th className="text-center"> MESSAGE</th>
                        <th className="text-center ">Action</th>
                    </tr>
                </thead>
                <div class="modal" id="myModal">
                    <div class="modal-dialog modal-sm conmo">
                        <div class="modal-content">
                            {/* <div class="modal-header">
                                <h4 class="modal-title text-dark text-center  " >Delete</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div> */}
                            <div class="modal-body">
                                <h5 className="text-dark">Are you sure want to delete data</h5>

                            </div>
                            <div class="modal-footer">
                                <td><button type="button" class="btn btn-success" onClick={() => deleteContactById(modelid)} data-bs-dismiss="modal">YES</button>|
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">cancle</button>
                                </td>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    contact.map((value, index) => {
                        return <tbody>
                            <tr>
                                <td className="text-center ">{index + 1}</td>
                                <td className="text-center">{value.name}</td>
                                <td className="text-center">{value.email}</td>
                                <td className="text-center">{value.message}</td>
                                <td className="text-center">
                                    <button className="btn btn-danger m-2" onClick={() => setModelid(`${value._id}`)} data-bs-toggle="modal" data-bs-target="#myModal">Delete</button>
                                </td>

                            </tr>
                        </tbody>
                    })
                }
            </table >

        </>
    )
}

export default AdminContact;
