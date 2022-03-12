import React from "react";
import styled from "styled-components";

const Header = () => {
  const Head = styled.div`
    background-color: gray;
    color: white;
    padding-left: 10px;
  `;
  return (
    <Head>
      <h1>Demo Cats</h1>
    </Head>
  );
};
export default Header;
