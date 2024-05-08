import React from "react";

import Lists from "./Lists";

function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <>
      <ul className="item">
        {items &&
          items.map((item) => (
            <Lists
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
            // <li key={item.id}>
            //   <input
            //     onChange={() => handleCheck(item.id)}
            //     type="checkbox"
            //     checked={item.checked}
            //   />
            //   <label
            //     style={item.checked ? { textDecoration: "line-through" } : null}
            //     className="p-3 fs-5"
            //     onDoubleClick={() => handleCheck(item.id)}
            //   >
            //     {item.item}
            //   </label>
            //   <MdDelete
            //     role="button"
            //     tabIndex="0"
            //     onClick={() => handleDelete(item.id)}
            //   />
            // </li>
          ))}
      </ul>
    </>
  );
}

export default ItemList;
