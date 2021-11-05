import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import MainLayout from "../layout/MainLayout";

axios.defaults.baseURL = "http://localhost:3001/api";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
