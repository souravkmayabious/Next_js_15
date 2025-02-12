import Link from "next/link";

export default function abc() {
  return (
    <div className="container-fluid">
      <p> Movie Page</p>
      <ul>
        <li>
          <Link href="/movie/1">Movie 1</Link>
        </li>
        <li>
          <Link href="/movie/2">Movie 2</Link>
        </li>
        <li>
          <Link href="/movie/3">Movie 3</Link>
        </li>
        <li>
          <Link href="/movie/4">Movie 4</Link>
        </li>
        <li>
          <Link href="/movie/5">Movie 5</Link>
        </li>

      </ul>
    </div>
  );
}
