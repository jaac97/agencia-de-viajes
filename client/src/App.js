import React from 'react';
import { Routes, Route } from "react-router-dom";
// Importando Main Layout
import Layout from './views/Layout';
import Nosotros from './views/Nosotros';
import Testimoniales from './views/Testimoniales';
import Viajes from './views/Viajes';


function App() {


  return ( 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Nosotros />} />
        <Route path='nosotros' element={<Nosotros />} />

        <Route path='viajes' element={<Viajes />} />
        <Route path='testimoniales' element={<Testimoniales />} />

      </Route>
    </Routes>
  );
}

export default App;
