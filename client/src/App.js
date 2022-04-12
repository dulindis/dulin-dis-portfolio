import React, {useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Switch} from "react-router-dom";

import axios from 'axios';

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component.jsx";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component.jsx";

import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component.jsx";
import ContactPage from "./pages/contact/contact.component";
import GalleryPage from './pages/gallery/gallery.component';
import CollectionOverview from "./components/collection-overview/collection-overview.component";
import ArtworkComponent from './pages/artwork/artwork.component';

function App() {
  // useEffect(()=>{
  //   axios.get('http://localhost:8080/api/artwork').then(data=>console.log('data:',data))
  // },[])

  return (
    <div className="App">
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Header />
      <div className="wrapper">
        <Routes>
        {/* <ErrorBoundary>
        <Suspense fallback={<Spinner />}> */}

        
          <Route exact path="/" element={<HomePage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="contact" element={<ContactPage/>} />
          <Route exact path="gallery" element={<GalleryPage/>} />
          
          <Route exact  path="/gallery/:category" element={<CollectionOverview/>} />
            <Route   path="/gallery/:category/:artworkId" element={<ArtworkComponent/>} />

          {/* <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/gallery" component={GalleryPage} /> */}


          <Route path="*">error</Route>
          {/* </Suspense>
          </ErrorBoundary> */}
        </Routes>
      </div>
    </BrowserRouter>

    <Footer />
  </div>
  );
}

export default App;


// <Route exact path="gallery" element={<GalleryPage/>} >
// // <Route path=":category" element={<CollectionOverview/>}>
// //   {/* <Route path=":artworkId" element={<CollectionOverview/>}> */}
// // </Route>
// // </Route>