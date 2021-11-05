import type { NextPage } from "next";
import HomePage from "../components/pages/HomePage";
import MainHeader from "../components/organisms/MainHeader";
import axios from "axios";
import { MysqlUsers } from "../components/pages/HomePage";

export type Users = {
  id: number;
  name: string;
  email: string;
}[];

export type Songs = {
  id: number;
  title: string;
  userId: number;
  composer: string;
  lyricist: string;
  publishedAt: string;
  singer: string;
}[];

export type Props = {
  users: Users;
  mysqlUsers: MysqlUsers;
  sampleSongList: string[];
  songs: Songs[];
};

const Home: NextPage<Props> = (props) => {
  console.log("props.songs: ", props.songs);

  const sampleSongList = props.sampleSongList;

  return (
    <>
      <HomePage
        sampleSongList={sampleSongList}
        users={props.users}
        mysqlUsers={props.mysqlUsers}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const sampleSongList = ["変わらないもの", "Moon Crying", "恋唄"];
  const text = "Hello World";
  let users;
  await axios
    .get("/v1/users")
    .then((response) => {
      users = response.data;
      // console.log("👧 users: ", users);
    })
    .catch((err) => {
      console.log("error: ", err);
    });

  let mysqlUsers;
  await axios
    .get("/v1/users/mysql")
    .then((res) => {
      // console.log("⛴  res.data from mysql: ", res.data);
      mysqlUsers = res.data;
    })
    .catch((err) => {
      console.log("error: ", err);
    });

  let songs;
  await axios
    .get("/v1/songs")
    .then((res) => {
      console.log("♫ songs from MySQL: ", res.data);
      songs = res.data;
    })
    .catch((err) => {
      console.log("error: ", err);
    });

  return {
    props: {
      sampleSongList,
      text,
      users,
      mysqlUsers,
      songs,
    },
  };
};

export default Home;
