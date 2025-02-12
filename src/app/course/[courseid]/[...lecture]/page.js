export default function page({params}) {
  return (
    <div className="container-fluid">
         <h1>Course ID: {params.courseid}</h1>
         <h2>Lecture Path: {params.lecture?.join("/")}</h2>
    </div>
  )
}
