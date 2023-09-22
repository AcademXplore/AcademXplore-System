import "./ButtonSubmit.css"

export default function ButtonSubmit({text, ...props}) {
  return (
    <button className="btn-login w-50 " type="submit" {...props}>{text}</button>
  );
}
