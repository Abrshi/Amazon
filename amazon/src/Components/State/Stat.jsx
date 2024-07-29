import React ,{setfirst, useState}from 'react'


function Stat() {
    const [first, setfirst] = useState(0)
    let ink =()=>{
        setfirst(first+1)
}
    let dic= ()=>{
        setfirst(first - 1)
    }
    let reset =()=>{
        setfirst(0)
    }
    const flex ={
        display:'flex'
    };
    const siz ={
        fontSize: 'xx-large',
        paddingLeft:'10px'
    };
  return (
    <div  style={ flex}>
    <button  style={ siz} onClick={() => ink ()}>+</button>
    <button  style={ siz} onClick={() => dic ()}> -</button>
    <button  style={ siz} onClick={() => reset ()}> 0</button>
    <p style={ siz}> = {first}</p>
    </div>
  )
}

export default Stat