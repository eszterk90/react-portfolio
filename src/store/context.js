import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';

const names = [
    { value: "E", top: '50%', right: '75%' },
    { value: "S", top: '50%', right: '70%' },
    { value: "Z", top: '50%', right: '65%' },
    { value: "T", top: '50%', right: '60%' },
    { value: "E", top: '50%', right: '55%' },
    { value: "R", top: '50%', right: '50%' },
    { value: " ", top: '50%', right: '45%' },
    { value: "K", top: '50%', right: '40%' },
    { value: "A", top: '50%', right: '35%' },
    { value: "D", top: '50%', right: '30%' },
    { value: "A", top: '50%', right: '25%' },
    { value: "R", top: '50%', right: '20%' }
  ];

 


const Context = React.createContext();

export function ContextProvider(props) {

const [name, setName] = useState(names);
const [text, setText] = useState(false);

const randomize = () => Math.floor(Math.random() * 500);
 
  // desktop home

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


// mobile home

const [count, setCount] = useState(0);

const onClickHandler = () => {
  setCount((prev) => prev + 1);
  if(count % 2 === 0) {
    setName(
      names.map((name) => {
        return {
          ...name,
          top: randomize(),
          left: randomize(),
        };
      })
    );
    console.log(count)
  }
  else {
    setName(names);
    console.log(count)
  }
}

      // Form Component

const [userMessage, setUserMessage] = useState({name: '', email: '', subject: '', message: ''});
const [allMessages, setAllMessages] = useState([]);
const [submit, setSubmit] = useState(false);
const [formErrors, setFormErrors] = useState({});

const onInputChange = (e) => {
    setUserMessage(prev => ({...prev, [e.target.name]: e.target.value}));
    console.log(userMessage);
}

// const onSubmitMessage = (e) => {
//     e.preventDefault();
//     setAllMessages([...allMessages, userMessage]);
//   }

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(userMessage));
    emailjs.sendForm('service_417jx8h', 'template_lrn7kbv', e.target, 'kZcQ3JS0ctp-czOJH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    setSubmit(true);
  };

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
    if(!values.subject) {
      errors.subject = 'Subject is required!'
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

  // navbar

  const [open, setOpen] = useState(false);

  // projects toggled

  const [active, setActive] = useState(false);

  const toggleProjects = () => {
    setActive(!active)
  }

      return (
          <Context.Provider value={{
              names, name, setName, onMouseEnter, randomize, onMouseLeave, text, setText, count, onClickHandler, toggleProjects, active,
              
              userMessage, setUserMessage, allMessages, setAllMessages, submit, setSubmit, formErrors, setFormErrors, onInputChange, sendEmail, validate, handleResubmit, useEffect, open, setOpen
            }}>{props.children}
          </Context.Provider>
      )
}

export default Context;