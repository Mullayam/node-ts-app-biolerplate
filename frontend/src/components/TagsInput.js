import React from "react";
import "../assets/scss/TagsInput.scss";
const TagsInput = props => {
  const [tags, setTags] = React.useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);           
      props.setinfo({ ...props.info, [props.id]: tags });
            event.target.value = "";
    }
  };
   
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  return (
    <div className="tags-input">
    <ul id="tags">
      {tags.map((tag, index) => (
        <li key={index} className="tag">
          <span className='tag-title'>{tag}</span>
          <span className='tag-close-icon'
            onClick={() => removeTags(index)}
          >
            x
          </span>
        </li>
      ))}
    </ul>
    <input
      type="text"
       
      onKeyUp={(event) => event.key === "Enter" ? addTags(event) : null}
      placeholder={`Press Enter to add ${props.id}`}
    />
  </div>
  );
};
export default TagsInput;
