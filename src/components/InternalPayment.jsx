import React from 'react';

function InternalPayment() {
  return (
    <>
      {(document.title = 'Internal Payment System - News Synt')}
      <div className='container' style={{ padding: '5rem' }}>
        <div className='row'>
          <div className='col-4 text-center'>
            <img
              src='/synt-logo.png'
              className='rounded'
              alt='logo'
              style={{ width: '50%' }}
            />
          </div>
          <div className='col-8'>
            <h1 style={{ paddingBottom: '1rem' }}>Internal Payment System</h1>
            <p>
              Welcome to our news app! We are a team of dedicated journalists
              and developers who are passionate about bringing you the latest
              and most accurate news from around the world. Our app is designed
              to be fast, reliable, and easy to use, so you can stay informed on
              the go. We strive to provide a diverse range of perspectives on
              the stories that matter most to you, and we are committed to
              upholding the highest standards of journalism. Thank you for
              choosing our news app, and we hope you enjoy using it as much as
              we enjoyed creating it.
            </p>
            <b style={{fontStyle:'italic'}}>By clicking the button PAY below, you agree to the terms and conditions of use
              and privacy policy. The monthly subscription fee is $44.95.
            </b>
            <br/>
            <div style={{display:'flex', justifyContent:'center'}}>
              <button
                className='btn btn-outline-success btn-sm'
                onClick={() => {
                  window.location = '/payment-successful';
                }}
              >
                Pay
              </button>
              <button
                className='btn btn-outline-danger btn-sm'
                onClick={() => {
                  window.location = '/';
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternalPayment;
