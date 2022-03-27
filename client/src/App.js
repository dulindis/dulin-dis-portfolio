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
import CategoryPage from './pages/category/category.component'

function App() {


  // const [artworks,setArtworks] = useState([]);

  // useEffect(()=>{
  //     //axios
  //   const getData = async (url) => {
  //     await axios.get(url).then(res=>{console.log(res)});
    
  //   };

  //   const fetchedArtworks = getData('/api/artworks');
  //   setArtworks(fetchedArtworks)
  // },[])

//with fetch
// const getData = async (url) => {
//   const newData = await fetch(url,{
//     method:'GET',
//     headers:{
//       'content-type':'application/json',
//       'accept':'application/json',

//     }
//   }).then(res=>res.json());
//   console.log(newData)
// }

//with axios
  



  return (
    <div className="App">
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div class="wrapper">
        <Routes>
        {/* <ErrorBoundary>
        <Suspense fallback={<Spinner />}> */}

        
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route exact path="/gallery" element={<GalleryPage/>} />
          <Route   path="/gallery/:category" element={<CollectionOverview/>} />
            <Route   path="/gallery:category/:artworkId" element={<CategoryPage/>} />

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
