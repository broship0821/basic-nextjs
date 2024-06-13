/**
 * 넥제는 페이지 이동할때 무조건 layout 을 먼저옴
 * 그리고 url을 확인 후 해당 컴포넌트를 children에 넣음
 * url 확인 후 폴더 하나씩 들어가면서 layout 을 찾음
 * 레이아웃은 중첩될수 있음
 */

import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next로 만든 Movie page",
    default: "Default",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
