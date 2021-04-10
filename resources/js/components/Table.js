import React, { useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table'

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import { makeRequest } from './utils'
import Form from './Form'

function Table( {columns, data, deleteButtonSetting, deleteAction, editButtonSetting, modalOpen, addEditFormData} ) {

    // Use the state and functions returned from useTable to build your UI
    const AdditionalColumns = [
        deleteButtonSetting.enabled ? 
            {
                Header: "Delete",
                id:'delete',
                accessor: str => "delete",
            
                Cell: (row)=> (
                    <IconButton variant="contained" color="secondary" 
                            onClick={  () => {
                                makeRequest(deleteButtonSetting.url + row.row.values.id, 'delete')
                                .then(function(response){
                                    deleteAction(row);
                                })
                            }}
                        >
                        <DeleteForeverIcon />
                    </IconButton> 
                )
            }
        : null,
        editButtonSetting.enabled ? 
        {
            Header: "Edit",
            id:'edit',
            accessor: str => "edit",
        
            Cell: (row)=> (
                <IconButton variant="contained" color="primary" 
                        onClick={() => {
                            addEditFormData(row.row.original)
                            modalOpen()
                        }}>
                    <EditIcon />
                </IconButton> 
            )
        }
        : null        
    ]


    AdditionalColumns.forEach(function($column, $key){
        if($column) {
            columns.push($column);
        }
    })


    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page
  
      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 },
      },
      usePagination
    )
  
    // Render the UI for your table
    return (
      <>
        <pre>
          <code>
            {JSON.stringify(
              {
                pageIndex,
                pageSize,
                pageCount,
                canNextPage,
                canPreviousPage,
              },
              null,
              2
            )}
          </code>
        </pre>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50, 500, 1000, 10000].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

      </>
    )
}

export default Table;