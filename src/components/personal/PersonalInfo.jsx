import Input from "../Input.jsx";

export default function PersonalSection({ name, phone, email, onChange }) {

  return (
    <div className="general section">
      <h1>General Information</h1>
      <Input
        id='name'
        type='text'
        label='Name'
        placeHolder='e.g. Walter White'
        value={ name }
        onChange={onChange}
      />
      <Input 
        id='phone' 
        type='tel'
        label='Phone Number' 
        placeHolder='(xxx) xxx-xxxx' 
        value={phone}
        onChange={onChange}
      />
      <Input 
        id='email' 
        type='email'
        label='Email Address' 
        placeHolder='walt@vamanospest.com' 
        value={email}
        onChange={onChange}
      />
    </div>
  )
}