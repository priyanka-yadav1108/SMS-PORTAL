import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import curdOperation from '../utilities/curdOperation';
import { toast } from 'react-toastify';


export default function Addlibrary() {
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
    }),
    onSubmit: values => {
      console.log(values);
      curdOperation('/library',{
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
            <h1 className="text-center mb-4">Add Library</h1>
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Library Name</label>
                <input type="text" class="form-control" id="name" {...formik.getFieldProps('name')} placeholder='E.g. Birthday' />
                {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
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
