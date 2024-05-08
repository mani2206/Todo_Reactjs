import React from "react";
import { MdDelete } from "react-icons/md";

export default function Lists({item,handleCheck,handleDelete}) {
  return (
    <>
      <li key={item.id}>
        <input
          onChange={() => handleCheck(item.id)}
          type="checkbox"
          checked={item.checked}
        />
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          className="p-3 fs-5"
          onDoubleClick={() => handleCheck(item.id)}
        >
          {item.item}
        </label>
        <MdDelete
          role="button"
          tabIndex="0"
          onClick={() => handleDelete(item.id)}
          aria-label={`Delete ${item.item}`}
        />
      </li>
    </>
  );
}
