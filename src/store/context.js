import React, {useState, useEffect} from 'react';

const names = [
    { value: "E", top: '50%', right: '80%' },
    { value: "S", top: '50%', right: '75%' },
    { value: "Z", top: '50%', right: '70%' },
    { value: "T", top: '50%', right: '65%' },
    { value: "E", top: '50%', right: '60%' },
    { value: "R", top: '50%', right: '55%' },
    { value: " ", top: '50%', right: '50%' },
    { value: "K", top: '50%', right: '45%' },
    { value: "A", top: '50%', right: '40%' },
    { value: "D", top: '50%', right: '35%' },
    { value: "A", top: '50%', right: '30%' },
    { value: "R", top: '50%', right: '25%' }
  ];


const Context = React.createContext();

export function ContextProvider(props) {

const [name, setName] = useState(names);

const [text, setText] = useState(false);

const randomize = () => Math.floor(Math.random() * 500);

    const onMouseEnter = () => {
        setName(
          names.map((name) => {
            return {
              ...name,
              top: randomize(),
              left: randomize(),
            };
          })
        );
      };
      const onMouseLeave = () => {
        setName(names);
      };

      useEffect(() => {
        setInterval(() => {
          setText(true);
        }, 3000)
      }, [])

      // Form Component

const [userMessage, setUserMessage] = useState({name: '', email: '', message: ''});
const [allMessages, setAllMessages] = useState([]);
const [submit, setSubmit] = useState(false);
const [formErrors, setFormErrors] = useState({});

const onInputChange = (e) => {
    setUserMessage(prev => ({...prev, [e.target.name]: e.target.value}));
    console.log(userMessage);
}

const onSubmitMessage = (e) => {
    e.preventDefault();
    setAllMessages([...allMessages, userMessage]);
    setFormErrors(validate(userMessage));
    setSubmit(true);
  }

useEffect(() => {
    if(Object.keys(formErrors).length === 0 && submit) {
      console.log(userMessage);
    }
  }, [formErrors]);

const validate = (values) => {
    const errors = {};
    if(values.name.length === 0) {
      errors.name = 'Name is required!'
    }
    if(!values.email) {
      errors.email = 'Email is required!'
    }
    if (values.message.length === 0) {
      errors.message = 'You are trying to send an empty message.'
    }
    return errors;
  }

  const handleResubmit = () => {
    setUserMessage({name: '', email: '', message: ''})
    setSubmit(false);
  }
      return (
          <Context.Provider value={{
              names, name, setName, onMouseEnter, randomize, onMouseLeave, text, setText,
              
              userMessage, setUserMessage, allMessages, setAllMessages, submit, setSubmit, formErrors, setFormErrors, onInputChange, onSubmitMessage, validate, handleResubmit, useEffect
            }}>{props.children}
          </Context.Provider>
      )
}

export default Context;