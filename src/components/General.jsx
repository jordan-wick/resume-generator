import Input from "./Input.jsx";

export default function General() {

  return (
    <div className="general section">
      <h1>General Information</h1>
      <Input 
        id='firstName' 
        type='text'
        label='First Name' 
        placeHolder='John' 
      />
      <Input 
        id='lastName' 
        type='text'
        label='Last Name' 
        placeHolder='Snow' 
      />
      <Input 
        id='phone' 
        type='tel'
        label='Phone Number' 
        placeHolder='(xxx) xxx-xxxx' 
      />

    </div>
  )
}