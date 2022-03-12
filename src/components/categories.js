import { unwrapResult } from "@reduxjs/toolkit";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
//import styled from "styled-components";
//import useFetch from "../hooks/useFetch";
import {
  fetchCategory,
  selectCategory,
  selectStatus,
} from "../redux/slice/getCatrgorySlice.ts";
//import { loadCategory } from "../redux/sliceRedux/categorySlice";
import Category from "./category";
//import { CurrentCatContext } from "./context/context";
import { SideBar } from "./styledComponents/my-styled-components";

const CategoriesComponent = () => {
  //const [{ response, error, isLoading }, doFetch] = useFetch("categories");
  //const [{ dataCategories }, dispatch] = useContext(CurrentCatContext);

  const dispatch = useDispatch();
  const dataCategories = useSelector(selectCategory);
  const status = useSelector(selectStatus);
  //const dataCategories = useSelector((state) => state.category);
  useEffect(() => {
    if (status === "idle") {
      try {
        const result = dispatch(fetchCategory());
        unwrapResult(result);
      } catch (e) {
        console.log(e, "error");
      }
    }
  }, [status, dispatch]);
  /* useEffect(() => {
    dispatch(loadCategory());
  }, []); */

  return (
    <SideBar>
      {dataCategories &&
        dataCategories.map((category) => {
          return (
            <div key={category.id}>
              <Category categoryData={category} />
            </div>
          );
        })}
    </SideBar>
  );
};
export default CategoriesComponent;
