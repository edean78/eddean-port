import React from 'react';
import './Form.css';

function Form() {
    return (
        <div class="container">
            <div class="row">
                <form class="contact-form col-md-12">
                    <div class="row">
                        <div class="input-fname col-md-6">
                            <input id="fname_prefix" type="text" class="validate"></input>
                            <label for="fname_prefix">First Name</label>
                        </div>
                        <div class="input-lname col-md-6">
                            <input id="lname_prefix" type="text" class="validate"></input>
                            <label for="lname_prefix">Last Name</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-email col-md-12">
                            <input id="email_prefix" type="email" class="validate"></input>
                            <label for="email_prefix">Email</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-message col-md-12">
                            <textarea id="ta_prefix" class="materialize-textarea"></textarea>
                            <label for="ta_prefix">Enter your message here...</label>
                        </div>
                    </div>

                    <div class="row">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;