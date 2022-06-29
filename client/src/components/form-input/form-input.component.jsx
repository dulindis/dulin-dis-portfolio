import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";


const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {name,type,  onChange, required, pattern,errorMessage,className,...inputProps} = props;

  const handleFocus = event  => {
    setFocused(true);
  }; 


 return( 

  <div  className='input-field'>
      {/* <label htmlFor={name}>{name}</label> */}

      {
        type==="textarea" ? <textarea 
          name={name}  
        onChange={onChange} 
        onBlur={handleFocus}
        focused={focused.toString()}
        pattern={pattern}
        className={`form-control textfield ${className}`}
        cols="20"
        rows="5"
        placeholder={`${name}`}
        /> : 
        <input 
        {...inputProps} 
        type={type} 
        name={name}  
        onChange={onChange} 
        onBlur={handleFocus}
        focused={focused.toString()}
        pattern={pattern}
        className={`form-control ${className}`}
        // placeholder=" "
        cols={`${type==='textarea'? '20 ' : ''}`}
        rows={`${type==='textarea'? '5 ' : ''}`}

        placeholder={`${name}`}
      
      />



      }
     <span className="focus-border"></span>



      
      <span className="error-message">{errorMessage ? `${errorMessage}` : "."}</span>
  </div>

 )

}


export default FormInput;


// const Input = ({ label, register, required }) => (
//     <>
//       <label>{label}</label>
//       <input {...register(label, { required })} />
//     </>
//   );

// export default Input;