export default function page({params}) {
  return (
    <div className="container-fluid">
        Course {params.courseid}

        <p>Lectures</p>
        <ol>
            <li>
                <a href="/course/1/lecture/1/abc/def">Lecture 1</a>
            </li>
            <li>
                <a href="/course/1/lecture/2/xxvc/dfdfd">Lecture 2</a>
            </li>
            <li>
                <a href="/course/1/lecture/3/fedfef/frewrwdew">Lecture 3</a>
            </li>
            <li>
                <a href="/course/1/lecture/4?a=wdwd&v=wdqwdwd&k=sdksdl">Lecture 4</a>
            </li>
            <li>
                <a href="/course/1/lecture/5">Lecture 5</a>
            </li>
        </ol>
    </div>
  )
}
