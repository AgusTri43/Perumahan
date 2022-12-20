import React from "react";

class Eberita extends React.Component {
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
        <a href="./components/Dashboard" class="boa">
          Dashboard
        </a>
        <a href="/transaksi" class="tr">
          Transaksi
        </a>
        <a href="/penghuni" class="ph">
          Penghuni
        </a>
        <a
          href="https://app.crisp.chat/website/6cf840b1-2824-4046-adb9-d74aff907c1b/inbox/session_cee53073-701c-4371-8245-e2f641cbe20b/"
          class="ps"
        >
          Pesan
        </a>
        <a href={"/berita"} class="ber">
          Berita
        </a>
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

export default Eberita;