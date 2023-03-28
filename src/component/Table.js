/* eslint-disable no-undef */

    import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Search from "./Search.js";
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import Button from 'react-bootstrap/Button';
import {useEffect, useState } from 'react';
import axios from 'axios';
import up  from '../assets/Vectorup.svg';
import down  from '../assets/Vectordown.svg';
// import * as React from 'react';
// import Pagination from './Pagination';
import Stack from '@mui/material/Stack';

// import PaginationRounded from "./Pagination.js";
// import Children from './Children';
import '../App.css';
// import { Title } from '@mui/icons-material';
// import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
// <br></br>
// const rows = [
//   createData('', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable(props) {

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.qa.gessa.io/cms/surveyForm?page=0&size=100`).then((res) =>{
      console.log(res)
      console.log("mahima")
      setMyData(res.data.result.data)});
  }, []);

  // useEffect(() => {
  //  async function callApi(){
  //   const apiResult = await axios.get('https://api.qa.gessa.io/cms/content-definition/?page=0&size=100')
  //   console.log(apiResult)
  //  } 

  // })

  myData.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
console.log(myData);
console.log("mahima");
  return (
    
   <div>
        
    <TableContainer component={Paper}>
    <Search> </Search> 
      <Table sx={{ minWidth: 850 }} aria-label=" table">
        <TableHead>
         
          <TableRow className='but'>
        
            <TableCell className='but' align="left">
            <h5>Survey Name </h5>
            <Button className='up' variant="outline-primary"> 
            <UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon>
            {/* <img src= {up} className="rin" /> <img src= {down} className="outline" /> */}
            <br></br>
            </Button>
            </TableCell>
           
            <TableCell className='but' align="left">
            <h5> Created By  </h5>

            <Button className='up' variant="outline-primary"> 
            <UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon>
            {/* <img src= {up} className="rin" /> <img src= {down} className="outline" /> */}
            <br></br>
            </Button>
            </TableCell>
           
            <TableCell className='but' align="left">
            <h5> Status </h5> 
            <Button className='up' variant="outline-primary"> 
            <UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon>
            {/* <img src= {up} className="rin" /> <img src= {down} className="outline" /> */}
            <br></br>
            </Button>
            </TableCell>

            <TableCell className='but' align="left"> 
            <h5> No. of Questions </h5>      
            <Button className='up' variant="outline-primary"> 
            <img src= {up} className="rin" /> <img src= {down} className="outline" />
            <br></br>
            </Button>
            </TableCell>

            <TableCell className='but' align="left">
            <h5> Created On </h5>
            <Button className='up' variant="outline-primary"> 
            <img src= {up} className="rin" /> <img src= {down} className="outline" />
            <br></br>
            </Button>
            </TableCell>

            <TableCell className='but' align="left">
               <h5>Expiry On </h5>
            <Button className='up' variant="outline-primary"> 
            <img src= {up} className="rin" /> <img src= {down} className="outline" />
            <br></br>
            </Button>
            </TableCell>
          </TableRow>
       
        </TableHead>
        <TableBody>
        {myData.map((get) => {
           const { name, email, _id, title, expiry, employee_name, createdBy, description, id, questions, questionNumber, status, updatedAt} = get; // "Expiary-Date" corrected to "expiryDate"
           return (
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell align="left">{_id}</TableCell>
              <TableCell align="left" className="greens" >{status}</TableCell>
              <TableCell align="left">{questions.questionNumber}</TableCell>
              <TableCell align="left">{updatedAt}</TableCell>
              <TableCell align="left">{expiry}</TableCell>
             </TableRow>
           );
        })}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}






// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Search from "./Search.js";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import React, {useEffect, useState } from 'react';
// import axios from 'axios';
// import { visuallyHidden } from '@mui/utils';


// // export default function ImpTable() {
// //   const [myData, setMyData] = useState([]);
// //   const[rows,setrow]=useState([]);
// //   useEffect(  () => {

// //     axios
// //     .get(`https://api.qa.gessa.io/cms/surveyForm?page=0&size=100`).then((res) =>{
// //       console.log(res)
// //       setrow(res);
// //       setMyData(res.data.result.data)});
// //   }, []);


//   // return {
//   //   name,
//   //   calories,
//   //   fat,
//   //   carbs,
//   //   protein,
//   // };


// // const rows = [

// // ]
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Donut', 452, 25.0, 51, 4.9),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// //   createData('Honeycomb', 408, 3.2, 87, 6.5),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
// //   createData('KitKat', 518, 26.0, 65, 7.0),
// //   createData('Lollipop', 392, 0.2, 98, 0.0),
// //   createData('Marshmallow', 318, 0, 81, 2.0),
// //   createData('Nougat', 360, 19.0, 9, 37.0),
// //   createData('Oreo', 437, 18.0, 63, 4.0),
// // ];

// // }

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// // with exampleArray.slice().sort(exampleComparator)
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: 'Survey Name',
//     numeric: false,
//     disablePadding: false,
//     label: 'Survey Name',

