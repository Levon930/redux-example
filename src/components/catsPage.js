import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Loader from "./loading";
import CatsElement from "./catsElement";
import {
  LoadBlock,
  CatsBlock,
  Button,
  ButtonsBlock,
} from "./styledComponents/my-styled-components";
import { CurrentCatContext } from "./context/context";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats, newId, selectCats } from "../redux/slice/getCatsSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const CatsPage = ({ match }) => {
  const category_ids = match.params.slug;
  const [page, setPage] = useState(0);
  const URL = `images/search?limit=10&page=${page}&category_ids=${category_ids}`;
  //const [{ response, isLoading, limit }, doFetch] = useFetch(URL);
  //const [{ catsData }, dispatch] = useContext(CurrentCatContext);

  const catsData = useSelector(selectCats);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    if (page !== 0) {
      try {
        const result = dispatch(fetchCats({ id: category_ids, page: page }));
        unwrapResult(result);
      } catch (e) {
        console.log(e, "error");
      }
    }
  }, [page, category_ids]);

  useEffect(() => {
    setPage(1);
    dispatch(newId());
  }, [category_ids]);

  /*   useEffect(() => {
    if (response && page === 1) {
      //dispatch({ type: "GET_CATS", payload: response });
      dispatch(getCats(response));
    } else if (response) {
      // dispatch({ type: "NEXT_CATS", payload: response });
      dispatch(addCats(response));
    }
  }, [response]); */

  const styles = {
    left: {
      paddingLeft: "5px",
    },
    right: {
      paddingRight: "5px",
    },
  };
  if (status === "loading") {
    return (
      <LoadBlock>
        <Loader />
      </LoadBlock>
    );
  }
  console.log(catsData);
  if (catsData) {
    return (
      <div>
        <CatsBlock>
          {catsData.map((cat) => {
            return (
              <div key={cat.id}>
                <CatsElement dataCat={cat} />
              </div>
            );
          })}
        </CatsBlock>
        <ButtonsBlock>
          <div style={styles.right}>
            <Button
              next
              onClick={() => {
                setPage((prev) => ++prev);
              }}
            >
              Next
            </Button>
          </div>
        </ButtonsBlock>
      </div>
    );
  }
  return null;
};
export default CatsPage;
