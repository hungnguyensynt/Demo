import React, {useEffect, useState} from 'react';
import ProductTrackingFetcher from "../services/productTracking";
import {getMessageId, getMessageIdPayload} from "../services/message";

const PaymentModal = () => {
    const [showModal, setShowModal] = useState(false);
    const paymentLink = 'https://buy.stripe.com/test_5kA6rebizco4cCcbII'
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect( () => {
        async function fetchData() {
            debugger;
            // You can await here
            // modal opened from payment success page
            if (showModal) {
                const subID = localStorage.getItem("subscriptionKey");
                if (!subID || subID === '') {
                    return;
                }
                const storedMsgId = getMessageId();
                if (!storedMsgId || storedMsgId === '') {
                    return;
                }
                const msgId = getMessageIdPayload(storedMsgId);
                const tracker = new ProductTrackingFetcher();
                await tracker.track({
                    "subscriberID": subID,
                    "sessionID": subID,
                    "messageID": msgId,
                    "timestamp": Date.now(),
                    "appId": window.sn_meta.app_id,
                    "installationKey": window.sn_meta.app_signature,
                    "event": "CartUpdating",
                    "platform": "media",
                    "cart": [
                        {
                            "id": "9999",
                            "product_id": 9999,
                            "code": "SYNT-DEMO-001",
                            "name": "Upgrade Pro Plan",
                            "price": 5, // can be removed
                            "description": "Upgrade to our Pro Plan to continue exploring and reading more articles!",
                            "imageUrls": [
                                "https://synt.com/wp-content/uploads/2019/11/logo_small.png"
                            ],
                            "product_url": window.location.href, // can be removed, user subscription url instead
                            "quantity": 1, // can be removed
                            "lastItemAdded": true
                        }
                    ]
                })

            }
            // ...
        }
        // fetchData no longer needed since services worker did it
        // fetchData().then(r => {
        //     console.log('done')
        // });
    }, [showModal]);



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