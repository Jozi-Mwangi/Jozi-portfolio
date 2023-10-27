import * as React from "react";
import PropProvider from "./components/context-provider";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import { LeftPanel, RightPanel, Nav } from "./components/index";

import { ChildrenProps } from "./types";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Jozi Port",
  description: "Mwangi Joseph's Portfolio",
  openGraph: {
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

// interface RootLayoutProps {
//   children: React.ReactNode
// }

export default function RootLayout(prop: ChildrenProps) {
  return (
    <html lang="en">
      <body style={{ font: "Plus_Jakarta_Sans" }} className="bg-white">
        <div className="min-h-screen relative h-full w-full mx-auto">
          <div className="w-full max-w-screen-xl mx-auto relative">
            <PropProvider>
              <Nav />
              <LeftPanel />
              <RightPanel />
            </PropProvider>
            {prop.children}
          </div>
        </div>
      </body>
    </html>
  );
}
