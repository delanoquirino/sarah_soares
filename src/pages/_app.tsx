import { Header } from "@/components/Header";
import { GlobalStyle } from "@/styles/globals";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />;
    </>
  );
}
