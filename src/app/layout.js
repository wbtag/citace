import "./globals.css";
import { EB_Garamond } from 'next/font/google';

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: "Umělecké citace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${garamond.className}`}>
        {children}
      </body>
    </html>
  );
}
