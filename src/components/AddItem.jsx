import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
function AddItem({newItem,setNewItem,handleSubmit}) {
  return (
    <>
    <form className='addform py-3' onSubmit={handleSubmit}>
       {/* <label htmlFor='addItem'>Add Item</label> */}
       <input
          autoFocus
          id='addItem'
          type ="text"
          placeholder='Add Items'
          required
          className='addinput'
          value = {newItem}
          onChange={(e)=>setNewItem(e.target.value)}
       />
       <button
       type='submit'
       aria-label='Add Item'
      className='addbutton'
       >
        <CiCirclePlus
         />
       </button>
    </form>
    </>
  )
}

export default AddItem