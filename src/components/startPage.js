import React from "react";

const StartPage = () => {
  const styles = {
    block: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      height: "100%",
      marginTop: "200px",
    },
    text: {
      fontSize: 50,
    },
  };
  return (
    <div style={styles.block}>
      <p style={styles.text}>Select a category</p>
    </div>
  );
};

export default StartPage;
