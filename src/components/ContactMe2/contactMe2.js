import React from 'react';
import emailjs from 'emailjs-com';



const contactMe2 = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_1y0mmye',
            'template_h8hrrpu',
            e.target,
            '3g7nSOYM-HMMQvTnt').then(res => {
                console.log(res);
            }).catch(err => console.log(err));
            
    }
    return (
        <div className="container border"
        style={{marginTop:"50px", 
        width:"50%"}}> 
            <h1 style={{marginTop:"25px"}}>Contact Me</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label>Name: </label>
                <input type="text" name="name" className="form-control" />

                <label>Email: </label>
                <input type="text" name="user_email" className="form-control" />
            
                <label>Message: </label>
                <input type="text" name="message" rows="4" className="form-control" />
                <input type="submit" value="Send" onClick={sendEmail} className="form-control btn btn-primary" 
                style={{marginTop:"30px"}}/>
            </form>
        </div>
    );
}

export default contactMe2;