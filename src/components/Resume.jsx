export default function Resume({ personalInfo }) {
  return (
    <div className="resume">
      <h1 className="resume-name">{personalInfo.name}</h1>
      <div className="resume-details">
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.email}</p>
      </div>
    </div>
  )
}