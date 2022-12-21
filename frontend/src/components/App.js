import React from "react";
import LoginUser from "./LoginUser";
import LoginAdmin from "./LoginAdmin";
import Dashboard from "./Dashboard";
import Berita from "./Berita"
import Tberita from "./Tberita"
import Eberita from "./Eberita"
import Pesan from "./Pesan"
import Tagihan from "./Tagihan";
import Penghuni from "./Penghuni";
import Tambahpenghuni from "./Tambahpenghuni";
import Transaksi from "./Transaksi";
import Editpenghuni from "./editpenghuni";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginUser/>}/>
          <Route path="/loginadmin" element={<LoginAdmin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/transaksi" element={<Transaksi/>}/>
          <Route path="/penghuni" element={<Penghuni />} />
          <Route path="/tagihan" element={<Tagihan/>}/>
          <Route path="/tambahpenghuni" element={<Tambahpenghuni/>} />
          <Route path="/penghuni/editpenghuni/:id" element={<Editpenghuni/>} />
          <Route path="/Pesan" element={<Pesan/>}/>
          <Route path="/Berita" element={<Berita/>}/>
          <Route path="/TambahBerita" element={<Tberita/>}/>
          <Route path="/editberita" element={<Eberita/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
      
}

export default App;
