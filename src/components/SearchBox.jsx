import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import noteSlice from "../slices/NoteSlice";

const DropDown = ({sortBy, orderBy}) => {
    const check = <span className="bi-check float-end"/>;
    const { onSortByChange,
            onOrderByChange } = noteSlice.actions;
const dispatch= useDispatch();

    return (
        <div className="dropdown d-inline " style={{height:"100%", width: "10%"}}>
            <button 
                style={{height: "100%", width:"100%"}}
                className="dropdown-toggle btn p-0 btn-dark rounded-start-0 opacity-50"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
            </button>
            <div className="dropdown-menu">
                <div style={{cursor: "pointer"}} className="dropdown-item" onClick={() => dispatch(onSortByChange('title'))}>
                    Title {sortBy === 'title' ? check : null}
                </div>
                <div style={{cursor: "pointer"}} className="dropdown-item" onClick={() => dispatch(onSortByChange('content'))}>
                    Content {sortBy === 'content' ? check : null}
                </div>
                <div style={{cursor: "pointer"}} className="dropdown-item" onClick={() => dispatch(onSortByChange('category'))}>
                    Category {sortBy === 'category' ? check : null}
                </div>
                <div style={{cursor: "pointer"}} className="dropdown-item" onClick={() => dispatch(onSortByChange('id'))}>
                    Date {sortBy === 'id' ? check : null}
                </div>
                <hr />
                <div style={{cursor: "pointer"}} className="dropdown-item" onClick={() => dispatch(onOrderByChange('asc'))}>
                    Asc {orderBy === 'asc' ? check : null}
                </div>
                <div className="dropdown-item" style={{cursor: "pointer"}} onClick={() => dispatch(onOrderByChange('desc'))}>
                    Desc {orderBy === 'desc' ? check : null}
                </div>
            </div>
        </div>
    )
}
const SearchBox = () => {
    const [ toggle, setToggle ] = useState(false);
    const { filter } = useSelector((state)=> state.notes);
    const { onQueryChange } = noteSlice.actions;
    const dispatch = useDispatch();
    return (
        <div className="row">
            <h1 className="m-0 col-6">My Note</h1>
            <li className="col-6 fs-2 bi-search d-flex align-items-center justify-content-end" onClick={() => setToggle(!toggle)}></li>
            {toggle 
            ? <div className="col-12 mt-2 container d-flex justify-content-end align-items-center">
                <input
                    style={{height: "40px", width: "90%"}}
                    className="search border border-end-0 rounded-start-1 "
                    type="text"
                    placeholder="Search notes..."
                    onChange={(e) => dispatch(onQueryChange(e.target.value))}
                    value={filter.query} />
                <DropDown
                    sortBy={filter.sortBy}
                    orderBy={filter.orderBy} />
            </div>
            : null}
            
        </div>
    )
}

export default SearchBox;