export default function FormInput(props) {
  return (
    <input
      className={`${props.capitalize ?? ""} ${props.width}
          w-full rounded-md bg-neutral-900 p-2 text-sm focus:outline-none`}
      id={props.id}
      name={props.name}
      type={props.type}
      min={props.min}
      max={props.max}
      maxLength={props.maxLength}
      onChange={props.onChange}
      value={props.value}
      defaultValue={props.defaultValue}
      checked={props.checked}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}
