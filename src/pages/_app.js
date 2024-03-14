import "@/styles/globals.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ 
    weight: ['400', '800'],
    subsets: ["latin"],
    display: 'swap', 
});

export default function App({ Component, pageProps }) {
  return (
    <main className={notoSansJP.className}>
        <Component {...pageProps} />
    </main>
  ) 
}
