import React from 'react';
import './Form.css';

function Form() {
    return (
        <div className="card col-md-8" id="card-form">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label for="formInputName">Name</label>
                        <input type="Name" className="form-control" id="username" placeholder="Name"></input>
                    </div>
                    <div className="form-group">
                        <label for="FormInputemail">Email address</label>
                        <input type="email" className="form-control" id="email-address" placeholder="name@example.com"></input>
                    </div>
                    <div className="form-group">
                        <label for="formInputComment">Comments</label>
                        <textarea className="form-control" id="comment" rows="4"></textarea>
                    </div>

                    <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;