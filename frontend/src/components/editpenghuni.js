import React, {useState,useEffect}  from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import { useNavigate, useParams } from "react-router-dom";
import "../style/editpeng.css";
import { Link } from "react-router-dom";

function Editpenghuni(){
    const [nama, setnama] = useState();
    const [telp, settelp] = useState();
    const [rumah, setrumah] = useState();
    const [username, setusername] = useState();
    const [password, setpassword] = useState();
    const {id} = useParams();
   
    useEffect(() => {
        getPenghuniById();
      }, []);


            const getPenghuniById = async()=>{
            const res = await axios.get(`/api/penghuni/getpenghuniById/${id}`);
            setnama(res.data.nama);
            settelp(res.data.telp);
            setrumah(res.data.rumah);
            setusername(res.data.username);
            setpassword(res.data.password);
            console.log(getPenghuniById)
          } 


      const editpenghuni = async(e) =>{
        await axios.patch(`/api/penghuni/editpenghuni/${id}`, {
            nama,
            telp,
            rumah,
            username,
            password,
        });
        window.location.href = "/penghuni";
      };
    
        return(
            <div classNameName="container">
               <div className="sidebar">
                <Sidebar/>
            </div>
                <div classNameName="con">
                    <form>
                    <h1 className="sh">Tambah Penghuni</h1>
                    <p className="nm">Nama</p>
                    <input type="text" className="inpn" name="nama_penghuni" value={nama} onChange={(e)=>{setnama(e.target.value);}}></input>
                    <p className="nt">No Telepon</p>
                    <input type="text" className="inpt" name="no_telp" value={telp} onChange={(e)=>{settelp(e.target.value);}}></input>
                    <p className="nr">No Rumah</p>
                    <input type="text" className="inpr" name="no_rumah" value={rumah} onChange={(e)=>{setrumah(e.target.value);}}></input>
                    <p className="usr">Username</p>
                    <input type="text" className="inps" name="username" value={username} onChange={(e)=>{setusername(e.target.value);}}></input>
                    <p className="pw">Password</p>
                    <input type="text" className="inpw" name="password" value={password} onChange={(e)=>{setpassword(e.target.value);}}></input>
                    <button className="tambah" onClick={editpenghuni}>
                 edit
                </button>
                    </form>
                </div>
            </div>
        )
    }
export default Editpenghuni;