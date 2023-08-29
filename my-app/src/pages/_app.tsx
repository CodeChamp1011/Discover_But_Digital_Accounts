import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import "@/styles/globals.css";
import "@/assets/scss/styles.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
