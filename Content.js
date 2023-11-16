import React from 'react'
import { useState } from 'react';
import {FaTrashAlt} from "react-icons/fa";
const Content = () =>{
  const[items,setItems]=useState(
    [
      {
        id:1,
        checked:true,
        item:"Javascript"
      },
      {
        id:2,
        checked:false,
        item:"React Bacis"
      },
      {
        id:3,
        checked:false,
        item:"Read AI"
      }
    ]);
    const handleCheck=(id)=>{
     
      const listItems= items.map((item)=> 
      item.id===id ?{...item,checked: !item.checked} :item)
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify  
      (listItems))
    }
    const handleDelete=(id)=>{
      const listItems=items.filter((item)=>
      item.id !==id )
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify  
      (listItems))
      }

    
    return (
      <main>
        <ul>
          {items.map((item)=> ( 
          <li className="item" key={(item.id)}>
            <input type="checkbox"
            onChange={() =>handleCheck(item.id)}
            checked={item.checked}/>
            <label
              style={(item.checked)?{textDecoration:'line-through'}:null}
              onDoubleClick={()=> handleCheck(item.id)}>
              {item.item}</label>
            <FaTrashAlt 
             role="button"
             onClick={() =>handleDelete(item.id)}
             tableIndex="0"/>
          </li>)
          )}
        </ul>
          </main> 
    )  
       }    
  //               {  const Content = () => {
  //     function handleNameChange(){
  //  const name=["Raji","Kashvi","selvi"]; 
  //  const int=Math.floor(Math.random()*3);
  //  return name[int] }} */}

// }  */


// const handleClick =()=>{ */}
//   console.log("ThankYou")
// }

// const [count,setCount] =useState(100);
//const [name,setName]=useState(()=>Name());
// function incrementFunction(){
//   setCount((count) =>{return count+1})

// function decrementFunction(){
//   setCount(precount =>precount-1)
// }
//   return (
//     <div>
//         <h1 className='App-header'>React learning</h1>
//         <Content />
//         {/* <h2>Welcom {handleNameChange()} Basic React </h2>
//         <button  className="button" onClick={handleNameChange}>Subscribe</button>
//                                     */}
//         <button onClick={decrementFunction}>-</button>
//         <span>{count}</span>
//         <button onClick={incrementFunction}>+</button>
        
//     </div>
//   )
//  }

export default Content
