import styled from "styled-components";

const SideBar = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  background-color: grey;
  padding-top: 20px;
`;
const ImageBlock = styled.div`
  min-width: 200px;
  max-width: 400px;
  padding: 5px;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const LinkElement = styled.p`
  text-transform: capitalize;
  width: 100%;
  padding: 5px;
  padding-left: 10px;
  &:hover {
    background-color: white;
    color: grey;
  }
`;
const LoadBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  padding-top: 200px;
`;
const CatsBlock = styled.div`
  display: flex;

  width: 80%;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: ${(props) => (props.next ? "#60a3bc" : "grey")};

  padding: 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;
const ButtonsBlock = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;

export {
  SideBar,
  ImageBlock,
  Image,
  LinkElement,
  LoadBlock,
  CatsBlock,
  Button,
  ButtonsBlock,
};
