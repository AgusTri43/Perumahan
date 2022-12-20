import React from "react";
import "../style/tb.css";
import { Link } from "react-router-dom";

class Tberita extends React.Component {
    render(){
        return(
        <div className="body">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <img src="./Vector1.png" alt="" />
            </div>
            <div className="prm">
              <h1>Cluster Maul Hill</h1>
            </div>
            <div className="prof">
              <img src="./Ellipse.png" alt="" />
            </div>
            <div className="us">
              <h2> Aditya </h2>
            </div>
          </div>
        </div>
        <Link to={"/"} className="boa">Dashboard</Link>
            <Link to={"/transaksi"} className="tr">Transaksi</Link>
            <Link to={"/penghuni"} className="ph">Penghuni</Link>
            <Link to={"/Pesan"} class="ps">Pesan</Link>
            <Link to={"/Berita"} className="ber">Berita</Link>
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
        
        );
    }
}

export default Tberita;