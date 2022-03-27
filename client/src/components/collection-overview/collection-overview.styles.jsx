import styled from "styled-components"

export const CollectionOverviewContainer = styled.div`
    ${'' /* width:60vw;
    overflow: hidden; */}
    display: flex;
  align-items: center;
  flex-direction: column; 
  height:100%;
  margin: 0 auto;

`

export const GridContainer = styled.div`
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      gap: 15px 15px;
      grid-auto-flow: row;
      grid-template-areas:
        "image-1 image-1 image-2 image-2 image-2 image-3 image-3"
        "image-1 image-1 image-4 image-4 image-4 image-3 image-3"
        "image-1 image-1 image-4 image-4 image-4 image-5 image-5"
        "image-6 image-6 image-7 image-7 image-7 image-5 image-5"
        "image-6 image-6 image-7 image-7 image-7 image-8 image-8";

`