import styled from "styled-components";

export const AboutPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; 
  height:100%;
  margin: 0 auto;
`;

export const AuthorContainer = styled.div`
  display:flex;
  width:80vw;

  @media (max-width: 800px) {
    flex-direction:column;
    width:100%
  }
`;
export const Section = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: centre;
  flex-direction: ${props=>props.type || ''};
  ${'' /* overflow:hidden; */}

  @media (max-width: 800px) {
    width:100%
  }


  p {
    padding: 10px 15px
  }
  .picture {
    width: 45%;
                    overflow: hidden;

  }
  img {        
    height: 100%;
                        width:100%;
                        object-fit: cover;
                        object-position: 50% 100%;
                        filter: brightness(.5);
                        transition: filter 0.3s ease;
                        &:hover {
                            filter: brightness(1);
                        }
        
   }

`;



// .about {
//     @include pageColumnBasicSetup;

//     .author {
//         height:100%;
//         width:60vw;
//         min-width: 70%;
//         display: flex;
//         flex-direction: column;
//         // margin: 35px 0;
//         // justify-content: center;
//         // justify-items:centre;
//         .author-details {
//             display:flex;

//             .author-text {
//                 width: 50%;
//                 margin: 20px 50px 20px 0;
//                 color: $color-base;
//                 @include flexboxColumn;
//                 justify-content: centre;

//                 p {
//                     margin-bottom: 30px;
//                 }
//                 p:last-of-type {
//                     margin-bottom: 0;

//                 }
//                 .right {
//                     text-align: right;
//                   }

//             }

//             .author-pictures {
//                 display: flex;
//                 justify-content: space-between;
//                 width: 50%;

//                 .picture {
//                     width: 45%;
//                     overflow: hidden;
//                     // height:100%;
//                     // object-fit: cover;
//                     // object-position: 50% 50%;
//                     img {
//                         height: 100%;
//                         width:100%;
//                         object-fit: cover;
//                         object-position: 50% 100%;
//                         filter: brightness(.5);
//                         transition: filter 0.3s ease;
//                         &:hover {
//                             filter: brightness(1);
//                         }
//                     }
//                 }

//             }
//         }

//     }

// }
