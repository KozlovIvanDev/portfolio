import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const DescriptionLeft = styled.div`
  flex: 1.25;
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
export const Works = styled.div`

`;
export const WorkLeft = styled.div`

`;
export const WorkRight = styled.div`

`;
