import  { useRef, useState } from "react";


const DiaryEditor = ()=> {
    
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(state.author.length <1){
            alert("Please enter at least 1 character in author");
            return; 
        }

        if(state.content.length <5){
            alert("Please enter at least 5 character in content");
            return;    
        }

        alert("submit success!");
    };

    return( 
    <div className="DiaryEditor">
        <h2>Diary of Today</h2>
        <div>
            <input 
                name="author"
                value={state.author} 
                onChange={handleChangeState} 
            />
        </div>
        <div>
            <textarea 
                name="content"
                value={state.content}
                onChange={handleChangeState} 
            />
        </div>
        <div>
            <select 
                name="emotion"
                value={state.emotion}
                onChange={handleChangeState}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>Save</button>
        </div>    
    </div>
    );
};
export default DiaryEditor;