import React from 'react';
import { useState, useEffect } from 'react';
import  Link  from 'next/link';
import emailjs from '@emailjs/browser'

import Header from '../components/Header';


function SignIn() {
  const [status, setStatus] = useState('');
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('anish', 'template_40gu5j9', e.target, 'Xr2jHY1YnFsebyoat')
      .then((result) => {
          console.log(result.text);
          setStatus('SUCCESS');
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  }
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Contact Me</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={sendEmail}>
                  {status && renderAlert()}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name</label>
                      </div>
                      <input name="from_name" required className="form-input w-full text-gray-800" placeholder="Enter your Full Name"  />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input name="email" type="email"  required className="form-input w-full text-gray-800" placeholder="Enter your email address"  />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Message</label>
                      <textarea name='message' className="form-input w-full text-gray-800" placeholder="Enter your message" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" type='submit'>Submit</button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>



    </div>
  );
}
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Your message was successfully submitted</p>
  </div>
)
export default SignIn;