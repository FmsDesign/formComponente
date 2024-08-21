import React from "react";

const Radio = ({ options, value, setValue, active, pergunta, ...props }) => {
  if (active === false) return null;
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "16px 8px",
        padding: "20px",
      }}
    >
      <h2>{pergunta}</h2>
      {options.map((option) => (
        <label style={{ display: "flex" }} key={option}>
          <input
            style={{ width: "auto", margin: "8px" }}
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Radio;
