import styled from "styled-components"


export const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    & span{
      color:white;
      font-size: 24px;
      position: absolute
    }
`;

export const GameBox = styled.div`
    height: ${(props)=>props.height}px;
    width: ${(props)=>props.width}px;
    background-color: blue;
    overflow: hidden
`;

export const Bird =styled.div`
  position:absolute;
  background-color: red;
  height: ${(props)=>props.size}px;
  width: ${(props)=>props.size}px;
  top: ${(props)=>props.top}px;
  border-radius:50%
`;

export const Obstacle = styled.div`
  position: relative;
  top: ${prop=>prop.top}px;
  background-color: green;
  height: ${(props)=>props.height}px;
  width: ${(props)=>props.width}px;
  left: ${(props)=>props.left}px;
`