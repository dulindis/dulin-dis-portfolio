import React,{useState} from 'react';
import axios from 'axios';
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Form() {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
  // const [result, setResult] = useState(false);

  const sendEmail = async event => {
    const toastID =  toast.loading('Sending...', {  
      position: "bottom-center",
      autoClose: 5000
    });
    try {
      event.preventDefault();

      const response = await axios.post('http://localhost:8080/api/send', { ...state });
      
      // setResult(response.data);
      toast.update(toastID, { render: "Your message has been sucessfully sent.", type: "success", isLoading: false,autoClose: 5000, closeOnClick: true, });
      resetForm();

    } catch (error) {
      // setResult({ success: false, message: 'Something went wrong. Try again later'});
      toast.update(toastID, {render:"Something went wrong.", type: "error", isLoading: false,autoClose: 5000,})
    }
  };

  const resetForm = () => {
    setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  const onInputChange = event => {
        const { name, value } = event.target;
        setState({
          ...state,
          [name]: value
        });
  };


  const fields = [
        {type: "text", name: "name", required: true, label: "name",errors:"please write your name"},

        {type: "email", name: "email", required: true, label: "Email", autoComplete: "email",errors:"please write a valid email",  pattern:
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/},

        {type: "text", name: "subject", required: true, label: "subject",errors:"please write the subject of the message"},

        {type: "text", name: "message", required: true, label: "message",errors:"please type your message"},

  ];


  return (
   <>
     <form onSubmit={sendEmail}>
      { fields.map((field,index) => (
            <div key={index} className='inputField'>
                <label htmlFor={field.name}>{field.name}</label>
                <input type={field.type} value={state[field.name]} name={field.name} autoComplete={field.autoComplete} onChange={onInputChange} />
                <small className='warning'> {field.errors?.name && field.errors.name.message}</small>
             </div>
         ))
         }
         <button type="submit">Submit</button>
         <ToastContainer/>
                 {/* <span>{result ? 'Your message has been sucessfully sent. We will get back to you shortly.' : ''}</span> */}
    </form>
    
   </>
        
        )
}

export default Form