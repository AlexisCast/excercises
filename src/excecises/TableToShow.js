import React from 'react'

export const TableToShow = React.memo(({ arrRows, arrRowsLength, arrColumns, arrColumnsLength }) => {
   console.log("arrRows: ", arrRows);
   return (
      <>
         <table>
            <tbody>
               {arrRows.map((row, indexRow) => {
                  return (<tr key={indexRow}>{
                     arrColumns.map((column, indexCol) => {
                        return (<td key={indexCol}>test</td>)
                     })}</tr>)
               })}
            </tbody>
         </table></>
   )
})
