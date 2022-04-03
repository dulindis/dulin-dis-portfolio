import styled from 'styled-components';
import { Link,NavLink } from 'react-router-dom';


export const HeaderContainer = styled.div`
  ${'' /* position:fixed;
  left:0;
  top:0;
  width:100%;
  z-index:1; */}
  background-color:white;

 display:flex;
 height:100px;
 ${'' /* height:15vh; */}
 ${'' /* min-height: 80px; */}
 justify-content: space-between;
 ${'' /* margin-bottom: 25px; */}

 ${'' /* @media screen and (max-width: 800px) {
     height:60px;
     padding:10px;
     margin-bottom:20px
  } */}


`

export const LogoContainer = styled(NavLink)`
display: flex;
  flex-direction:column;
  justify-content:center;

  ${'' /* height: 100%; */}
  width: 80px;
  padding: 5px;
  margin:10px
  ${'' /* @media screen and (max-width: 800px) {
        width:50px;
        padding:2px
  } */}
`



export const OptionsContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;

    font-size: 14px;
    ${'' /* color:$color-base; */}
    ${'' /* @media screen and (max-width: 800px) {
             width:80%
  } */}
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  cursor: pointer;
`;

// export const logoStyle = {
//     width:100%
// }