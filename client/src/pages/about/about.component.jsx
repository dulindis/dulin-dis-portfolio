import React from "react";
import ProfilePic1 from "../../assets/profile/profile1.jpg";
import ProfilePic2 from "../../assets/profile/profile2.jpg";
import HelmetMetaData from '../../components/helmet-meta-data/helmet-meta-data';

const AboutPage = () => {
  return (
    <div className="about-page">
      <HelmetMetaData title="About - Dulin Dís"/>
      <h2>ABOUT</h2>
      <div className="author-description">
        <div className="author-description-text">
          <p className="">
            {" "}
            My deep passion for outworldish and strange landscapes brough
            together with love for painting inspire me to capture vibrant hues
            of nature. Static means yet dynamic themes. My name is Paulina and
            this page is showcasing pieces of my creative spirit, chipped off
            the solid block of hard logic. The attitude and approach I exhibit
            are the intertwining of cold reason, coated in oniric brainstorm of
            ideas.
          </p>
          <p className="right">
            The cord of my sensitivity is trembling in the norther winds,
            spiritual heart plays strokes by icy diamond dust. The cheeks blush
            under the leash of marine, salty breath. I would like to open for
            you the gates of wonder. Let yourself linger and dream about what is
            there to come.{" "}
          </p>
          {/* </div> */}
        </div>

        <div className="author-description-pictures">
          <div className="picture">
            <img src={ProfilePic1} alt="Paulina Okulska - Dulin Dís " />
          </div>
          <div className="picture">
            <img src={ProfilePic2} alt="Paulina Okulska - Dulin Dís" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
