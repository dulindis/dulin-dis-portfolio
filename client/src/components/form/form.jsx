import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

// import { ToastContainer, toast } from 'react-toastify';

function Form() {
    const form = useRef();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onFormSubmit  = data => console.log(data);
      const onErrors = errors => console.error(errors);


      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      

    // const toastifySuccess = () => {
    //     toast("Form sent!", {
    //       position: "bottom-right",
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: false,
    //       className: "submit-feedback success",
    //       toastId: "notifyToast",
    //     });
    //   };


    const fields = [
        {type: "text", name: "name", required: true, label: "name",errors:"please write your name"},

        {type: "email", name: "email", required: true, label: "Email", autoComplete: "email",errors:"please write a valid email",  pattern:
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/},

        {type: "text", name: "subject", required: true, label: "subject",errors:"please write the subject of the message"},

        {type: "text", name: "message", required: true, label: "message",errors:"please type your message"},

    ]
  return (

    <form ref={form} onSubmit={handleSubmit(onFormSubmit,onErrors)}>
       { fields.map(field => (
            <>
                <label for={field.name}>{field.name}</label>
                <input type={field.type} name={field.name} autoComplete={field.autoComplete}   {...register(`${field.name}`,{required:field.required, pattern:field.pattern})}/>
                {/* <div className="error">{field.message}</div> */}
               <small className='warning'> {errors?.name && errors.name.message}</small>
            </>
        ))
        }
              <button type="submit">Submit</button>


        </form>  )
}

export default Form