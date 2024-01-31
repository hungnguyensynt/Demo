import React, { useState } from 'react';

const PaymentModal = () => {
    const [showModal, setShowModal] = useState(false);
    const paymentLink = 'https://buy.stripe.com/test_5kA6rebizco4cCcbII'
    const toggleModal = () => {
        setShowModal(!showModal);
    };



    return (
        <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-primary" onClick={toggleModal}>
                Continue Reading
            </button>

            {showModal && (
                <div style={{opacity: 1, maxWidth: '100vw'}} id="payment-modal" className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Continue Reading</h5>
                                <button type="button" className="close" onClick={toggleModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>This exclusive content requires a payment to access. Please proceed with your payment
                                    to continue reading.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={() => {
                                    localStorage.setItem("payment-in-progress", "true")
                                    window.location = paymentLink
                                }}>Pay and
                                    Continue
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentModal;