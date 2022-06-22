import React, {useContext} from 'react'
import Context from '../../store/context'
import {Link} from 'react-router-dom'
import TextAnimation from './TextAnimation'
import {BsArrowLeft} from 'react-icons/bs'

function Form() {

  const { submit, formErrors,  onInputChange, onSubmitMessage} = useContext(Context);

  return (
    <div className='formContainer'>
    {Object.keys(formErrors).length === 0 && submit ? (
        <div className='msg-submit'><h3>Thank you for your message!</h3><Link to='/' className='home'><BsArrowLeft/> Home</Link></div>
      ) : 
      (<div className='msg-write'>
        <div className='message-me'>
          <TextAnimation className='text-animation'/>
        </div>
        <form onSubmit={onSubmitMessage} className='form'>
          <div className='inputContainer'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' onChange={onInputChange}/>
          </div>
          <p>{formErrors.name}</p>
          <div className='inputContainer'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' onChange={onInputChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className='inputContainer'>
            <label htmlFor='message'>Your message</label>
            <textarea id='message' name='message' placeholder='Say hi!' onChange={onInputChange}></textarea>
          </div>
          <p>{formErrors.message}</p>
          <button type='submit'>Send message</button>
        </form>
      </div>)}
    </div>
  )
}

export default Form