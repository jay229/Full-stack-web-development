import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const textChanged = () => {
        let newVar = text.toUpperCase();
        setText(newVar);
    }
    const textChangedLower = () => {
        let newVar = text.toLowerCase();
        setText(newVar);
    }
    const ClearText = () => {
        let newVar = "";
        setText(newVar);
    }
    const CopyText = () => {
        let txt = document.getElementById("myBox");
        txt.select();
        document.execCommand("copy");

    }
    const handleOnChange = (e) => {
        // console.log("On change");
        setText(e.target.value)
    }
    return (
        <div>
            <div className={`container mb-3 text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                <h1 >{props.heading}</h1>
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control " onChange={handleOnChange} value={text} id="myBox" rows="10" style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color:props.mode==='dark'? 'white':'black'}}  ></textarea>
                <button className="btn btn-primary my-4 mx-2" onClick={textChanged} >Convert to Uppercase</button>
                <button className="btn btn-primary my-4 mx-2" onClick={textChangedLower} >Convert to Lowercase</button>
                <button className="btn btn-primary my-4 mx-2" onClick={CopyText} >Copy to Clipboard</button>
                <button className="btn btn-primary my-4 mx-2" onClick={ClearText} >Clear</button>
            </div>
            <div className={`conatiner text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                <h1>Your text Summery</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length}  Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something  in the textbox above to preview it here "}</p>
            </div>

        </div>
    )
}
