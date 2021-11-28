import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header style={{ height: "40px", border: "solid 1px #000" }}>
      <Link href="/">HOME</Link>
      <Link href="/page1">게시판</Link>
    </header>
  );
}

export default Header;
