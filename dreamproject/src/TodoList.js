import React, { useState } from 'react'

function TodoList() {
   const[Activities,setActivities]=useState(" ");
   const[listdata,setlistdata]=useState([]);
   function Addhandle(){
      // setlistdata([...listdata, Activities])
       //console.log(listdata);

       setlistdata((listdata)=>{
        const updatedata=[...listdata, Activities]
        console.log(updatedata);
        setActivities('');
        return   updatedata;
       })
   }
   function removeActivities(i){
           const updatedata=listdata.filter((elem,id)=>{
            return i!=id
   })
           setlistdata(updatedata);
   }

  return (
    <>
    <h1>TODOLIST</h1>
    <input type="text" placeholder='Enter the text' value={Activities}  onChange={(e)=>setActivities(e.target.value)}/>
    <button  onClick={Addhandle}>Submit</button>
    {listdata!=[] && listdata.map((data,i)=>{
        return(
            <>
                 <p key={i}>
                 <div>{data}</div>
                 <button onClick={()=>removeActivities(i)}>remove(-)</button>
                 </p>
            </>
        )
    })}
    
    </>
  )
}

export default TodoList;


