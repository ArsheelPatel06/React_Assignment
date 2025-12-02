import { useState } from "react";
export default function Controlled() {
    const [name, setName] = useState("");
    return (
        <div>
            <input
                type="text"
                value={name} // React controls value
                onChange={(e) => setName(e.target.value)}
            />
            <p>Your Name: {name}</p>
        </div>
    );
}