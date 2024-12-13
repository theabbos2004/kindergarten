import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './button';
import StarImg from "../../assets/Frame (1).png"
import { FormType } from '../../types';

export default function EmialForm(){
    return (
    <Formik
      initialValues={{ name:'',email: '', subject: '' , message :''}}
      validate={(values:FormType) => {
        const errors:{ [key: string]: string } = {};
        if (!values.name) {
          errors.name = 'Name Required';
        } 
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) && !values.email
        ) {
          errors.email = 'Invalid email address';
        }
        else if (!values.subject) {
          errors.subject = 'Subject Required';
        }
        else if (!values.message) {
          errors.message = 'Message Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        try{
          console.log(values);
          alert("success")
        }
        catch(error){
          console.log(values);
          alert(error)
        }
        finally{
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className=' grid justify-items-stretch pt-10'>
            <div className='grid grid-cols-2 grid-rows-6 gap-5'>
                <div className=' flex flex-col'>
                  <Field type="text" name="name" placeholder="Your name" className=" outline-none hover:bg-gray-100 bg-gray-50 py-4 px-6 text-gray-500"/>
                  <ErrorMessage name="name" component="div" className=' text-red-600 font-semibold'/>
                </div>
                <div className=' flex flex-col'>
                  <Field type="email" name="email" placeholder="Your email" className=" outline-none hover:bg-gray-100 bg-gray-50 py-4 px-6 text-gray-500" />
                  <ErrorMessage name="email" component="div" className=' text-red-600 font-semibold'/>
                </div>
                <div className='col-span-2'>
                  <Field type="text" name="subject" placeholder="Subject" className=" w-full outline-none hover:bg-gray-100  bg-gray-50 py-4 px-6 text-gray-500"/>
                  <ErrorMessage name="subject" component="div" className=' text-red-600 font-semibold'/>
                </div>
                <Field name="message">
                    {({ field }:{field:any}) => (
                    <div className="col-span-2 row-span-3">
                        <textarea {...field} placeholder="Message" className=" outline-none hover:bg-gray-100 w-full h-full py-5 bg-gray-50 text-wrap px-6 text-gray-500"/>
                        <ErrorMessage name="message" component="div" className=' text-red-600 font-semibold'/>
                    </div>
                    )}
                </Field>
            </div>
            <div className='flex relative justify-center'>
                <Button type="submit" disabled={isSubmitting} className='justify-self-center w-64 bg-[--orange] outline-yellow-500'>
                    Submit
                </Button>
                <img src={StarImg} className="size-14 absolute top-0 right-0 sm:right-10 z-0"/>
            </div>
        </Form>
      )}
    </Formik>
);
}