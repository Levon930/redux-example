import React from "react";
import styled from "styled-components";
import { Image, ImageBlock } from "./styledComponents/my-styled-components";

const CatsElement = ({ dataCat }) => {
  return (
    <ImageBlock>
      <Image src={dataCat.url} />
    </ImageBlock>
  );
};
export default CatsElement;
