import Link from "next/link";
import Navbar from "../component/Navbar";

export default function Home() {
  return (
      <div className="container-fluid">
        <p>Home page</p>
        <Link href="/productlist">productlist - client component</Link> <br/>
        <Link href="/productlist2">productlist - server component</Link>
      </div>
  );
}
