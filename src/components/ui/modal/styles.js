import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;
  
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
export const Wrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colorWhite};
  width: 50%;
  height: 50%;
`;
