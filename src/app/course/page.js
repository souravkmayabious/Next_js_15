import Link from "next/link";

export default function page() {
  return (
    <div className="container-fluid">
        <p>Course page</p>
        <p>List of courses</p>
        <ol>
            <li><Link href="course/1">Course 1</Link></li>
            <li><Link href="course/2">Course 2</Link></li>
            <li><Link href="course/3">Course 3</Link></li>
            <li><Link href="course/4">Course 4</Link></li>
            <li><Link href="course/5">Course 5</Link></li>
            
        </ol>
    </div>
  )
}
