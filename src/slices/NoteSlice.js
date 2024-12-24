import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name:'notes',
    initialState: {
        Notes: JSON.parse(localStorage.getItem('notes')) || [],
        selectedNote: null,
        filter: {
            query:'',
            sortBy:'title',
            orderBy: 'asc'
        }
    },
    reducers: {
        addNote: (state, action) => {
            state.Notes = [...state.Notes, action.payload]
        },
        updateNote: (state, action) => {
            const updatedNotes = state.Notes.map(note => (
                note.id === action.payload['id'] ? action.payload : note
            ))
            state.Notes = [...updatedNotes]
        },
        deleteNote: (state, action) => {
            state.Notes = state.Notes.filter(note => note.id !== action.payload)
        },
        setSelectedNote: (state, action) => {
            state.selectedNote = action.payload;
        },
        onQueryChange: (state, action) => {
            state.filter['query'] = action.payload
        },
        onSortByChange: (state, action) => {
            state.filter['sortBy'] = action.payload
        },
        onOrderByChange: (state, action) => {
            state.filter['orderBy'] = action.payload
        },
        
    }
})

export default noteSlice;