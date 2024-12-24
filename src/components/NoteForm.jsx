import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import noteSlice from "../slices/NoteSlice";

const NoteForm = () => {
    const { addNote,updateNote } = noteSlice.actions;
    const { selectedNote } = useSelector((state) => state.notes)
    const dispatch = useDispatch();
    const note = {
        id:'',
        title: '',
        content: '',
        category: '',
        date:''
        }
    const [ Note, setNote ] = useState(note);
    
    useEffect(() => {        
        selectedNote && setNote(selectedNote)
    }, [selectedNote])

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        const id = Date.now();
        const today = new Date(id);
        
        setNote(prevState => ({
            ...prevState,
            [name]: value,
            id: selectedNote?.id || id,
            date: today.toDateString()
        }))
    }
    
    const handleSubmit = () => {        
        if(selectedNote){
            dispatch(updateNote(Note));
        } else {
            dispatch(addNote(Note));
        }
        setNote(note);
    }

    return (
        <form onSubmit={handleSubmit} className="container position-fixed gap-3 bg-secondary row d-flex align-items-center justify-content-center top-0 bottom-0 p-5">
            <h1 className="text-center text-light">Add Note</h1>
            <input
                className="form-control"
                name="title"
                type="text"
                onChange={onHandleChange}
                placeholder="Note title"
                value={Note.title}
            />
            <textarea
                className="form-control" 
                name="content"
                cols={50}
                rows={10}
                onChange={onHandleChange}
                placeholder="Note Content..."
                value={Note.content}
            />
            <input
                className="form-control" 
                name="category"
                onChange={onHandleChange}
                placeholder="Note Category"
                value={Note.category}
            />
            <button className="btn btn-success w-25" type="submit">{selectedNote ? 'Update' : 'Add'}</button>
        </form>
    )
}

export default NoteForm;