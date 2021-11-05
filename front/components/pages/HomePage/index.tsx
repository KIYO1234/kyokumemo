import React, { VFC, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import styles from "./index.module.scss";
import { GetServerSidePropsContext } from "next";
import SongsListItem from "../../organisms/SongsListItem";

export type MysqlUsers = {
  id: number;
  username: string;
  email: string;
  password: number;
  createdAt: Date;
  updatedAt: Date;
}[];

export type Users = {
  id: number;
  name: string;
  email: string;
}[];

export type Props = {
  sampleSongList: string[];
  sampleSong?: string;
  text?: string;
  users?: Users;
  mysqlUsers?: MysqlUsers;
};

const HomePage: VFC<Props> = ({ users, mysqlUsers, sampleSongList }) => {
  // console.log("HomePage rendered");
  // console.log("props.sampleSongList: ", props.sampleSongList);
  // console.log("props.text: ", props.text);
  // console.log("⭐️ props.users: ", props.users);
  // console.log("users: ", users);

  if (users) {
    return (
      <>
        <div className={styles.container}>
          <ul>
            {sampleSongList.map((sampleSong) => (
              <SongsListItem song={sampleSong} />
            ))}
          </ul>
          <ul>
            {users.map((user) => (
              <li>{user.name}</li>
            ))}
          </ul>
          <ul>
            {mysqlUsers?.map((sqlUser) => (
              <li>{sqlUser.username}</li>
            ))}
          </ul>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default HomePage;
