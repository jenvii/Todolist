import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";
import Button from '@mui/material/Button';
import dayjs from "dayjs";

export default function TodolistGrid(props) {

    const gridRef = useRef();

    const columns = [
        { field: 'description', filter: true, floatingFilter: true, sortable: true },
        { field: 'date', filter: true, floatingFilter: true, sortable: true, valueFormatter: params => dayjs(params.value).format("DD.MM.YY") }
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
            <Button
                onClick={deleteSelected}>
                Delete selected
            </Button>
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