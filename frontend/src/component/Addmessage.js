import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import useApihooks from '../customHook/useApiHooks';
import curdOperation from '../utilities/curdOperation';
import { toast } from 'react-toastify';

export default function Addmessage() {
  let libraryList = useApihooks('/library');

  const formik = useFormik({
    initialValues: {
      libraryId: '',
      message: ''
    },
    validationSchema: Yup.object().shape({
      libraryId: Yup.string()
        .required('Required'),
      message: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
      curdOperation('/message',{
        headers:{
          'content-type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values)
      })
      .then(res=>{
        console.log(res);
        toast.success(res.message);
      })
      .catch(err=>{
        console.log(err);
        toast.error("Error in Group")
      })
    },
  });

  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>          
          <div className='col-md-4 block mt-5'>
          <h1 className="text-center mt-4">Add Message</h1>
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Please Select Library</label>
                <select class="form-select" id='libraryId' {...formik.getFieldProps('libraryId')}>
                  <option value=''>--Select--</option>
                  {
                    libraryList && libraryList.map(({_id, name}) =>
                      <option value={_id}>{name}</option>
                    )
                  }                  
                </select>
                {formik.touched.libraryId && formik.errors.libraryId ? (<div>{formik.errors.libraryId}</div>) : null}
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Enter Message</label>
                <textarea class="form-control" id="message" {...formik.getFieldProps('message')} rows="3"></textarea>
                {formik.touched.message && formik.errors.message ? (<div>{formik.errors.message}</div>) : null}
              </div>
              <div className='d-grid gap-2'>
                <button type="submit" class="btn btn-navy-blue">Submit</button>
              </div>              
            </form>
          </div>          
        </div>
    </div>
  )
}
