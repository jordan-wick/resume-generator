import { useState } from 'react'
import PersonalSection from './components/personal/PersonalInfo.jsx';
// import Education from './components/education/Education.jsx';
// import Experience from './components/experience/Experience.jsx';
import Resume from './components/Resume.jsx';
import example from '../exampleData.jsx';
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState(example.personalInfo);
  const [educations, setEducations] = useState(example.educations);
  // const [experience, setExperience] = useState(example.experiences);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  }

  function handleEducationChange(e) {
    const { id } = e.target.dataset;
    setEducations({...educations, [id]: e.target.value});
  }

  return (
    <>
      <div className="edit">
        <PersonalSection
          name={personalInfo.name}
          phone={personalInfo.phone}
          email={personalInfo.email}
          onChange={handlePersonalInfoChange}
        />
        {/* <Education />
        <Experience /> */}
      </div>
      <Resume
        personalInfo={personalInfo}
        educations={educations}
        // experience={experience}
      />
    </>
  )
}

export default App
