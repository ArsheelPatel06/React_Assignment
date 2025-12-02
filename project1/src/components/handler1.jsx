function Greet(){
    function sayHello (name){
        alert('Hello' + name);
    }
    return(
        <div>
            <button onClick={() => sayHello('Sayuj')}>Click</button>
        </div>
    )
}
export default Greet;