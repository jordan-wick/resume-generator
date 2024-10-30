export default function Resume({ personalInfo, educations }) {
  return (
    <div className="resume">
      <h1 className="resume-name">{personalInfo.name}</h1>
      <div className="resume-details">
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.email}</p>
      </div>
      <div className="resume-education">
        <h2>Education</h2>
        {/* Loop isn't working */}
        {educations.forEach(education => {
            return (
              <div className="education-group" data-key={education.id}>
                <div className="left">
                  <h3>{education.school}</h3>
                  <p>{education.degree}</p>
                  <p>{education.major}</p>
                </div>
                <p>{education.graduated}</p>
              </div>
            )

          // if (!education.isCollapsed) {
          //   return (
          //     <div className="education-group" data-key={education.id}>
          //       <div className="left">
          //         <h3>{education.school}</h3>
          //         <p>{education.degree}</p>
          //         <p>{education.major}</p>
          //       </div>
          //       <p>{education.graduated}</p>
          //     </div>
          //   )
          // } else {
          //   return (
          //     <h3>{education.school}</h3>
          //   )
          // }
        })}
      </div>
    </div>
  )
}