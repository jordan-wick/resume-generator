import Input from "./Input.jsx";

export default function General() {

  return (
    <div className="general section">
      <h1>General Information</h1>
      <Input 
        id='firstName' 
        type='text'
        label='First Name' 
        placeHolder='Walter' 
      />
      <Input 
        id='lastName' 
        type='text'
        label='Last Name' 
        placeHolder='White' 
      />
      <Input 
        id='phone' 
        type='tel'
        label='Phone Number' 
        placeHolder='(xxx) xxx-xxxx' 
      />
      <Input 
        id='email' 
        type='email'
        label='Email Address' 
        placeHolder='walt@vamanospest.com' 
      />
    </div>
  )
}