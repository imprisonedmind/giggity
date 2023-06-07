export default function FormInput(props) {
  return (
    <input
      className={`${props.capitalize ?? ""} ${props.width}  ${props.padding}
          w-full rounded-md border border-neutral-700 bg-neutral-900 p-2 text-sm
          text-neutral-500 placeholder-neutral-600 focus:border-green-500 focus:text-green-500
          focus:outline-none`}
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
