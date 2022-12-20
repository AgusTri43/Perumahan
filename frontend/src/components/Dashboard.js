import React from "react";
import { Link, } from "react-router-dom";
import "../style/db.css";
import Sidebar from "./sidebar";

class Dashboard extends React.Component {
    render(){
        
        return(
        <div className="body">
            <div className="container">
            <div className="sidebar">
                <Sidebar/>
            </div>
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
    </div>
            
         );
    }
}

export default Dashboard;