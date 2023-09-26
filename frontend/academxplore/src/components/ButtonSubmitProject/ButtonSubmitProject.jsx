import "./ButtonSubmitProject.css"

export default function ButtonSubmitProject({text, ...props}) {
  return (
    <button className="btn btn-submit-project col-12 col-md-4 align-self-end " type="submit" {...props}>{text}</button>
  );
}
