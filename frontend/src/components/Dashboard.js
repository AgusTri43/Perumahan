import React from "react";
import { Link, } from "react-router-dom";
import "../style/db.css";

class Dashboard extends React.Component {
    render(){
        return(
        <div className="body">
            <div className="container">
            <div className="nav">
                <div className="logo">
                    <img src="./Vector1.png" alt=""/>
                </div>
                <div className="prm">
                    <h1>Cluster Maul Hill</h1>
                </div>
                <div  className="prof">
                    <img src="./Ellipse.png" alt=""/>
                </div>
                <div className="us">
                    <h2> Aditya </h2>
                </div>
                </div>
            </div>
            <ul>
            <li className="boa">
            <Link to={"/"} className="type">Dashboard</Link>
            </li>
            <li className="tr">
            <Link to={"/transaksi"} className="no-type">Transaksi</Link>
            </li>
            <li className="ph">
            <Link to={"/penghuni"} className="no-type">Penghuni</Link>
            </li>
            <li className="ps">
            <Link to={"/Pesan"} class="no-type">Pesan</Link>
            </li>
            <li className="ber">
            <Link to={"/Berita"} className="no-type">Berita</Link>
            </li>
            </ul>
        <div class="con">
        <h1 class="sk">Dashboard</h1>
        <div class="tp">
            <h2 class="tph">Total Penghuni</h2>
            <p class="atph">90</p>
            <div className="bk"></div>
            <img src="img/Intersect.png" alt=""/>
                </div>
        </div>
        <div class="pb">
            <h2 class="pbl">Pemasukan Bulanan</h2>
            <p class="apbl">Rp 33.300.000</p>
        </div>
        <div class="sb">
            <h3 class="sby">Laki-laki</h3>
            <p class="asby">90</p>
        </div>
        <div class="bb">
            <h3 class="bby">Perempuan</h3>
            <p class="abby">3</p>
        </div>
    </div>
            
         );
    }
}

export default Dashboard;