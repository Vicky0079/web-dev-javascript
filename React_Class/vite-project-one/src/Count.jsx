import React from 'react'

const Count = () => {
    // const count=0;
    const [count,setCount]= useState(0)
    console. log(count);
    function handleClick(){
count=count+1;
console. log("clicked");
}
console. log(cour,"after ilick");
return (
<>
<div>Count: {count}</div>
<button onClick={handleClick}>Click</button>
</>
)
}
export default Count;