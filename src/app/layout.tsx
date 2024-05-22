import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 


{
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ASTER - Agrupació Astronòmica de Barcelona - Newsletter</title>
        <link href="https://res.cloudinary.com/db0me9nfi/raw/upload/v1716333305/Darmstadt/globals.css" rel="stylesheet" type="text/css"></link>
      </head>
      <body>
        <table align="center" width="800px">
          <tbody>
            <tr> 
              <td>
               {children}
              </td>
            </tr>
          </tbody>
        </table>
      </body> 
    </html>
  );
}
