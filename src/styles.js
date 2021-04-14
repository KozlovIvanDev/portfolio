import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  .contact-button{
    margin: 4rem 2rem;
    margin-bottom: 0.5rem;
    padding: 1rem 2rem;
    border:2px solid #00FFA3;
    background: transparent;
    color: #fafafa;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    transition:all .3s ease-in-out;
    &:hover{
      color: #282828;
      background: #00FFA3;
    }
  }
  .active-btn{
    background: #00FFA3;
    color: #282828;

    &:hover{
      color: #fafafa;
      border:2px solid #00FFA3;
      background: transparent;
    }
  }
`;
export const DescriptionLeft = styled.div`
  flex: 1;
  margin-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: 700;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const DescriptionRight = styled.div`
  flex: 1;
  margin-left: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const TextContainer = styled.div`
  width: 90%;
`;
export const ImageLeft = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: .75;
  overflow: hidden;
  border-radius: 5px;
  img {
    width: 100%;
    height: 70vh;
    margin: auto 0;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
export const Cursor = styled.div`
  position:absolute;
  z-index: 100000;
  width:15px;
  height:15px;
  background-color: #23d997;
  top: 0;
  left:0;
  border-radius: 100%;
  user-select:none;
  pointer-events: none;
`;