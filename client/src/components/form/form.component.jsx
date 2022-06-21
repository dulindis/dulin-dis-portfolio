import React,{useState} from 'react';
import axios from 'axios';
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from 'react-toastify';

function Form() {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
  const [result, setResult] = useState(null);

      const sendEmail = event => {
        event.preventDefault();
    
        axios.post('http://localhost:8080/api/send', { ...state })
        .then(response => {setResult(response.data); 
          setState({ name: '', email: '', subject: '', message: '' })
        }).catch(() => {setResult({ success: false, message: 'Something went wrong. Try again later'})})

        // axios.post('/send', { ...state }).then(response => {setResult(response.data); setState({ name: '', email: '', subject: '', message: '', sent:true }); this.resetForm()}).catch(() => {setResult({ success: false, message: 'Something went wrong. Try again later'})})
        console.log('We will fill this up shortly.');
        // code to trigger Sending email
      };

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

    ]
  return (
    <form onSubmit={sendEmail}>
      { fields.map(field => (
            <div className='inputField'>
                <label for={field.name}>{field.name}</label>
                <input type={field.type} value={state[field.name]} name={field.name} autoComplete={field.autoComplete} onChange={onInputChange} />
                <small className='warning'> {field.errors?.name && field.errors.name.message}</small>
             </div>
         ))
         }
         <div>{result}</div>
         {/* <div className={result.success===false ? 'msg ':'msg msgAppear'}>{result.message}</div> */}
         <button type="submit">Submit</button>
    </form>
    // <form  onSubmit={sendEmail()}>
    //    { fields.map(field => (
    //         <>
    //             <label for={field.name}>{field.name}</label>
    //             <input type={field.type} value={state[field.name]} name={field.name} autoComplete={field.autoComplete} onChange={onInputChange} />
    //             {/* <div className="error">{field.message}</div> */}
    //            <small className='warning'> {field.errors?.name && field.errors.name.message}</small>
    //         </>
    //     ))
    //     }
    //     <div className={this.state.sent ? 'msg msgAppear':'msg'}>{result.message}</div>
    //           <button type="submit">Submit</button>


    //     </form>  
        
        )
}

export default Form