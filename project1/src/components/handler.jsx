function Welcome()
{
    function handleClick()
    {
        alert('button clicked');
    }
    return
       
        <div>
            <button onClick={handleClick}>Click</button>
        </div>    
}
export default Welcome;

       