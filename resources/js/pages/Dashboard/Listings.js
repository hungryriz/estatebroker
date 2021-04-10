import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { makeRequest } from '../../components/utils'
import { useTable, usePagination } from 'react-table'
import Table from '../../components/Table'
import { makeStyles } from '@material-ui/core/styles';
import Form from '../../components/Form'
import { Button, Typography, Modal }  from '@material-ui/core';
import AddNewListingForm from '../Dashboard/Listing/AddNewListingForm'

function Listings(props) {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const { url } = useRouteMatch()
    const params = useParams()
    const history = useHistory()
    const [rows, setRows] = useState()
    const [columns, setColumns] = useState()
    const [totalpages, setTotalpages] = useState(0)
    const [rowUpdatedOrDeleted, setRowUpdatedOrDeleted] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [formType, setFormType] = useState('PUT')
    const [editformdata, setEditformdata] = useState()
    const [editformid, setEditformid] = useState()
    const [loading, setLoading] = useState(false)
    const [openaddlistform, setOpenaddlistform] = useState(false)

    const onDelete = (row) => {
        rows.splice(row.row.id, 1)
        setRows(rows)
        setRowUpdatedOrDeleted(!rowUpdatedOrDeleted)
    }

    const onEdit = () => {
        setModalOpen(true)
    }

    const modalClose = () => {
        setModalOpen(false)
    }

    const getEditFormData = useMemo(() => {
        return editformdata
    });

    const addEditFormData = useCallback((data) => {
        setEditformdata(data)
    });

    const openAddListForm = () => {
        setOpenaddlistform(true);
    }

    const closeAddListForm = () => {
        setOpenaddlistform(false);
    }

    useEffect(() => {
        let mounted = true;
        let page = params && params.page ? params.page : 1;
        makeRequest('/api/listings', 'get')
        .then(function(response){
            var columnsData = []
            var rowsData = response.data;
            Object.keys(rowsData[0])
            .forEach(function(key){
                columnsData.push({ Header: key, accessor: key });
            });
            if(mounted) {
                setTotalpages(response.data.length)
                setRows(rowsData)
                setColumns(columnsData)
            }
        })
        .catch(function(){

        });

        return () => mounted = false
    }, [rowUpdatedOrDeleted]);


    
    return (
        <>
                <Button variant="contained" color="primary" onClick={openAddListForm} disabled={loading}>
                    {loading ? 'Loading...' : 'Add Property'}
                </Button>
            {
                rows && columns && rows.length && columns.length ?
                (
                    <>
                        <Table 
                            columns={columns} 
                            data={rows}  
                            deleteButtonSetting={ {enabled: true, url: '/api/listings/'} }
                            deleteAction={onDelete}
                            editButtonSetting={{enabled: true, url: '/api/listings/'}}
                            modalOpen= {() => setModalOpen(true)}
                            addEditFormData={ (data) => addEditFormData(data) }
                            editFormSetting={{
                                formHeading : 'Lists Form', 
                                requestUrl : '/api/listings/',
                                isModal: true,
                                getFormType: ()=> { return formType },
                                modalClose: () => {},
                                isShowModal: () => {return modalOpen}
                            }}
                        />
                        <Modal open={modalOpen}
                            onClose={() => {}}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div>
                                <Form formHeading={'Lists Form'}
                                    requestUrl={ '/api/listings' }
                                    getFormType={ ()=> { return formType } }
                                    modalClose={ () => modalClose() } 
                                    isShowModal={ () => {return modalOpen} }
                                    getEditFormData={ () => getEditFormData }
                                />
                            </div>
                        </Modal>
                        <Modal open={openaddlistform}
                            onClose={() => {}}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div>
                                <AddNewListingForm closeAddListForm = { () => closeAddListForm() } />
                            </div>
                        </Modal>
                    </>
                )
                : 
                (
                    <>
                        <Modal open={modalOpen}
                            onClose={() => {}}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div>
                                <Form 
                                    formHeading={'Lists Form'}
                                    requestUrl={ '/api/listings' }
                                    getFormType={ ()=> { return formType } }
                                    modalClose={ () => modalClose() } 
                                    isShowModal={ () => { return modalOpen } }
                                    getEditFormData={ () => getEditFormData }
                                />
                            </div>
                        </Modal>
                        <Typography>No Listings for you</Typography>
                    </>
                )
            }
        </>
    )
}

export default Listings;


