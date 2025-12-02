import React , {useRef} from 'react';
export default function FocusInput(){
    const inputRef = useRef(null);
    const FocusInput = () => {
        inputRef.current.focus();
    };
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Click button to focus" />
            <button onClick={FocusInput}>Focus Input</button>
        </div>
    )
    
}
