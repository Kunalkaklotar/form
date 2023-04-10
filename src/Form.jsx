import React, { useState } from "react";

function Form() {
    let[name,setName]=useState('')
    let[password,setPassword]=useState('')
    let[pname,setPname]=useState('')
    let[ppassword,setPpassword]=useState('')
    let submit=(e)=>{
        e.preventDefault()
        setName(pname)
        setPassword(ppassword)
    }
  return (
    <div>
      <div className="main-box">
        <form onSubmit={submit}>
          <input type="text" placeholder="Email" onChange={(e)=>setPname(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setPpassword(e.target.value)}/>
          <button type="submit">submit</button>
        </form>
      </div>
      <h1>name : {name}</h1>
      <h1>password : {password}</h1>
    </div>
  );
}

export default Form;