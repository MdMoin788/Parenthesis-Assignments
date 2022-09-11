import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Styles from "../Styles/Description.module.css"
const Description = () => {
    const Navigate = useNavigate()
    const [singles, setSingle] = useState(JSON.parse(localStorage.getItem("singles")) || "")
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")) || "")
    const { id } = useParams()
    const [toggle, setToggle] = useState(false)
    const [days, setDays] = useState(1)
    const [guest, setGuests] = useState(false)
    console.log('guest', guest);
    const [checkIN, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handlereserve = () => {
        guest ? Navigate("/payment") : window.confirm("Choose Guest and Days Quantity")
    }
    const handleSearchfilter = () => {
        setToggle(!toggle)
        let startDates = state[0].startDate.toString()
        let endDates = state[0].endDate.toString()
        let startSearch = startDates.split()[0].split(" ")[2] + " " + startDates.split()[0].split(" ")[1]
        let endSearch = endDates.split()[0].split(" ")[2] + " " + endDates.split()[0].split(" ")[1]
        setCheckIn(startSearch)
        setCheckOut(endSearch)
        console.log('endSearch', endSearch);
        setDays(+endDates.split()[0].split(" ")[2] - +startDates.split()[0].split(" ")[2])
    }
    //   console.log('idParams', id);
    return (
        <div >
            <Navbar></Navbar>
            <div className={Styles.Description}>
                <h2>Whispering Pines Cottages| Cabin | Tandi</h2>
                <span><i class="fa-solid fa-star"></i> {singles?.rating} 175 reviews</span> - <span>{singles?.title}</span>
                <br />
                <br />
                <div className={Styles.imageBox}>
                    <img className={Styles.imageFirst} src={singles.ImagArr[0]} alt="" />
                    <div className={Styles.ImageBoxChild}>
                        <img className={Styles.imageChildBox} src={singles.ImagArr[1]} alt="" />
                        <img className={Styles.imageChildBox} src={singles.ImagArr[2]} alt="" />
                        <img className={Styles.imageChildBox} src={singles.ImagArr[3]} alt="" />
                        <img className={Styles.imageChildBox} src={singles.ImagArr[4]} alt="" />
                    </div>
                </div>
                <h2>Entire cottage hosted by Daleep</h2>
                <span>{singles?.guests}</span>
                <span>{singles?.bedroom}</span>
                <span>{singles?.bed}</span>
                <span>{singles?.bathroom}</span>
                <div className={Styles.Information}>
                </div>
            </div>
            <br />
            <div className={checkIN && checkOut ? Styles.CartPaymentDone : Styles.CartPayment}>
                <div className={Styles.RatePrice}>
                    <span><strong>₹{singles?.price} </strong> {singles?.partOfDay}</span>  <span><i class="fa-solid fa-star"></i>  <strong>{singles?.rating}</strong> reviews</span>
                </div>
                {
                    toggle ? <>
                    <div className={Styles.cartPaychat}>
                        <button className={Styles.middleNavBtnHid} onClick={handleSearchfilter}>Done</button>
                        <div className={Styles.dat}>
                            <DateRangePicker
                                className={Styles.middleNavBtnToggle}
                                onChange={item => setState([item.selection])}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                                classNames="wrapper"
                            />
                        </div>
                    </div>
                    </> :
                        <>
                            <div className={Styles.checkIn}>
                                <button onClick={handleToggle} className={Styles.checkInBTN}>Check In : {!checkIN ? "27/10/2024" : checkIN}</button>
                                <button onClick={handleToggle} className={Styles.checkInBTN}> Check Out : {!checkOut ? "17/10/2024" : checkOut}</button>
                            </div>
                            <select className={Styles.middleNavBtnHin} onChange={(e) => setGuests(e.target.value)}>
                                <option >Add Guests</option>
                                <option value="2 guests">2 Guests</option>
                                <option value="4 guests">4 Guests</option>
                                <option value="6 guests">6 Guests</option>
                            </select>
                            <br />
                            <button className={Styles.checkInBTNReserve} onClick={handlereserve}>Reserve</button>
                            {
                                days > 1 ? <>
                                    <p>You Won't be Charged yet</p>
                                    <div className={Styles.checkPaymentDetails}>
                                        <div><span>₹{singles.price} x {days} {singles.partOfDay}</span> :-  <span>₹{singles.price * days || 1}</span> </div>
                                        <br />
                                        <div><span>Service Fee</span> :-  <span>₹6,098</span> </div>
                                        <br />
                                        <div><span>Occupancy taxes and fees</span> :-  <span>₹4319</span> </div>
                                        <hr />
                                        <div><span><strong>Total </strong></span> :-  <span>₹{singles.price * days + 6098 + 4319}</span> </div>
                                    </div>
                                </> : ""
                            }
                        </>
                }
            </div>
        </div>
    )
}
export default Description
