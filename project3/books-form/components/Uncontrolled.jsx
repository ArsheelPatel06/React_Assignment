import { useRef } from "react";

export default function Uncontrolled() {
    const inputRef = useRef();
    const handleSubmit = () => {
        alert(inputRef.current.value);
    };
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Show Value</button>
        </div>
    );
}