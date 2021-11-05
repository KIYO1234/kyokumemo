import React, { VFC } from "react";

export type Props = {
  song: string;
};

const SongsListItem: VFC<Props> = (props) => {
  return <li>{props.song}</li>;
};

export default SongsListItem;
