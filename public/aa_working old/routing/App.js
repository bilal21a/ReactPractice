import React from 'react';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import Error404 from './component/Error/Error404';

import Home from './component/Home';
import News from './component/News';


export default function App() {
  return <>
   
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:param" element={<News channel="Geo" />} />
          <Route path="*"  element={<Error404 />} />
    </Routes>
  </BrowserRouter>
    
  </>;
}


