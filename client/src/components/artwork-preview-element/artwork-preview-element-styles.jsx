import styled from "styled-components"


export const TileContainer = styled.div`
    position:relative;

    figure {
  margin: 0;
    }
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        vertical-align: middle;

    }

    .title {
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
        text-align:center
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