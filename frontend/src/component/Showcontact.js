import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import curdOperation from '../utilities/curdOperation';
import { getUserData } from '../redux/slices/getContactSlice';

export default function Showcontact() {
    let groupId = useSelector(state=> state.getContact.value);
    let dispatch = useDispatch();
    function getContactData(val){
        dispatch(getUserData(val))
    }

    let [contacts, setContacts] = useState();
    useEffect(()=>{ 
        if(groupId !== ''){
            curdOperation('/contact/'+groupId).then(res=>{
                console.log(res.data);
                setContacts(res.data);
            }).catch(err=>{
                console.log(err);
            })
        }
        
    },[groupId])
    
    return (
        <div class="mt-5 block">
            <h1 className='text-center'>Contacts</h1>
            <ul class="list-group">
                {
                    contacts && contacts.map((contact)=>
                        <li class="list-group-item" onClick={()=>{getContactData(contact)}}>{contact.name}</li>
                    )
                }

            </ul>
        </div>
    )
}
