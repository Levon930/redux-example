import React from "react";
import styled from "styled-components";

const Loader = () => {
  const Spinner = styled.div`
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border: 10px solid;
    border-radius: 50%;
    border-left-color: transparent;
    border-top-color: #5cb85c;
    border-right-color: transparent;
    border-bottom-color: gray;
    animation: spin 500ms infinite linear;

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes anim {
      0% {
        bottom: 20px;
      }
      50% {
        bottom: 0;
      }
      100% {
        bottom: 20px;
      }
    } ;
  `;
  return <Spinner></Spinner>;
};
export default Loader;
