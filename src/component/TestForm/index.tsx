import { useState } from "react";

export const TestForm = () => {
    const [text, setText] = useState('');

    return (
        <div className='TestForm'>
            <input type="text" onChange={(e) => setText(e.target.value)}>
            </input>
            <div>
                目前Text: {text}
            </div>
        </div>
    );
};