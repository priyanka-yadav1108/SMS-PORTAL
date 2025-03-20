import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import curdOperation from '../utilities/curdOperation';
import { toast } from 'react-toastify';


export default function Sendsms() {

    let message = useSelector(state => state.getContact.message);
    let userInfo = useSelector(state => state.getContact.userData);
   

    const formik = useFormik({
        initialValues: {
          name: '',
          mobile: '',
          email: '',
          message: ''
        },
        // validationSchema: Yup.object().shape({
        //     name: Yup.string()
        //         .required('Required'),
        //     mobile: Yup.string()
        //         .required('Required'),
        //     email: Yup.string()
        //         .required('Required'),
        //     message: Yup.string()
        //         .required('Required'),
        // }),
        onSubmit: values => {
          console.log(values);
        //   curdOperation('/sendSms',{
        //     headers:{
        //       'content-type':'application/json'
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(values)
        //   })
        //   .then(res=>{
        //     console.log(res);
        //     toast.success(res.message);
        //   })
        //   .catch(err=>{
        //     console.log(err);
        //     toast.error("Error in Group")
        //   })
        },
    });
    
    return (
        // <div className='block'>
        //     <h1 className="text-center">Send SMS</h1>    
        //     <form onSubmit={formik.handleSubmit}>
        //         <div class="mb-3 form-floating">                    
        //             <input type="text" class="form-control" id="name" placeholder='' defaultValue={userInfo.name} />
        //             <label for="name" class="form-label">Name</label>
        //             {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
        //         </div>
        //         <div class="mb-3 form-floating">                    
        //             <input type="number" class="form-control" id="mobile" placeholder='' value={userInfo.mobile} />
        //             <label for="mobile" class="form-label">Mobile number</label>
        //             {formik.touched.mobile && formik.errors.mobile ? (<div>{formik.errors.mobile}</div>) : null}
        //         </div>
        //         <div class="mb-3 form-floating">                    
        //             <input type="email" class="form-control" id="email" placeholder='' value={userInfo.email} />
        //             <label for="email" class="form-label">Email</label>
        //             {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
        //         </div>
        //         <div class="form-floating mb-3">
        //             <textarea class="form-control" placeholder="" id="message" style={{height: "150px"}} value={message}></textarea>
        //             <label for="floatingTextareaDisabled">Message</label>
        //             {formik.touched.message && formik.errors.message ? (<div>{formik.errors.message}</div>) : null}
        //         </div>
        //         <div className='d-grid gap-2'>
        //             <button type="submit" class="btn btn-navy-blue">Submit</button>
        //         </div>              
        //     </form>
        // </div>

        <Formik
        initialValues={{
          name: '',
          mobile: '',
          email: '',
          message: ''
        }}
        validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            mobile: Yup.string().required("mobile is required"),
            email: Yup.string().required("Email is required"),
            message: Yup.string().required("message is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("Submitted Values:", values);
        }}
        >
        
            <form >
            <input
                type="text"
                name="name"
                value={userInfo.name}
            />
            <input
                type="text"
                name="mobile"
                value={userInfo.mobile}
            />
            <input
                type="email"
                name="email"
                value={userInfo.email}
            />
            <input
                type="text"
                name="message"
                value={message}
            />
            <button type="submit">Submit</button>
            </form>
       
        </Formik>
    )
}
