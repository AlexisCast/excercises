import React, { useEffect, useState } from 'react';
import './excercises.scss';
import { TableToShow } from './TableToShow';

export const Excercise1 = () => {

   const [formValues, setFormValues] = useState({
      rows: "",
      columns: "",
   });
   const [arrRows, setArrRows] = useState([]);
   const [arrColumns, setArrColumns] = useState([]);

   const [error, seterror] = useState(false);
   const [showTable, setShowTable] = useState(false);

   const { rows, columns } = formValues;

   const handleChange = (e) => {
      setFormValues({
         ...formValues,
         [e.target.name]: e.target.value,
      });
   }

   useEffect(() => {
      if ((rows > 0 && rows <= 10) || rows === "") {
         seterror(false);
         setShowTable(false);
         arrRows.length = 0;
         for (let i = 0; i < rows; i++) {
            arrRows.push(i);
         }
         setArrRows(arrRows);
      } else {
         seterror(true);
         setShowTable(false);
      }

   }, [rows, arrRows]);

   useEffect(() => {

      if ((columns > 0 && columns <= 10) || columns === "") {
         seterror(false);
         setShowTable(false);
         arrColumns.length = 0;
         for (let i = 0; i < columns; i++) {
            arrColumns.push(i);
         }
         setArrColumns(arrColumns);
      } else {
         seterror(true);
         setShowTable(false);
      }
   }, [columns, arrColumns]);


   const handleSubmit = (e) => {
      e.preventDefault();
      if (!error) {
         console.log(formValues);
         console.log('calc');
         console.log(arrRows);
         setShowTable(true);
      }
   }

   return (
      <div className='container'>
         <form
            onSubmit={handleSubmit}
         >
            <div
               className='form-group'
            >
               <div>
                  <input
                     type='text'
                     name='rows'
                     className='form-control'
                     placeholder='rows'
                     autoComplete='off'
                     value={rows}
                     onChange={handleChange}
                  >
                  </input>
                  <p>Rows</p>
               </div>
               <div>
                  <input
                     type='text'
                     name='columns'
                     className='form-control'
                     placeholder='columns'
                     autoComplete='off'
                     value={columns}
                     onChange={handleChange}
                  >
                  </input>
                  <p>Columns</p>
               </div>
            </div>
            {
               error && (<p
                  className='text-error'
               >Please enter a number between 1-9</p>)
            }

            <div>
               <button
                  type='submit'
                  onClick={handleSubmit}
               >
                  Create Table
               </button>
            </div>
         </form>
         <div
            className='table-container'
         >
            {showTable ? (
               <TableToShow
                  arrRows={arrRows}
                  arrRowsLength={arrRows.length}
                  arrColumns={arrColumns}
                  arrColumnsLength={arrColumns.length}
               />
            )
               :
               null}
         </div>
      </div>
   )
}