//   },
//   {
//     id: 'Status',
//     numeric:false,
//     disablePadding: false,
//     label: 'Status',
//   },
//   {
//     id: 'No. of Questions',
//     numeric: false,
//     disablePadding: false,
//     label: 'No. of Questions',
//   },
//   {
//     id: 'Created On',
//     numeric: false,
//     disablePadding: false,
//     label: 'Created On',
//   },
//   {
//     id: 'Expiry',
//     numeric: false,
//     disablePadding: false,
//     label: 'Expiry',
//   },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };


//   console.log("mahima");


//   return (
  
//     <TableHead>
//       <TableRow>
//       <Search> </Search> 
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rows, setRows] = React.useState([]);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.name);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//             {myData.map((get) => {
//            const { name, email, _id, title, expiry, employee_name, createdBy, description, id, questions, questionNumber, status, updatedAt} = get; // "Expiary-Date" corrected to "expiryDate"
//               {stableSort(rows, getComparator(order, orderBy))
//               //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               //   .map((row, index) => {
//                   const isItemSelected = isSelected(title);
//               //     const labelId = `enhanced-table-checkbox-${index}`;

//                   return (

//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, title)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.code}

//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           // inputProps={{
//                           //   'aria-labelledby': labelId,
//                           // }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         // id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {title}
//                       </TableCell>
//                       <TableCell align="right">{_id}</TableCell>
//                       <TableCell align="right">{status}</TableCell>
//                       <TableCell align="right">{questions.questionNumber}</TableCell>
//                       <TableCell align="right">{updatedAt}</TableCell>
//                       <TableCell align="right">{expiry}</TableCell>
//                     </TableRow>
//                   );
//                 }
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )
//                 }
            
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }







// import Pagination from '@mui/material/Pagination';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { useEffect, useState } from 'react';
// // import formApi from '../../../../../API/FormData.js';
// import DeleteIcon from '@mui/icons-material/Delete';
// // import './Table.css';
// // import { makeStyles } from '@material-ui/core/styles';

// // import { color } from '@mui/system'

// // const useStyles = makeStyles(theme => ({
// //     root: {
// //         backgroundColor: red,
// //     },
// //     container: {

// //     }
// // }))





// export default function BasicTable({ forms, getForms }) {
//     // const [forms, setForms] = useState([]);

//     const getLocalStorage = (label) => {
//         return JSON.parse(sessionStorage.getItem(label) || '{}');
//     };
//     const test = [];
//     // forms.map((data) => {
//     //     test.push(createData(data.surveyName,data.status,data.questions,data.createdOn,data.expiryOn))
//     //     console.log(createData(data.surveyName, data.status, data.questions, data.createdOn, data.expiryOn))

//     // })
//     // const { email } = useParams()

//     // const accessToken = localStorage.getItem(email);

//     // const getForms = async () => {

//     //     const querRes = await formApi.get('', {
//     //         params: { page: 0, size: 10, filters: { "userID": getLocalStorage('userInfo').userName } }, headers: {
//     //             'x-tenant-id': '63f72b21f9dfbe6751b8875e'
//     //         }

//     //     })

//     //     console.log("query res :", querRes.data.result.data)
//     //     setForms(querRes.data.result.data)
//     // }


//     async function handleDeleteForm(e, id) {
//         console.log(e.target.id)
//         const querRes = await formApi.delete(`/${id}`, {
//             headers: {
//                 'x-tenant-id': '63f72b21f9dfbe6751b8875e'
//             }
//         });

//         // console.log("delete form query res :", querRes.data.massage);
//         setTimeout(() => { getForms() }, 1500);
        

//     }


//     // useEffect(() => {
//     //     getForms();
//     // }, [])

//     // const classes = useStyles();

//     return (

//         <TableContainer component={Paper} className="Table" >
//             <Table sx={{ minWidth: 500 }} aria-label="simple table" >
//                 <TableHead >
//                     <TableRow style={{ color: 'red' }} >
//                         <TableCell className='cell'><b>Survey Name</b></TableCell>
//                         <TableCell className='cell' align="right"><b>Status</b></TableCell>
//                         <TableCell className='cell' align="right"><b>No of Questions</b></TableCell>
//                         <TableCell className='cell' align="right"><b>Created On</b></TableCell>
//                         <TableCell className='cell' align="right"><b>Expiry On</b></TableCell>
//                         <TableCell className='cell' align="right"> </TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody >
//                     {forms?.map((form, index) => (
//                         <TableRow
//                             key={index}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row" className='cell'>
//                                 {form.title}
//                             </TableCell>
//                             <TableCell className='cell' align="right" >{form.status}</TableCell>
//                             <TableCell className='cell' align="right">{form.questions.length}</TableCell>
//                             <TableCell className='cell' align="right">{form.createdAt}</TableCell>
//                             <TableCell className='cell' align="right">{form.expiry}</TableCell>
//                             <TableCell className='cell' align="right" style={{ color: 'gray' }} >
//                                  <DeleteIcon id={form._id} onClick={(e) => handleDeleteForm(e, form._id)} style={{ cursor: 'pointer', hover: 'red' }} />
//                             </TableCell>
//                         </TableRow>
//                     ))}  
//                 </TableBody>
//             </Table>
//             {/* <div className={classes.root}> */}
//             <Stack spacing={2}>
//                 <div>
//                     <Pagination
//                         count={10} shape="rounded" />
//                     {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
//                 </div>
//             </Stack>
//             {/* </div> */}
//         </TableContainer>

//     );
// }


 