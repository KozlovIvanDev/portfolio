import React, {useState} from "react";
//Images
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import telegram from "../img/telegram.svg"
//Styles
import styled from "styled-components";
import { About} from "../styles";
import { scrollReveal} from "../animation";
import { useScroll } from "./useScroll";
import{ send, init } from 'emailjs-com';
init("user_b5RvxU0DDxWROtDyqGzz7");

const ContactSection = () => {
  const [element, controls] = useScroll();
  const [toSend, setToSend] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_4y7kh9n',
      'template_tf1m18n',
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
    <Contacts
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="works"
    >
    <h2><span>Let's stay in touch!</span></h2>
      <Contact className="email">
        <h3>Write me an email</h3>
        <form className="contact_form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="Name">
              <input 
                type="text" 
                name="Name" 
                id="Name" 
                value={toSend.from_name} 
                onChange={handleChange}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                required
              />
              <h4>Name</h4>
            </label>
          </div>
          <div className="field">
            <label htmlFor="Email">
              <input 
                type="text" 
                name="Email" 
                id="Email" 
                value={toSend.reply_to} 
                onChange={handleChange}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                required
              />
              <h4>Email</h4>
            </label>
          </div>
          <div className="field textareaCont">
            <label htmlFor="Message">
              <textarea 
                type="text" 
                name="Message" 
                id="Message" 
                value={toSend.message} 
                onChange={handleChange} 
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                required
              />
              <h4>Message</h4>
            </label>
          </div>
          <input type="submit" className="button" id="button" value="Send an Email" />
        </form>
      </Contact>
      <Contact>
        <div className="social">
          <a href="https://t.me/ivan_kozlov_ik" className="social_item">
            <img src={telegram} alt="" className="social_img"/>
          </a>
          <a href="https://www.instagram.com/ivan_kozlov.ik/" className="social_item">
            <img src={instagram} alt="" className="social_img"/>
          </a>
          <a href="https://www.facebook.com/ivanator777" className="social_item">
            <img src={facebook} alt="" className="social_img"/>
          </a>
        </div>
      </Contact>
    </Contacts>
  );
};

const Contacts = styled(About)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .left{
    margin-left: 0;
  }
  .right {
    margin-right: 0;
  }
`;

const Contact = styled.div`
  transition: all .5s ease;
  width: 40rem;
  margin: 2rem;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  text-align: left;
  background: #2c2c2c;
  padding: 2.5rem;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
  -moz-box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
  box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);

  .image_cont{
    width: 95%;
    height: 20rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: cemter;
    background: #3f3f3f;
    border-radius: 5px;
  }
  .stack{
    width: 95%;
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .tech{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .tech_item{
    padding: 1rem;
    background: #3f3f3f;
    border-radius: 5px;
    margin: 0.5rem 1rem; 
  }
  .first{
    margin-left: 0;
  }
  .type{
    margin-right: 0;
  }
  .work_img{
    margin: auto;
    width: 90%;
    height: auto;
  }

  .text{
    align-items: flex-start;
    width: 95%;
    background: #3f3f3f;
    padding: 2rem;
    border-radius: 5px;
  }
  h4{
    font-size: 1.25rem;
  }

  h3{
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  p{
    padding: 0rem;
    padding-top: 1rem;
  }
  .social{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 32rem;
    height: 8rem;
  }
  .social_item{
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in-out; 
    margin: 1rem;
    border-radius: 5px;
    &:hover{
      background-color: #1B1B1B;
    }
  }
  .social_img{
    width: 4rem;
    height: 4rem;
  }
  .contact_form{
    display: flex;
    flex-direction: column;

    .field {
      border: 2px solid #fff;
      position: relative;
      margin-bottom: 2rem;
      border-radius: 5px;
      transition: 0.3s ease-in-out;
      width: 30rem;
      &:hover{
        border: 2px solid #23D997;
      }
      input {
        text-align: left
        font-size: 15px;
        font-weight: bold;
        color: #fafafa;
        border: none;
        width: 100%;
        outline: none;
        background: none;
        height: 35px;
        padding: 2rem;
        position:relative;
      }
      label {
        display: flex;
        flex-direction: row;
        align-items: center;

        h4{
          position: absolute;
          margin-left: 1.5rem;
          transition: all .3s ease-in-out;
        }
      }
    }
    .field:focus-within .field{
      border: 2px solid #23D997;
    }
    label:focus-within h4, input:valid + h4{
      padding: 0 1rem;
      background: #2C2C2C;
      transform: translate(-0.5rem, -2rem);
      z-index: 2;
      font-size: 12px;
    }
    .textareaCont:focus-within h4, textarea:valid + h4{
      padding: 0 1rem;
      background: #2C2C2C;
      left: -0.5rem;
      top: 1rem;
      border-radius: 5px;
      z-index: 2;
      font-size: 12px;
      position: block;
    }
    .textareaCont h4 {
      position: absolute;
      margin-left: 1.5rem;
      bottom: 4.5rem;
      transition: all .3s ease-in-out;
      height: 1.5rem;
    }
    textarea {
      text-align: left;
      resize: vertical;
      min-height: 10rem;
      line-height: 20px;
      width: 100%;
      border: none;
      outline: none;
      max-width: 30rem;
      padding: 2rem;
      text-align: left
      font-size: 15px;
      font-weight: bold;
      background: #2C2C2C;
      color: #fafafa;
    }
  }
`;

export default ContactSection;
