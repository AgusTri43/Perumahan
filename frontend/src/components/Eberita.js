import React from "react";
import Sidebar from "./sidebar";
class Eberita extends React.Component {
    render(){
        return(
        <div className="body">
        <div className="container">
        <div className="sidebar">
                <Sidebar/>
            </div>
        <div class="conb">
            <form action="/upload-berita" method="post">
            <h1 class="sh">Buat Berita</h1>
            <div class="jube">
            <p >Judul Berita</p>
            </div>
            <input name="judul_berita"  type="text" class="inpn"/>
            <div>
            <p class="isi">Isi</p>
            </div>
            <div>
            <p><textarea class="inpi" name="isi_berita" rows="10" cols="30"></textarea></p>
            </div>
            <input type='submit' class="kirim" name='tombol' value='Upload berita' />
            </form>
        </div>
        </div>
        </div>
        
        );
    }
}

export default Eberita;