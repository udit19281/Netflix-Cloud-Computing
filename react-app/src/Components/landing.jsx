import { useState } from "react";
import Header from "./header";
import styled from "styled-components";
import BgImage from "./bgImg";

function Landing() {
  return (
    <Container>
      <BgImage />
      <div className="content">
        <Header />
        {/* Main Page */}
      </div>
      <div className="body flex column a-center j-center">
        {/* Content */}
        
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  h1 {
    font-size: 3rem;
    color: white;
  }
  h4 {
    font-size: 1.5rem;
    color: white;
  }
  .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-rows: 10vh 90vh;
  }
  button {
    padding: 0.2rem 0.5rem;
  }
  .body {
    gap: 1rem;
    .text {
      text-align: center;
    }
  }
`;
export default Landing;
