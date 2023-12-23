import styled from "styled-components";

const Buttons = styled.button`
font:inherit;
border: 1px solid blueviolet;
color: blueviolet;
background-color: pink;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
cursor: pointer;

&:focus {
outline: none;
}

&:hover,
&:active {
background: rgb(224, 10, 117);
border-color: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

export default Buttons;