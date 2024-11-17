import React, { useState } from 'react';

function Count(){
    let Time= new Date().toLocaleTimeString();
    const[ctime, setctime]= useState(Time);
    function update(){
        Time= new Date().toLocaleTimeString();
        setctime(Time);
    }
    setInterval(update,1000);

    return(

        <h1>{Time}</h1>

    );
}
 export default Count;