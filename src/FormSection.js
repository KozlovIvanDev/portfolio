import React, { useState } from 'react';
import { send, init } from 'emailjs-com';
import styled from "styled-components";
import { About} from "./styles";

init("user_b5RvxU0DDxWROtDyqGzz7");
const EmailForm = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_4y7kh9n',
      'service_4y7kh9n',
      toSend,
      'user_b5RvxU0DDxWROtDyqGzz7'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

    return (
        <FormWrapper>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                name='from_name'
                placeholder='from name'
                value={toSend.from_name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='to_name'
                placeholder='to name'
                value={toSend.to_name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
              />
              <input
                type='text'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <button type='submit'>Submit</button>
          </form>
        </FormWrapper>
  );
};
  
const FormWrapper = styled(About)`
`;
export default EmailForm;
// const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_tf1m18n';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });