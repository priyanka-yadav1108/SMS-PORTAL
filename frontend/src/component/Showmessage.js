import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import curdOperation from '../utilities/curdOperation';
import { getMessage } from '../redux/slices/getContactSlice';

export default function Showmessage() {
    let libraryId = useSelector(state => state.getContact.library);
    let[msgData, setmsgData] = useState([]);
    let dispatch = useDispatch();

    function getMessageTxt(msg){
        dispatch(getMessage(msg));
    }
    
    useEffect(()=>{
        if(libraryId !== ''){
            curdOperation('/message/'+libraryId)
            .then(res=>
                setmsgData(res.data)
            )
            .catch(err=> {
                console.log(err)
            })
        }
    },[libraryId])

    return (
        <div className='mt-5 block'>
            <h1 className='text-center'>Message</h1>
            <ul class="list-group">
                {
                    msgData && msgData.map(val => 
                        <li class="list-group-item d-flex justify-content-between align-items-start" onClick={()=>{getMessageTxt(val.message)}}>
                            <div class="ms-2 me-auto">
                                {val.message}
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
