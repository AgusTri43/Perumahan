import React from "react";
import { Link, } from "react-router-dom";
import "../style/psn.css";
import Sidebar from "./sidebar";

class Pesan extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="container">
        <div className="sidebar">
                <Sidebar/>
            </div>
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
      </div>
    );
  }
}

export default Pesan;
