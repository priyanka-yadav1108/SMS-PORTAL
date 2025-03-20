import React from 'react'
import Showlibrary from './Showlibrary'
import Showgroup from './Showgroup'
import Showcontact from './Showcontact'
import Showmessage from './Showmessage'
import Sendsms from './Sendsms'

export default function Home() {
  return (
    <div className='container'>
      
      <div class="row d-flex justify-content-center mt-5">
        <div className='col-4'>
          <Showlibrary/>
          <Showmessage />
          
        </div>
        <div className='col-4'>
          <Sendsms />
        </div>
        <div className='col-4'>
          <Showgroup />
          <Showcontact />
        </div>
      </div>        
    </div>
  )
}
