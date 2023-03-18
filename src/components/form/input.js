export default function FormInput(props) {
  return (
      <input
          className={`${props.capitalize ?? ""} 
          w-full rounded-md bg-neutral-900 focus:outline-none p-2`}
          id={props.id}
          name={props.name}
          type={props.type}
          min={props.min}
          max={props.max}
          maxLength={props.maxLength}
          onChange={props.onChange}
          value={props.value}
          checked={props.checked}
          placeholder={props.placeholder}
          required={props.required}
      />
  );
};