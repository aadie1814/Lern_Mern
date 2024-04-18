import React, { useState, useEffect,useContext } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Authcontext } from "../store/auth.js";

const AdminDeleteServices = () => {
    const [service, setService] = useState([])
    const [modelid, setModelid] = useState("")
    const {authorizationToken} = useContext(Authcontext)
    const getData = async () => {
        try {
            const data = await fetch('http://localhost:9000/api/admin/service')
            const res = await data.json()
            console.log(res)
            setService(res)
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
    const deleteServiceById = async (_id) => {
        try {
            const data = await fetch(`http://localhost:9000/api/admin/service/delete/${_id}`,{
                headers: {
                  authorization:authorizationToken
                },
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
                        <th className="text-center">service_name</th>
                        <th className="text-center ">description</th>
                        <th className="text-center"> image</th>
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
                                <td><button type="button" class="btn btn-success" onClick={() => deleteServiceById(modelid)} data-bs-dismiss="modal">YES</button>|
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">cancle</button>
                                </td>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    service.map((value, index) => {
                        return <tbody>
                            <tr>
                                <td className="text-center ">{index + 1}</td>
                                <td className="text-center">{value.service_name}</td>
                                <td className="text-center">{value.description}</td>
                                <td className="text-center">{<img src={`http://localhost:9000/assets/${value.image}`} alt='' height="80px" width="80px"></img>}</td>
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
export default AdminDeleteServices;