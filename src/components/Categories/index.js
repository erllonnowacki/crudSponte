import React, { useState } from "react";

import { Container, Categorie } from "./style";
import Tag from "../Tag";

function Categories({ label, name, help, values, setValues }) {
  const [newItem, setNewItem] = useState("");

  const handleAddItem = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (!values.find((value) => value === newItem)) {
        setValues([...values, newItem]);
      }
      setNewItem("");
    } else if (event.key === ",") {
      event.preventDefault();
      if (!values.find((value) => value === newItem)) {
        setValues([...values, newItem]);
      }
      setNewItem("");
    }
  };

  const handleRemoveItem = (item) => {
    setValues(values.filter((value) => value !== item));
  };

  return (
    <Container>
      <label htmlFor={name}>
        {label}
        {help !== "" && <span>{help}</span>}
        <input
          id={name}
          name={name}
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          onKeyDown={(event) => handleAddItem(event)}
        />
      </label>
      <Categorie>
        {values &&
          values.map((item) => (
            <Tag
              key={item}
              label={item}
              onClick={() => handleRemoveItem(item)}
            />
          ))}
      </Categorie>
    </Container>
  );
}

export default Categories;
