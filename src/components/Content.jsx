import React from "react";

import ItemList from "./ItemList";

export default function Content({ items,setItems,handleCheck,handleDelete }) {
  return (
    <>
      <main>
        {items.length ? (
          // <ul className="item">
          //   {items &&
          //     items.map((item) => (
          //       <li key={item.id}>
          //         <input
          //         onChange={()=>handleCheck(item.id)}
          //          type="checkbox"
          //         checked={item.checked} />
          //         <label
          //         style={(item.checked)?{textDecoration:"line-through"}:null}
          //         className="p-3 fs-5"
          //         onDoubleClick={()=>handleCheck(item.id)}>
          //             {item.item}
          //        </label>
          //         <MdDelete role="button" tabIndex="0" onClick={()=>handleDelete(item.id)}/>
          //       </li>
          //     ))}
          // </ul>
          <ItemList
            items={items}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <p> Your list is empty</p>
        )}
      </main>
    </>
  );
}
