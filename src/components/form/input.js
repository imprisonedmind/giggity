export default function FormInput(props) {
  return (
    <div className={"flex flex-col gap-1"}>
      {props.label && (
        <label className={"text-xs capitalize tracking-wide text-neutral-500"}>
          {props.label}
        </label>
      )}
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
        autoComplete={props.autoComplete}
        maxLength={props.maxLength}
        onChange={props.onChange}
        value={props.value}
        defaultValue={props.defaultValue}
        checked={props.checked}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}
