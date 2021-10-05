import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  max-width: 100px;
  border: none;
  border-radius: 3px;
  padding: 5px 15px;
  background-color: ${(props) =>
    props.type === "catalogue" ? "#250d81" : "#810d17"};
  color: #ffffff;
`;
