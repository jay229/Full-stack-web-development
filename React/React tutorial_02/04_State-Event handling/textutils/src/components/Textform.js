import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const textChanged = () => {
        let newVar = text.toUpperCase();
        setText(newVar);
        props.showAlert("Text is converted to uppercase","success");
    }
    const textChangedLower = () => {
        let newVar = text.toLowerCase();
        setText(newVar);
        props.showAlert("Text is converted to lowercase","success");
    }
    const ClearText = () => {
        let newVar = "";
        setText(newVar);
    }
    const CopyText = () => {
        // let txt = document.getElementById("myBox");
        // txt.select();
        navigator.clipboard.writeText(text);
        // Remove selection
        // document.getSelection().removeAllRanges();
        props.showAlert("Text is copied to clipboard","success");
        // document.execCommand("copy");

    }
    const handleOnChange = (e) => {
        // console.log("On change");
        setText(e.target.value)
    }
    return (
        <div>
            <div className={`container mb-3 text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                <h1 className="mb-3">{props.heading}</h1>
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control " onChange={handleOnChange} value={text} id="myBox" rows="10" style={{backgroundColor:props.mode === 'dark' ? '#243c74' : 'white',color:props.mode==='dark'? 'white':'black'}}  ></textarea>
                <button className="btn btn-primary my-4 mx-2" disabled={text.length===0} onClick={textChanged} >Convert to Uppercase</button>
                <button className="btn btn-primary my-4 mx-2"disabled={text.length===0} onClick={textChangedLower} >Convert to Lowercase</button>
                <button className="btn btn-primary my-4 mx-2"disabled={text.length===0} onClick={CopyText} >Copy to Clipboard</button>
                <button className="btn btn-primary my-4 mx-2"disabled={text.length===0} onClick={ClearText} >Clear</button>
            </div>
            <div className={`conatiner text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Your text Summery</h1>
                <p>{text.split(/\s/).filter((elem)=>{return elem.length!==0}) .length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((elem)=>{return elem.length!==0}).length}  Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>

        </div>
    )
}
