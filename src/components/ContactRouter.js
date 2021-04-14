import React, {useState} from "react";

//Styles
import styled from "styled-components";
import { About} from "../styles";
import { scrollReveal} from "../animation";
import { useScroll } from "./useScroll";
import{ send, init } from 'emailjs-com';
import {
    BrowserRouter as Router,
    Route,
    IndexLink,
    Link,
    hashHistory
  } from "react-router-dom";
init("user_b5RvxU0DDxWROtDyqGzz7");

  
  /**
  * A <Link> component an 'activeclassname' attribute value of "active"
  * will assign its <a> tag a css class of "active" when the router notices
  * the user is on the page for the link. This lets us highlight the current
  * page in the navigation bar to show user which page they are on.
  *
  * To save us some typing, lets make ourselves a new component for links in the 
  * navigation bar with 'activeclassname="active"' many times. React Components'
  * composability and the ...spread operator make this really easy for us
  */
  const NavBarLink = (props) => {
    return <Button {...props} activeclassname="active-btn"/>
  }
  
  const NavigationBar = (props) => {
    return (
        <Buttons className="buttons">
            <div to="/" activeclassname="active-btn" className="contact-button">
                <h4>Follow Social Media</h4>
            </div>
            <Link to="/pictures" className="contact-button">Book a Call</Link>
            <div to="/time" className="contact-button">
                <h4>Write on Email</h4>
            </div>
        </Buttons>
    )
  }
  
  const Footer = (props) => {
    return <footer><p>I am the end of the page!</p></footer>
  }
  
  class CommonElementsComponent extends React.Component {
    render() {
      return (
        <Contacts>
            <NavigationBar />    
            <ContactsContainer>
            {this.props.children}
            </ContactsContainer>
            <Footer />    
        </Contacts>
      );
    }
  }

  function HomePage() {
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
        <Contact className="social">
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
                    autocorrect="off"
                    autocapitalize="none"
                    spellcheck="false"
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
                    autocorrect="off"
                    autocapitalize="none"
                    spellcheck="false"
                    required
                />
                <h4>Email</h4>
                </label>
            </div>
            <input type="submit" className="button" id="button" value="Send an Email" />
            </form>
        </Contact>
        );
    
  }
  
  function PicturesPage() {
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
        <Contact className="social">
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
                    autocorrect="off"
                    autocapitalize="none"
                    spellcheck="false"
                    required
                />
                <h4>Name</h4>
                </label>
            </div>
            <div className="field">
                <label htmlFor="Message">
                <input 
                    type="text" 
                    name="Message" 
                    id="Message" 
                    value={toSend.message} 
                    onChange={handleChange} 
                    autoComplete="off"
                    autocorrect="off"
                    autocapitalize="none"
                    spellcheck="false"
                    required
                />
                <h4>Message</h4>
                </label>
            </div>
            <input type="submit" className="button" id="button" value="Send an Email" />
            </form>
        </Contact>
       );
  }
  
  function TimePage()  {
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
        <Contact className="social">
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
                    autocorrect="off"
                    autocapitalize="none"
                    spellcheck="false"
                    required
                />
                <h4>Name</h4>
                </label>
            </div>
            <div className="field">
                <label htmlFor="Message">
                <input 
                    type="text" 
                    name="Message" 
                    id="Message" 
                    value={toSend.message} 
                    onChange={handleChange} 
                    autoComplete="off"
                    autocorrect="off"
                    autocapitalize="none"
                    spellcheck="false"
                    required
                />
                <h4>Message</h4>
                </label>
            </div>
            
            </form>
        </Contact>
    );
  };
    /**
     * The router is just another component, and is rendered the same way
     */
    class ContactRouter extends React.Component {
        render(){
            return (
                <Router>
                    <Route component={CommonElementsComponent}>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/pictures" component={PicturesPage}/>
                        <Route path="/time" component={TimePage}/>
                    </Route>
                </Router>
            )
        }
  }
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
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  .active-btn{
    background: #00FFA3;
    color: #282828;

    &:hover{
      color: #fafafa;
      border:2px solid #00FFA3;
      background: transparent;
    }
  }
`;
const Button = styled.div`
.contact-button{
    margin: 4rem 2rem;
    margin-bottom: 0.5rem;
    padding: 1rem 2rem;
    border:2px solid #00FFA3;
    background: transparent;
    color: #fafafa;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    transition:all .3s ease-in-out;
    &:hover{
      color: #282828;
      background: #00FFA3;
    }
  }
`;
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;

  .hidden{
    display: none;
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

  }
  p{
    padding: 0rem;
    padding-top: 1rem;
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
      width: 25rem;
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
      transform: translate(-1rem, -2rem);
      border-radius: 5px;
      z-index: 2;
      font-size: 12px;
    }
  }
`;
export default CommonElementsComponent;