/* eslint-disable no-undef */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Employee',
//     visibleFields: VISIBLE_FIELDS,
//     rowLength: 100,
//   });
const data = [
    { id: 1, name: 'John Doe', rating: 4.5, country: 'USA', dateCreated: '2022-03-26', isAdmin: false },
    { id: 2, name: 'Jane Smith', rating: 3.2, country: 'Canada', dateCreated: '2022-03-25', isAdmin: true },
    { id: 3, name: 'Bob Johnson', rating: 4.0, country: 'USA', dateCreated: '2022-03-24', isAdmin: false },
    { id: 4, name: 'Alice Williams', rating: 2.8, country: 'Canada', dateCreated: '2022-03-23', isAdmin: true },
    { id: 5, name: 'Tom Brown', rating: 3.9, country: 'USA', dateCreated: '2022-03-22', isAdmin: false },
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'rating', headerName: 'Rating', width: 90 },
    { field: 'country', headerName: 'Country', width: 120 },
    { field: 'dateCreated', headerName: 'Date Created', width: 150 },
    { field: 'isAdmin', headerName: 'Is Admin', width: 120 },
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
     <DataGrid rows={data} columns={columns} />
    </div>
  );
}