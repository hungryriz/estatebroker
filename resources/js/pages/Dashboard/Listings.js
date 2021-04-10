import React, { useEffect, useState } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { makeRequest } from '../../components/utils'
import ReactDataGrid from 'react-data-grid';
import ReactPaginate from 'react-paginate';
import 'react-data-grid/dist/react-data-grid.css';

function Listings(props) {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    const [rows, setRows] = useState();
    const [columns, setColumns] = useState();
    const [currentpage, setCurrentpage] = useState(1);
    const [totalpages, setTotalpages] = useState(0);
    const params = useParams();
    const history = useHistory();

    const handlePageClick = (data) => {
        let nextpage = parseInt(data.selected) + 1
        history.push(url.replace(/[0-9]/g, '').replace(/\/$/, "") + '/' + nextpage)
        setCurrentpage(nextpage)
    }

    const getCellActions = (column, row) => {
        const cellActions = {
            row_actions: [
                {
                    icon: <div> Delete</div>,
                    callback: () => {
                        alert("Deleting");
                    }
                },
                {
                    icon: <div> Options</div>,
                    actions: [
                        {
                            text: "Option 1",
                            callback: () => {
                                alert("Option 1 clicked");
                            }
                        },
                        {
                            text: "Option 2",
                            callback: () => {
                                alert("Option 2 clicked");
                            }
                        }
                    ]
                }
            ]
        }

        return cellActions[column.key] ? cellActions[column.key] : null;
    }

    useEffect(() => {
        let mounted = true;
        let page = params && params.page ? params.page : 1;
        makeRequest(`/api/listings?page=${page}`, 'get')
        .then(function(response){
            var columns = []
            Object.keys(response.data.data[0])
            .forEach(function(key){
                columns.push({ key: key, name: key });
            });
            columns.push( {key: 'row_actions', name: 'Actions'} );
            if(mounted) {
                setTotalpages(response.data.last_page)
                setRows(response.data.data)
                setColumns(columns)
            }
        })
        .catch(function(){

        });

        return () => mounted = false
    }, [currentpage]);
    return (
        <>
         {
            rows && columns && rows.length && columns.length ?
                (
                    <>
                        <ReactDataGrid
                            columns={columns}
                            rows={rows}
                            rowsCount={3}
                            minHeight={150} 
                            getCellActions={getCellActions} 
                            enableCellSelect={false} />
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={totalpages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </>
                )
                : 
                (
                    <></>
                )
         }
        </>
    )
}

export default Listings;


