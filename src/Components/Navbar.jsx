import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from "../Styles/Navbar.module.css"
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
const Navbar = ({ filterData }) => {


  const [toggle, setToggle] = useState(false)
  const [guests, setGuests] = useState(null)
  const [state, setState] = useState([
    {
      startDate:  new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const handleToggle = () => {
    setToggle(!toggle)
  }


  const handleSearchfilter = () => {
    setToggle(!toggle)
    let startDates = state[0].startDate.toString()
    let endDates = state[0].endDate.toString()
    let startSearch = startDates.split()[0].split(" ")[2] + " " + startDates.split()[0].split(" ")[1]
    let endSearch = endDates.split()[0].split(" ")[2] + " " + endDates.split()[0].split(" ")[1]
    filterData(startSearch, endSearch, guests)
  }



  return (
    <div className={Styles.Navbar}>
      <div className={Styles.Nav}>
        <div className={Styles.navbarLeft}>
          <p className={Styles.logo}><Link to={"/"}>airbnb</Link></p>
        </div>
        <div className={Styles.middleNavbar}>
          <div className={Styles.middleNav}>
            {
              toggle ?
                <>
                  <div className={Styles.searchBopx}>
                    <input type="text" className={Styles.middleNavBtnHid} placeholder="search destination." />
                    <select className={Styles.middleNavBtnHid} onChange={(e)=>setGuests(e.target.value)}>
                      <option >Add Guests</option>
                      <option value="2 guests">2 Guests</option>
                      <option value="4 guests">4 Guests</option>
                      <option value="6 guests">6 Guests</option>
                    </select>
                    <button className={Styles.middleNavBtnHid} onClick={handleSearchfilter}>Search</button>
                  </div>
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
                </>
                :
                <>
                  <button className={Styles.middleNavBtn} onClick={handleToggle} >Anywhere</button>
                  <button className={Styles.middleNavBtn} onClick={handleToggle} >Any Week</button>
                  <button className={Styles.middleNavBtn} onClick={handleToggle} >Any Guest <i class="fa-solid fa-magnifying-glass"></i></button>
                </>
            }
          </div>
        </div>
        <div className={Styles.rightNavbar}>
          <p>Become a host</p>
          <i class="fa-solid fa-globe"></i>
          <Link to={"/login"} className={Styles.rightNavbarSign}>
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-user"></i>
          </Link>
        </div>

      </div>
 
    </div>
  )
}
export default Navbar
