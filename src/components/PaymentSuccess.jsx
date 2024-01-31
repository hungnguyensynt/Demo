import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const isPaymentRunning = localStorage.getItem("payment-in-progress") === "true"
    const navigate = useNavigate();
    if (isPaymentRunning) {
        localStorage.setItem("paid", "true")
        localStorage.removeItem("payment-in-progress")
    }

    const goToHome = () => {
        navigate('/')
    }

    return (
        <div className="container text-center" style={{paddingTop: 400}}>
            <h1 className="my-5">Payment Successful!</h1>
            <p className="lead">Your payment has been processed successfully. Thank you for your purchase.</p>
            <button style={{paddingBottom: 40}} className="btn btn-lg btn-primary mt-5" onClick={goToHome}>
                Go to Home Page
            </button>
        </div>
    );
}

export default PaymentSuccess;