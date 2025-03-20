import React from 'react';
import useApihooks from '../customHook/useApiHooks';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import curdOperation from '../utilities/curdOperation';

export default function Addcontact() {
  let group = useApihooks('/group');

  const formik = useFormik({
    initialValues: {
      groupId: '',
      name: '',
      mobile: '',
      email: ''
    },
    validationSchema: Yup.object().shape({
      groupId: Yup.string()
        .required('Required'),
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      mobile: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Please enter a valid email')
        .required('Required')
    }),
    onSubmit: values => {
      console.log(values);
      curdOperation('/contact',{
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
            <h1 className="text-center mb-4">Add Contact</h1>
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Please Select Group</label>
                <select class="form-select" id="groupId" {...formik.getFieldProps('groupId')}>
                  <option value=''>--Select--</option>
                  {
                    group&&group.map(({_id, name}) =>
                      <option value={_id}>{name}</option>
                    )
                  }                  
                </select>
                {formik.touched.groupId && formik.errors.groupId ? (<div>{formik.errors.groupId}</div>) : null}
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Name</label>
                <input type="text" class="form-control" id="name" {...formik.getFieldProps('name')} placeholder='' />
                {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Mobile</label>
                <input type="number" class="form-control" id="mobile" {...formik.getFieldProps('mobile')} placeholder='' />
                {formik.touched.mobile && formik.errors.mobile ? (<div>{formik.errors.mobile}</div>) : null}
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Email Id</label>
                <input type="email" class="form-control" id="email" {...formik.getFieldProps('email')} placeholder='' />
                {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
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
