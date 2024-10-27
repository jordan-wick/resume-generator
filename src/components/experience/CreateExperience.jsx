import Input from '../Input.jsx';
import { useState } from 'react';

export default function CreateExperience({ company, position, start, end, description }) {
  const [experience, setExperience] = useState();

  return (
    <form>
      <label htmlFor="company">
        <Input 
          id='company' 
          type='text' 
          label='Company'
          placeholder='Company'
          value={experience.company}
        />
      </label>
      <label htmlFor="position">
        <Input 
          id='position' 
          type='text' 
          label='Position'
          placeholder='Position'
          value={experience.position}
        />
      </label>
      <label htmlFor="workStartMonth">
        <Input 
          id='workStartMonth' 
          type='month' 
          label='Start Month'
          placeholder='Start Month'
          value={experience.start}
        />
      </label>
      <label htmlFor="workEndMonth">
        <Input 
          id='workEndMonth' 
          type='month' 
          label='End Month'
          placeholder='End Month'
          value={experience.end}
        />
      </label>
      <label htmlFor="workDescription">
        <Input 
          id='workDescription' 
          type='text' 
          label='Description'
          placeholder='Position'
          value={experience.description}
        />
      </label>
    </form>
  )
}

CreateExperience.defaultProps = {
  company: 'xyzCorp',
  position: 'developer',
  start: '04-2020',
  end: '09-2022',
  description: 'Developed.'
}