import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import "./InputTags.css";

export function InputTags({setFieldValue, name, label, type, placeholder, ...props }) {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onChangeRemoveTag = (tag) => {
    const tagsCopy = [...tags];
    const index = tags.indexOf(tag);
    tagsCopy.splice(index, 1);
    setTags(tagsCopy);
    setFieldValue(name, tagsCopy.join(","))
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
      setFieldValue(name, [...tags, trimmedInput].join(","))
    }
  };

  return (
    <div className="d-flex flex-column ">
      <div className="w-100 px-3">
        <label className="fs-5" for={name + "-auxiliar"}>
          {label}
        </label>
      </div>
      <input
        className="w-100 py-2 px-4 rounded-4 border border-0 input-form-project"
        value={input}
        onKeyDown={onKeyDown}
        onChange={onChange}
        rows="4"
        id={name + "-auxiliar"}
        name={"input-auxiliar-" + name}
        placeholder={placeholder}
        type={type}
        
      />
      <Field
        className="d-none"
        id={name}
        type={type}
        name={name}
        {...props}
      />
      <div className="d-flex gap-3 w-100 py-2 px-4 rounded-4 border border-0 mt-3 tags-container flex-wrap ">
        {tags.map((tag) => {
          
          return (
            <div key={tag} className="tags d-flex gap-3 ">
              <span>{tag}</span>
              <i onClick={() => onChangeRemoveTag(tag)} className="bi bi-x"></i>
            </div>
          );
        })}
      </div>
      <div className="text-danger fw-medium" style={{fontSize: "12px"}}>
        <ErrorMessage name={name}/>
      </div>
    </div>
  );
}
