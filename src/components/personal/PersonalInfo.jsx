import Input from "../Input.jsx";

export default function PersonalSection({ name, phone, email, onChange }) {

  return (
    <div className="general section">
      <h1>General Information</h1>
      <Input
        id='name'
        type='textarea'
        label='Name'
        placeHolder='e.g. Walter White'
        value={ name }
        onChange={onChange}
        data-key='name'
      />
      <Input 
        id='phone' 
        type='tel'
        label='Phone Number' 
        placeHolder='(xxx) xxx-xxxx' 
        value={phone}
        onChange={onChange}
        data-key='phone'
      />
      <Input 
        id='email' 
        type='email'
        label='Email Address' 
        placeHolder='walt@vamanospest.com' 
        value={email}
        onChange={onChange}
        data-key='email'
      />
    </div>
  )
}