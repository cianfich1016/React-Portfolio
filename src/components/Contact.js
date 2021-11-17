import React, {useState} from 'react';
import "./style.css";
import { validateEmail } from '../utils/helpers';

const styles = {
    title: {
        marginTop: 20,
        color: "#3A3B3C"
    },
    text: {
        color: "#3A3B3C"
    },
    form:{
        marginLeft: 30,
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
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        }
        };

        const handleFormSubmit = (e) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            e.preventDefault();
        
            // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
            if (!validateEmail(email)) {
              setErrorMessage('Email or username is invalid. Please try again!');
              return;
            }
        }
        
    return(
        <div>
            <section class="mb-4">
                <h2 style ={styles.title} class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                <p style={styles.text}class="text-center w-responsive mx-auto mb-5">Have any questions or feedback? I would love to hear!</p>

                <div style={styles.form}class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" placeholder="Name" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="email" id="email" name="email" onChange={handleInputChange} placeholder="Email"class="form-control"/>
                                        <label></label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                
                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message"></textarea>
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

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

        </div>
    )
}

export default Contact;