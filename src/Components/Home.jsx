import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Styles from "../Styles/Home.module.css"
import CategoryNavbar from './CategoryNavbar'
import ListItem from './ListItem'
import Navbar from './Navbar'
import data from "../data.json"
const Home = () => {
  const [filter, setFiler] = useState(data)
  const filterData = (categoryWise, anywhere, guests) => {
   
    // filteration
  
    if (anywhere != null && guests != null) {
      return setFiler(data.filter((res) => res.startTime <= categoryWise && res.endTime >= anywhere && res.guests == guests ))
    }
    if(anywhere != null){
      return setFiler(data.filter((res) => res.startTime <= categoryWise && res.endTime >= anywhere  ))

    }

    categoryWise == "omg" ? setFiler(data) : setFiler(data.filter((res) => res.category === categoryWise))
  }
  return (
    <div className={Styles.Home}>
      <Navbar filterData={filterData} ></Navbar>
      <CategoryNavbar filterData={filterData}></CategoryNavbar>
      <ListItem filter={filter}></ListItem>
    </div>
  )
}
export default Home
