import React from 'react'

export const ItemTable = (props) => {
  return (
    <tr  key={props._id} >
    <td class='px-3 py-3 text-lg '>{props.ItemName}</td>
    <td class='px-3 py-3 text-lg '>{props.SellingPrice}</td>
    <td class='px-3 py-3 text-lg '>{props.Units}</td>
   
  
 </tr>
  )
}
