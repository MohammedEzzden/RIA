import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Contacts extends Component {
  render() {
    return (
      <section className='my-5 py-5'>
        <div className='container'>
          <div className='well well-sm'>
            <h3 ><strong> Our Location </strong>
            </h3>
          </div>

          <div className='row '>
            < div className='col-md-7'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.42080206820415!2d13.201975236434928!3d32.878787524332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a893c4a9677339%3A0x684d7ccad398ad8c!2sBest%20line!5e0!3m2!1sen!2sly!4v1708898781663!5m2!1sen!2sly" style={{
              border: '0',
              width : '100%',
              height : '315px',
              frameborder : '0'
            }} 
            allowFullScreen
            />
            </div>
            <div className='col-md-5'>
              <h4><strong>Contact Us</strong></h4>
              <form >
                <div className='form-group'>
                  <input type='text' className='form-control'
                  placeholder='Name'/>
                  

                </div>

                <div className='form-group'>
                  <input type='email' className='form-control'
                  placeholder='Email'/>
                  

                </div>

                <div className='form-group'>
                  <input type='tel' className='form-control'
                  placeholder='Phone'/>
        
                </div>

              <textarea
               className='form-control'
               cols='30' 
               rows='3' 
               placeholder='Message'/>

               <Link className='btn btn-outline-primary text-uppercase mt-1'>

                <i  className='fa fa-paper-plane-o' aria-hidden='true'/>
                
                &nbsp;Send

               </Link>

              </form>
            </div>
          </div>
          </div>  

      </section>
    )
  }
}
export default Contacts;
