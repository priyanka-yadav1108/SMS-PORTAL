import React from 'react';
import useApihooks from '../customHook/useApiHooks';
import { useDispatch } from 'react-redux';
import { getGroupId } from '../redux/slices/getContactSlice';

export default function Showgroup() {
    let dispatch = useDispatch();
    let groupList = useApihooks('/group');  

    function getGroupIdFunc(id){
        dispatch(getGroupId(id));
    }

    return (
        <div class="block">
            <h1 className='text-center'>Group</h1>
            <ul class="list-group">
                {
                    groupList && groupList.map(({_id, name})=>
                        <li class="list-group-item" onClick={()=>{getGroupIdFunc(_id)}}>{name}</li>
                    )
                }
            </ul>
        </div>
    )
}
