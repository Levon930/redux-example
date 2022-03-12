import React from "react";
import { Link } from "react-router-dom";

import { LinkElement } from "./styledComponents/my-styled-components";

const Category = ({ categoryData }) => {
  const styles = {
    link: {
      textDecoration: "none",
      color: "white",
      width: "100%",
    },
  };

  return (
    <Link to={`/cats/${categoryData.id}`} style={styles.link}>
      <LinkElement>{categoryData.name}</LinkElement>
    </Link>
  );
};
export default Category;
