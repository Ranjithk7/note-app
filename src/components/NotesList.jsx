import React from "react";
import { useSelector, useDispatch } from "react-redux";
import noteSlice from "../slices/NoteSlice";

const NotesList = ({setToggle, toggle }) => {
    const { Notes, filter } = useSelector((state) => state.notes);
    const { deleteNote, setSelectedNote } = noteSlice.actions;
    const dispatch = useDispatch();
    const color = [
        'list-group-item-primary', 
        'list-group-item-secondary',
        'list-group-item-success',
        'list-group-item-danger', 
        'list-group-item-warning',
        'list-group-item-dark',
        'list-group-item-info',
        'list-group-item-primary', 
        'list-group-item-secondary',
        'list-group-item-success',
        'list-group-item-danger', 
        'list-group-item-warning',
        'list-group-item-dark',
        'list-group-item-info',
        'list-group-item-primary', 
        'list-group-item-secondary',
        'list-group-item-success',
        'list-group-item-danger', 
        'list-group-item-warning',
        'list-group-item-dark',
        'list-group-item-info',
        'list-group-item-primary', 
        'list-group-item-secondary',
        'list-group-item-success',
        'list-group-item-danger', 
        'list-group-item-warning',
        'list-group-item-dark',
        'list-group-item-info'
    ]
    const filteredNotes = Notes.filter((note) => {
        return (
            note.title.toLowerCase().includes(filter['query'].toLowerCase()) ||
            note.content.toLowerCase().includes(filter['query'].toLowerCase()) ||
            note.category.toLowerCase().includes(filter['query'].toLowerCase())
        )
    }).sort((a, b) => {
        let order = filter.orderBy === 'asc' ? 1 : -1;
        if ( typeof a[filter.sortBy] === 'number' || a[filter.sortBy] instanceof Number ){
            return a[filter.sortBy] < b[filter.sortBy] ? -1 * order : 1 * order
        }
        return (
            a[filter.sortBy].toLowerCase() < b[filter.sortBy].toLowerCase() ?
            -1 * order : 1 * order
        )
    });

    return (
        <div className="row p-0 row-cols-lg-4 row-cols-md-2 row-cols-1 mt-4">
            { filteredNotes.length === 0 ?
            ( <p>No notes available...</p> ):
            ( filteredNotes.map(note => (
                <div key={note.id} className={`col p-1 rounded-3 ${note.title.length < 40 ? 'col-md-6' : 'col-md-12'} `}>
                    <li key={note.id} className={`p-3 card list-group-item ${color[Math.floor(Math.random() * 28)]} opacity-100`} >
                    <h1 className="">{note.title}</h1>
                    <p className="m-0">{note.content}</p>
                    <small>{note.category}</small>
                    <div className="d-flex gap-2 pb-1 mt-3">
                        <div className="d-inline-flex bi bi-trash btn btn-danger" onClick={() => dispatch(deleteNote(note.id))}></div>
                        <div className="d-inline-flex bi bi-pencil-square btn btn-success" onClick={() => { dispatch(setSelectedNote(note)); setToggle(!toggle) }}></div>
                    </div>
                    <div className="position-absolute bottom-0 end-0 p-3">{note.date}</div>
                </li>
                </div>
            )) )}
            
        </div>
    )
}

export default NotesList;