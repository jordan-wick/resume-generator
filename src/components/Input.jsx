export default function Input({
  id,
  type,
  label, 
  placeHolder,
  "data-key": dataKey,
  value,
  onChange,
}) {

  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeHolder}
          data-key={dataKey}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input 
          id={id}
          type={type}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          data-key={dataKey}
        />
      )}
    </div>
  )
}
