"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page_not_found.css";

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1>
          Error <span className="errorcode">404</span>
        </h1>
        <p className="output">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p className="output">
          Please try to{" "}
          <Link
           href="#"
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            go back
          </Link>{" "}
          or <Link href="/home">return to the homepage</Link>.
        </p>
        <p className="output">Good luck.</p>
      </div>
    </div>
  );
}
