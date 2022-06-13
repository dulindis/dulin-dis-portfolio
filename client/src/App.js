/* eslint-disable */
import React, {useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './sass/main.scss';

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component.jsx";

import LoaderWrapper from './components/loader-wrapper/loader-wrapper.component';
import Loader from "./components/loader/loader.component";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";
// import Spinner from "./components/spinner/spinner.component.jsx";

import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component.jsx";
import ContactPage from "./pages/contact/contact.component";
// import GalleryPage from './pages/gallery/gallery.component';
// import CollectionOverview from "./components/collection-overview/collection-overview.component";
// import ArtworkComponent from './pages/artwork/artwork.component';


// const HomePage = React.lazy(()=>import("./pages/homepage/homepage.component"));
// const AboutPage = React.lazy(()=>import("./pages/about/about.component.jsx"));
// const ContactPage = React.lazy(()=>import("./pages/contact/contact.component"));
const GalleryPage = lazy(()=>import('./pages/gallery/gallery.component'));
const CollectionOverview = lazy(()=> import( "./components/collection-overview/collection-overview.component") )
const ArtworkComponent = lazy(()=>import('./pages/artwork/artwork.component')) ;



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => setLoading(false), 3000)
  },[]);


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Routes>
          {/* <ErrorBoundary> */}
          {/* <Suspense fallback={<Loader />}> */}

          
            <Route exact path="/" element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="contact" element={<ContactPage/>} />
            {/* <Route exact path="gallery" element={<GalleryPage/>} /> */}
            {/* <Route exact  path="/gallery/:category" element={<CollectionOverview/>} /> */}
              {/* <Route   path="/gallery/:category/:artworkId" element={<ArtworkComponent/>} /> */}

            <Route exact path="gallery" element={
              <Suspense fallback={<Loader />}>
                <GalleryPage/>  
              </Suspense>            
            } />

        
            <Route exact  path="/gallery/:category" element={
              <Suspense fallback={<Loader />}>
                  <CollectionOverview/>
              </Suspense>   
            
            } />
              <Route   path="/gallery/:category/:artworkId" element={
                 <Suspense fallback={<Loader />}>
                   <ArtworkComponent/>
                   
                </Suspense>  

              } />

            {/* <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/gallery" component={GalleryPage} />
              <Route exact  path="/gallery/:category" component={CollectionOverview} />
              <Route   path="/gallery/:category/:artworkId" component={ArtworkComponent} /> */}
            
            


            <Route path="*">error</Route>
            {/* </Suspense> */}
            {/* </ErrorBoundary> */}
          </Routes>
        </div>
      </BrowserRouter>
      
      <Footer />
      {loading === false ? null : <LoaderWrapper/>}
      {/* {loading === false ? null : <LoaderWrapper/>} */}
      {/* {loader} */}
      {/* <LoaderWrapper/> */}
  </div>
  );
}

export default App;

