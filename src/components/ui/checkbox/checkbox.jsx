function Checkbox({
  onClick,
  isChecked,
  value,
  name,
  text,
  onChange,
  ...props
}) {


  return (
    <label onClick={() => onClick(value)}>
      <input
        type="checkbox"
        value={value}
        name={name}
        checked={isChecked}
        onChange={() => onChange(value)}
        {...props}
      />
      {text}
    </label>
  );
}
export default Checkbox;
