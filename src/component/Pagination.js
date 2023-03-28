
  
    
//     import * as React from 'react';
// import usePagination from '@mui/material/usePagination';
// import { styled } from '@mui/material/styles';
// import '../App.css';

// const List = styled('ul')({
//   listStyle: 'none',
//   padding: 0,
//   margin: 0,
//   display: 'flex',
// });

// export default function UsePagination() {
//   const { items } = usePagination({
//     count: 10,
//   });

//   return (
//     <div className='page'>
//     <nav>
//       <List>
//         {items.map(({ page, type, selected, ...item }, index) => {
//           let children = null;

//           if (type === 'start-ellipsis' || type === 'end-ellipsis') {
//             children = '…';
//           } else if (type === 'page') {
//             children = (
//               <button
//                 type="button"
//                 style={{
//                   fontWeight: selected ? 'bold' : undefined,
//                 }}
//                 {...item}
//               >
//                 {page}
//               </button>
//             );
//           } else {
//             children = (
//               <button type="button" {...item}>
//                 {type}
//               </button>
//             );
//           }

//           return <li key={index}>{children}</li>;
//         })}
//       </List>
//     </nav>
//     </div>
//   );
// }

import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
// import PaginationLink from './Page';

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div> 
    <TablePagination
      component="div"
      count={100}
      page={page}
      
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />

    {/* <PaginationLink> </PaginationLink> */}
    </div>
  );
}