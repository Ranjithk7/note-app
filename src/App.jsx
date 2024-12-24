import React, { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import SearchBox from "./components/SearchBox";
import NotesList from "./components/NotesList";
import { useSelector } from "react-redux";

const App = () => {
    const { Notes } = useSelector((state) => state.notes)
    
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(Notes));
    }, [Notes])

    const [toggle, setToggle] = useState(false);
    return (
        <div className="container">
            <SearchBox />
            { toggle ? <NoteForm /> : null}
            <NotesList 
                setToggle={(toggle) => setToggle(toggle)}
                toggle={toggle} />
            <span onClick={() => setToggle(!toggle)} className=" bi-plus-circle-fill display-1 position-fixed plus" style={{bottom:"20px", right:"20px"}}></span>
        </div>
    )
}

export default App;