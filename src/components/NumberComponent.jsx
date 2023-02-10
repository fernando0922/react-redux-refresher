import React, { useEffect, useState } from 'react'

const NumberComponent = ({num=0, getCount, type, max=0}) => {
    const [count, setcount] = useState(num)

    useEffect(() => {
      setcount(num)
    }, [num])
    

  return (
    <div style={{margin:16,display:'flex',justifyContent:'space-evenly',width:'100%'}}>
        <button onClick={()=>{
            const data = count - 1
            setcount(data)
            getCount(data,type)
            }} disabled={count <= 0}> - </button>
        <h3>{count}</h3>
        <button onClick={()=>{
            const data = count + 1
            setcount(data)
            getCount(data,type)
            }} disabled={count < 0 || (type==="buy" && count===max)}> + </button>
    </div>
  )
}

export default NumberComponent