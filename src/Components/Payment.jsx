import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from "../Styles/Description.module.css"
const Payment = () => {
    const Navigate= useNavigate()

    const [payments, setPayments] = useState({
        name : "",
        card : "",
        expDate : "",
        cvv : ""
    })
    const handleChange = (e)=>{
        setPayments({...payments, [e.target.name] : e.target.value})
    }

    const handlePayment = ()=>{
        payments.name && payments.card && payments.expDate && payments.cvv ? Navigate("/success") : window.confirm("Plz fill out all inputs")
    }
    return (
        <div className={Styles.payments}>
            <h1>Confirm and pay</h1>
            <hr />
            <label className={Styles.paymentLabel} htmlFor="/Card" >Name : </label>
            <input className={Styles.paymentInput} onChange={handleChange} name="name" placeholder= "Enter Your Name" type="text"  />
            <label className={Styles.paymentLabel} htmlFor="/Card" >card Number : </label>
            <input className={Styles.paymentInput} onChange={handleChange} name="card" placeholder= "Enter Your Card" type="number" />
            
            <label className={Styles.paymentLabel} htmlFor="/Card" >Exp Date : </label>
            <input className={Styles.paymentInput} onChange={handleChange} name="expDate" placeholder= "Enter Your Exp Date" type="number" />
            
            <label className={Styles.paymentLabel} htmlFor="/Card" >CVV : </label>
            <input className={Styles.paymentInput} onChange={handleChange} name="cvv" placeholder= "Enter Your CVV" type="number" />
            
            <button className={Styles.paymentLabelBTN} onClick={handlePayment}>confirm and pay</button>
        </div>
    )
}
export default Payment
