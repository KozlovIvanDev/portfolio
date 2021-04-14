import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const CopyrightSection = () => {

  return (
    <Copyright>
      <div className="copyright_date">Copyright &copy; Kozlov Ivan 2021. All Rights Reserved.</div>
    </Copyright>
  );
};

const Copyright = styled(About)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  font-size: 1.25rem;
  font-weight: 500;
  width: 100vw;
  padding: 2rem;
  }
`;

export default CopyrightSection;
