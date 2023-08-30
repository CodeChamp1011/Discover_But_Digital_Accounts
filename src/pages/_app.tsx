import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import "@/assets/scss/styles.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
