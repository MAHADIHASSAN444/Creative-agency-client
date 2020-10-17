import React from 'react';

const ContactForm = () => {
    return (
        <main style={{height: '700px',background: '#FBD062'}} className="row p-2">
            <div className="col-md-4 offset-md-1 mt-5">
                <h1>Let us handle your <br/> project profationaly</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip</p>

            </div>
            <div className="col-md-6 mt-5">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your email address"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your's name/ company's name"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="" cols="30" rows="10" placeholder="Your massage"/>

                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-dark">Submit</button>

                    </div>

                </form>
            </div>
            
        </main>
    );
};

export default ContactForm;