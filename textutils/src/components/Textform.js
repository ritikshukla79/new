import { useState } from "react"
import "./Textfrom.css"

export default function Textform(props) {


    const handleUpclick = () => {

        setText(text.toUpperCase());
        setStyle('cons2')

    }
    const handleonChange = (event) => {

        setText(event.target.value);

    }

    const [text, setText] = useState("")
    const [style, setStyle] = useState("cons1")

    return (
        <div className="container my-3">
            
            <div className="mb-3">
                <textarea className="form-control" id={style} value={text} onChange={handleonChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
            <p className="my-3">length:{text.length}</p>
            <p>words:{text.split(" ").length-1}</p>

        </div>



    )
} 