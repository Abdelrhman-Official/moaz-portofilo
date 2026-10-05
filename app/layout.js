import "./globals.css";

export const metadata = {
  title: "Moaz Hussein — Visual Designer • 2027 | معاذ حسين",
  description: "15-year-old visual designer. Brand identities, social systems, AI visuals, fashion pattern-making. Bilingual AR/EN portfolio."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@400;500&family=El+Messiri:wght@400;500;600;700&family=Almarai:wght@300;400;700;800&family=Caveat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
