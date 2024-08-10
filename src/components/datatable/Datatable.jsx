import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
    const [data, setData] = useState(userRows);

    function onDeleteRow(id)
    {
        return () => {
            setData(data.filter(row => row.id !== id))
        }
    }

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <div className='cellAction'>
                    <Link to="/users/test" style={{textDecoration: 'none'}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={onDeleteRow(params.id)}>Delete</div>
                </div>
            )
        }
    ]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add new user
                <Link to="/users/new" className="link">Add new</Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                checkboxSelection
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 7
                        }
                    }
                }}
                autoHeight
                editMode="row"
            />
        </div>
    )
}

export default Datatable;
//1:40