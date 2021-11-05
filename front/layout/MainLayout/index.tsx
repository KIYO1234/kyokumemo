import { ReactNode, VFC } from "react";
import MainHeader from "../../components/organisms/MainHeader";

export type Props = {
  children: ReactNode;
};

const MainLayout: VFC<Props> = (props) => {
  return (
    <>
      <MainHeader />
      {props.children}
    </>
  );
};

export default MainLayout;
