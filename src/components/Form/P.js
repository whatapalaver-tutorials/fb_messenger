import react from "react";
import styled from "styled-components";

const P = styled.p`
  padding-top: "10px";
  ${props =>
    props.quote &&
    `
    padding-top: 10px;
    padding-left: 10px;
    border-left: 4px solid grey;
  `}
`;

export default P;
