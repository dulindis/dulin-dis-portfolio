import styled from 'styled-components';
import Background from '../../assets/background/directory-bcg-img.jpg';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height:100%;
  padding:30px 50px;
  flex-grow:1;

  background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.034) 50%, rgba(255, 255, 255, 0) 30%, rgba(251, 251, 251, 0.103) 20%), 
  url(${Background}); 
  background-position: center;
  background-size: cover;
  filter: brightness(.8);
  transition: filter 0.4s ease;
  &:hover {
      filter: brightness(1);
  }
`;