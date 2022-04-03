import styled from "styled-components"

export const CollectionOverviewContainer = styled.div `
    ${'' /* width:60vw;
    overflow: hidden; */}
    display: flex;
    align-items: center;
    flex-direction: column; 
    height:100%;
    margin: 0 auto;

`

export const GridContainer = styled.div `
      height: 100%;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 1rem;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        ${'' /* position:relative; */}
      }
      .tile:nth-child(2),
      .tile:nth-child(3){
          grid-column: span 2;
        }

      .tile:nth-child(4),
      .tile:nth-child(5){
          grid-column: span 3;
      }
`