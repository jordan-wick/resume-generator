import Input from './Input.jsx'

export default function CreateExperience() {
  return (
    <form>
      <label htmlFor="company">
        <Input 
          id='company' 
          type='text' 
          label='Company'
          placeholder='Company'
        />
      </label>
      <label htmlFor="position">
        <Input 
          id='position' 
          type='text' 
          label='Position'
          placeholder='Position'
        />
      </label>
      <label htmlFor="workStartDate">
        <Input 
          id='workStartMonth' 
          type='month' 
          label='Start Month'
          placeholder='Start Month'
        />
      </label>
      <label htmlFor="workEndDate">
        <Input 
          id='workEndMonth' 
          type='month' 
          label='End Month'
          placeholder='End Month'
        />
      </label>
      <label htmlFor="workDescription">
        <Input 
          id='workDescription' 
          type='text' 
          label='Description'
          placeholder='Position'
        />
      </label>
    </form>
  )
}