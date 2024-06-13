"use client";
/**
 * react vs NextJS 렌더링 차이점
 * 리엑트는 클라이언트 사이드 렌더링(CSR), 브라우저가 렌더링함, 모든 렌더링 작업이 클라이언트 측에서 실행됨, 맨 처음에는 id 만 가지고 있는 빈 div 태그였다가, 자바스크립트가 안에 내용을 채워넣음
 * 구글 검색에서는 html 을 보고있기 때문에, html이 비워져 있는 클라이언트 사이드 렌더링은 불리함
 * 넥제는 서버사이드 렌더링(SSR), 백엔드가 먼저 렌더링하고, 그리고 html 을 만들어서 브라우저에 내려줌
 * 렌더링: 자바스크립트 함수를 가져와서 브라우저가 이해할 수 있는 HTML로 변환하는 작업
 *
 * hydration
 * 넥제는 처음에 로드할때는 서버사이드 렌더링으로 html을 가져옴, 그리고 나서 리액트 코드를 입힘
 * 처음 새로고침 하면 html 가져오고, 그리고 네비게이션으로 넘어가면 리액트처럼 빠르게 화면이 넘어가짐
 *
 * "use client"; -> 이게 추가가 되면, hydrate 하게 컴포넌트를 가져온다는 뜻
 * 처음에는 서버 사이드 렌더링으로 html만 가져오고, 나중에 클라이언트 렌더링을 함
 * 리액트 코드가 하나도 없는 파일에서는 use client 쓸 필요가 없음, 서버사이드 렌더링만 하면되고, 그러면 불필요한 자바스크립트를 로드하지 않아서 빨라짐
 * use client 하면 이 페이지는 클라이언트 사이드 렌더링이라고 오해하기 쉬운데, 선 서버 후 클라이언트 되는 hybrate 로 봐야함
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navcss.module.css";

export default function Navigation() {
  const path = usePathname();
  // console.log(path);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "❤️" : ""}
        </li>
        <li>
          <Link href="/about-us">About uo</Link>
          {path === "/about-us" ? "❤️" : ""}
        </li>
      </ul>
    </nav>
  );
}
