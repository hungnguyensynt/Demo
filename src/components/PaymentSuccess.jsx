import React, {useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import ProductTrackingFetcher from "../services/productTracking";
import {getMessageId, getMessageIdPayload} from "../services/message";

const PaymentSuccess = () => {
    const isPaymentRunning = localStorage.getItem("payment-in-progress") === "true"
    const navigate = useNavigate();
    if (isPaymentRunning) {
        localStorage.setItem("paid", "true")
        localStorage.removeItem("payment-in-progress")
    }

    const trackPurchase = useCallback(async () => {
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
        const body = {
            "subscriberID": subID,
            "sessionID": subID,
            "messageID": msgId,
            "timestamp": Date.now(),
            "appId": window.sn_meta.app_id,
            "installationKey": window.sn_meta.app_signature,
            "event": "Purchase",
            "order": {
                "batch_id": 0,
                "coupons": "",
                "cust_id": 0,
                "id": 9999,
                "orderdate": Math.floor(Date.now() / 1000),
                "orderpayment_id": 7,
                "source": "shopper",
                "status": 0,
                "subtotal": 5,
                "total": 5
            }
        }
        await tracker.track(body)
    }, [])

    useEffect(() => {
        // trackPurchase no longer needed since services worker did it
        // trackPurchase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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