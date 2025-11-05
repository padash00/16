// app/layout.tsx
import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "F16 ARENA | Киберспортивный клуб",
  description: "66 ПК, VR, PS5 и SimRacing. Частоты до 540Hz. 24/7.",
  generator: "v0.dev",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  // при деплое можно проставить актуальный домен
  // metadataBase: new URL("https://f16arena.kz"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${orbitron.variable} ${roboto.variable}`}>
      <body className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white min-h-screen antialiased">
        {/* --- Google Tag (gtag.js) --- */}
        <Script
          id="gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17035700062"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17035700062');
            `,
          }}
        />

        {/* --- Varioqub (ymab) --- */}
        <Script
          id="ymab"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(e, x, pe, r, i, me, nt){
                e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)};
                me=x.createElement(pe); me.async=1; me.src=r;
                nt=x.getElementsByTagName(pe)[0];
                me.addEventListener('error',function(){
                  function cb(t){t=t[t.length-1]; if (typeof t === 'function') t({flags:{}});}
                  Array.isArray(e[i].a) && e[i].a.forEach(cb);
                  e[i]=function(){cb(arguments)};
                });
                nt.parentNode.insertBefore(me,nt);
              })(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
              ymab('metrika.99885911', 'init');
            `,
          }}
        />

        {/* --- Yandex.Metrika --- */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(101414431, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
              });
            `,
          }}
        />

        {/* noscript для Метрики */}
        <noscript>
          <img
            src="https://mc.yandex.ru/watch/101414431"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
