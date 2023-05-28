import React, { useState } from "react";

function Form({ children, className, onFinish, ...rest }) {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const traverseChildren = (children) => {
    return React.Children.map(children, (child) => {
      if (child?.props?.children) {
        return React.cloneElement(child, {
          children: traverseChildren(child.props.children),
        });
      }

      if (child?.props?.name) {
        return React.cloneElement(child, {
          value: formValues[child.props.name] || "",
          onChange: handleChange,
        });
      }

      return child;
    });
  };

  return (
    <form className={`${className}`} onSubmit={handleSubmit} {...rest}>
      {traverseChildren(children)}
    </form>
  );
}

export default Form;
