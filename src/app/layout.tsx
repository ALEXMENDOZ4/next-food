'use client';

import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry';
import Menu from '../components/Menu/Menu';
import { Poppins } from "next/font/google";
import { GlobalStyle } from './styles/GlobalStyles';
import * as sc from './styles/components';


const inter = Inter({ subsets: ['latin'] })


const poppins = Poppins({
  weight: ["100", "200", '300', '400', '500', '600', '700', '800', '900'],
  style: ["normal"],
  subsets: ["latin"]
})


export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.className} ${poppins.className}`}>
        {<Menu/>}
        <StyledComponentsRegistry>
          <GlobalStyle/>
          <sc.Container>
            {children}
          </sc.Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}