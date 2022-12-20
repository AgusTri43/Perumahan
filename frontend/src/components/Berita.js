import React from "react";
import { Link } from "react-router-dom";
import "../style/br.css";

class Berita extends React.Component {
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
          <Link to={"/"} className="no-type">
          Dashboard
        </Link>
        </li>
        <li className="tr">
        <Link to={"/transaksi"} class="no-type">
          Transaksi
        </Link>
        </li>
        <li className="ph">
        <Link to={"/penghuni"} class="no-type">
          Penghuni
        </Link>
        </li>
        <li className="ps">
        <Link
          to={"/Pesan"}
          class="no-type"
        >
          Pesan
        </Link>
        </li>
        <li>
        <Link to={"/berita"} class="ber">
          Berita
        </Link>
        </li>
        </ul>
        
        <div class="con">
          <div className="sh">
            <h1>Berita</h1>
          </div>
          <div className="shh">
            <h3>Berita</h3>
          </div>
          <Link to={"/Tberita"} class="upl">Buat Berita Baru</Link>
          <div className="table">
            <table>
              <thead>
                <tr class="up">
                  <td className="no">No</td>
                  <td className="name">Judul</td>
                  <td className="ket">Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="usr1">1</td>
                  <td class="usr2">Lorem Ipsum dolor sit ame</td>
                  <td>
                    {" "}
                    <a class="lh">Edit</a>
                  </td>
                  <td>
                    <a class="ed">Hapus</a>
                  </td>
                </tr>
                <tr>
                  <td class="usr1">1</td>
                  <td class="usr2">Lorem Ipsum dolor sit ame</td>
                  <td>
                    {" "}
                    <a class="lh">Edit</a>
                  </td>
                  <td>
                    <a class="ed">Hapus</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Berita;
