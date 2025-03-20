import React from 'react';
import useApihooks from '../customHook/useApiHooks';
import { useDispatch } from 'react-redux';
import { getLibrary } from '../redux/slices/getContactSlice';



export default function Showlibrary() {
    let libraryList = useApihooks('/library');
    let messageDispatch = useDispatch();

    function getMessageData(id){
        messageDispatch(getLibrary(id))
    }

    return (
        <div className='block'>
            <h1 className='text-center'>Library</h1>
            <ul class="list-group">
                {
                    libraryList && libraryList.map(({_id, name})=>
                        <li class="list-group-item" onClick={()=>{getMessageData(_id)}}>{name}</li>
                    )
                }
            </ul>
        </div>
    )
}
