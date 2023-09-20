import "./OptionNavBar.css"

export default function OptionNavBar(props) {
  return (
    <li className={"d-flex flex-column align-items-center rounded-1 px-2 py-1 " + (props.selected ? "bg-light text-primary-color" : "text-light")}>
      <i className={props.className}></i>
      <p className="m-0 text-option-bar">{props.texto}</p>
    </li>
  );
}
