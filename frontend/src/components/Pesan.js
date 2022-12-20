import React from "react";
import { Link, } from "react-router-dom";
import "../style/psn.css";

class Pesan extends React.Component {
  render() {
    return (
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
        <ul>
            <li className="boa">
            <Link to={"/"} className="no-type">Dashboard</Link>
            </li>
            <li className="tr">
            <Link to={"/transaksi"} className="no-type">Transaksi</Link>
            </li>
            <li className="ph">
            <Link to={"/penghuni"} className="no-type">Penghuni</Link>
            </li>
            <li className="ps">
            <Link to={"/Pesan"} class="type">Pesan</Link>
            </li>
            <li className="ber">
            <Link to={"/Berita"} className="no-type">Berita</Link>
            </li>
            </ul>
        <div className="head">
          <div className="sp">
            <h1> Pesan</h1>
            <hr className="line"></hr>
            <div className="lineh"></div>
          </div>
        </div>
        <div className="kontainer">
          <div className="ava1">
            <div className="av">
              <img src="./Avatar.png" alt="" />
            </div>
            <div className="name1">
              <p>Agus Handsome</p>
            </div>
          </div>
          <div className="ava2">
            <div className="av1">
              <img src="./Avatar.png" alt="" />
            </div>
            <div className="name2">
              <p>Adit Handsome</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pesan;
