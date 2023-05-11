import "./Input.css";

export default function Input(props) {
  const err = props.error && "err";

  const iconPos =
    (props.iconPos === "start" && "start") ||
    (props.iconPos === "end" && "end") ||
    "";

  const size = (props.size === "sm" && "small") || "";

  const fullWidth = props.fullWidth && "full-width";

  const inputClasses = `${iconPos} ${size} ${fullWidth}`;

  return (
    <div className="container">
      <label className={err} id="input">
        Label
        {props.multiline ? (
          <textarea
            rows={props.rows}
            htmlFfor="input"
            className={inputClasses}
            placeholder="Placeholder"
            disabled={props.disabled}
            value={props.value}
          ></textarea>
        ) : (
          <input
            htmlFor="input"
            className={inputClasses}
            placeholder="Placeholder"
            disabled={props.disabled}
            value={props.value}
          />
        )}
        {props.helperText && <p>{props.helperText}</p>}
      </label>
    </div>
  );
}
