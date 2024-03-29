//Import styles, validateEmail helper and React and useState destructured from react
import React, {useState} from 'react';
import "./style.css";
import { validateEmail } from '../utils/helpers';

//Inline styling
const styles = {
    title: {
        marginTop: 20,
        color: "#3A3B3C"
    },
    text: {
        color: "#3A3B3C"
    },
    form:{
        padding: 20,
        marginLeft: 30,
        boxShadow: "0 4px 10px 0 rgba(0,0,0,0.9)",
        marginRight: 30,
        borderRadius: "20px",
        backgroundColor: "white",
    },
    contact:{
        marginRight: 30
    },
    button:{
        backgroundColor: 'cyan',
        color: "#3A3B3C"
    } 
}

function Contact(){
    //Set state for form and error message
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setError] = useState('');

    const { name, email, message } = formState;

    function handleInputChange(e) {
        const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
                if(!isValid) {
                    setError('Email is not valid. Please try again!');
                } else {
                    setError('');
                }
        };
        if (e.target.name === 'name') {
            console.log(e.target.value)
                if(e.target.value==='') {
                    setError('Name is not valid. Please try again!');
                } else {
                    setError('');
                }
        };
        if (e.target.name === 'message') {
            if(inputValue==='') {
                setError('Message is not valid. Please try again!');
            } else {
                setError('');
            }
    }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
            }
        }

        const handleFormSubmit = (e) => {
            //Prevent default upon submitting form, which is refreshing page
            e.preventDefault();
        };
        
    return(
        <div>
            <section class="mb-4">
                <h2 style ={styles.title} class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                <p style={styles.text}class="text-center w-responsive mx-auto mb-5">Have any questions or feedback? I would love to hear!</p>

                {/*Return contact form*/}
                <div style={styles.form}class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" onBlur={handleInputChange}placeholder="Name" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="email" id="email" name="email" onBlur={handleInputChange} placeholder="Email"class="form-control"/>
                                        <label></label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                
                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" onBlur={handleInputChange}rows="2" class="form-control md-textarea" placeholder="Message"></textarea>
                                        <label></label>
                                    </div>
                                </div>
                            </div> 
                        </form>
                        <div class="text-center text-md-left">
                            <a style={styles.button}class="btn" onClick={handleFormSubmit}>Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul style={styles.contact} class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p style={styles.text}>Kissimmee, FL 34746 USA</p>
                            </li>
                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p style={styles.text}>919-830-5120</p>
                            </li>
                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p style={styles.text}>cianfich@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*Return format for error message*/}
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}
//Export function
export default Contact;