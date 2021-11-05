import React from "react";
import AppBar from "@mui/material/AppBar";
import styles from "./index.module.scss";

const MainHeader = () => {
  return (
    <>
      <AppBar className={styles.base}>
        <div className={styles.contentContainer}>kyokumemo</div>
      </AppBar>
    </>
  );
};

export default MainHeader;
