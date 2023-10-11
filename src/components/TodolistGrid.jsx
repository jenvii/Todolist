import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";

export default function TodolistGrid(props) {

    const gridRef = useRef();

    const columns = [
        { field: 'description', filter: true, floatingFilter: true, animateRows: true, sortable: true },
        { field: 'date', filter: true, floatingFilter: true, animateRows: true, sortable: true }
    ]

    const gridOptions = {
        animateRows: true
    };

    const deleteSelected = () => {
        if (gridRef.current.getSelectedNodes().length == 0) {
            alert('Choose a row first!')
        } else {
            const removingIndex = parseInt(gridRef.current.getSelectedNodes()[0].id);
            props.deleteTodo(removingIndex);
        }
    }
    return (
        <>
            <button onClick={deleteSelected}>Delete</button>
            <div className="ag-theme-material" style={{ height: '700px', width: '70%', margin: 'auto' }}>
                <AgGridReact
                    rowData={props.todos}
                    columnDefs={columns}
                    rowSelection="single"
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    gridOptions={gridOptions}>

                </AgGridReact>
            </div>
        </>
    )
}