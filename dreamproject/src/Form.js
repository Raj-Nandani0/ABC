import React, { useEffect, useState } from 'react'

function Form() {
    const data={name:"", email:"",password:""};
    const[inputdata,setinput]=useState(data);
    const[flag,setflag]=useState(false);
    function handledata(e){
        setinput({...inputdata,[e.target.name]:e.target.value})
        console.log(inputdata);
    }
    function handlesubmit(e){
        e.preventDefault();
        if(!inputdata.name || inputdata.email || inputdata.password){
            alert("All Field are mandatory");
        }
        else{
            setflag(true);
        }
    }
    useEffect(()=>{
       console.log("Registration");
    },[flag])
  return (
    <>
    <pre> {(flag)?<h2 class="btn">hello{inputdata.name},you're registration successfully</h2>:""}</pre>
    <form class="container"  onSubmit={handlesubmit}>
        <div class="header">

            <h1>Registration form</h1>
        </div>
        <div>
             <input type="text" placeholder='Enter  your Name' name="name" value={inputdata.name} onChange={handledata}/>

        </div>
        <div>
             <input type="text" placeholder='Enter  your Email' name="Email" value={inputdata.email} onChange={handledata}/>

        </div>
        <div>
             <input type="Password" placeholder='Enter  your password' name="password" value={inputdata.password} onChange={handledata}/>

        </div>
        <div>
            <button type="submit">Submit</button>
            </div>
       
        </form>
        </>
  )
}

export default Form
