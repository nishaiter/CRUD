import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import '../css/style.css';
import Footer from "./Footer";
import Addpro from "./Addpro";
import Showpro from "./Showpro";
import Deletepro from "./Deletepro";
import Editpro from "./Editpro";

function App() {
  return (
    <BrowserRouter>
      <div >
        <Header/>
          <Routes>
          <Route  path='/' element={< Addpro />}/>
          <Route path="/showPro" element={<Showpro/>}/>
          <Route path="/deletepro/:pid" element={<Deletepro/>}/>
          <Route path="/editpro/:pid" element={<Editpro/>}/>
          </Routes>


        {/* <Footer/> */}
      </div>
    </BrowserRouter>
   
  );
}

export default App;
