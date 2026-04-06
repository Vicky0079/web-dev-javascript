import Child from './Child';

const Parent = () => {
    const fullname="Vicky";
    function Alert(){
        alert("Button Clicked");
    }
   return (
    <>

    <div>Parent</div>
    <h1> Render in parent child component:{fullname}</h1>
    <Child name={fullname} alert={Alert}/>
    </>
    )
}
export default Parent