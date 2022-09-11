import React from 'react'
import { useDispatch } from 'react-redux'
import { Link,  } from 'react-router-dom'
import Styles from "../Styles/ListItem.module.css"
const ListItem = ({ filter }) => {

const dispatch = useDispatch()

  return (
    <div className={Styles.ListItem}>
      {
        filter.map((ele, i) =>
          <Link to={`/description/${ele.id}`} onClick={()=>localStorage.setItem("singles", JSON.stringify(ele))} className={Styles.ListItemDetail} key={i}>
            <div className={Styles.ListItemImg}>
              < img className={Styles.ListItemImgP} src={ele.image} alt="" />
              <p className={Styles.listRate}><i class="fa-solid fa-star"></i> {ele.rating}</p>
              <p className={Styles.listCont}>{ele.title}</p>
              <p className={Styles.listCont}>{ele.description}</p>
              <p className={Styles.listCont}>{ele.startTime} - {ele.endTime}</p>
              <p className={Styles.listCont}>₹{ele.price} {ele.partOfDay}</p>
            </div>
          </Link>
        )
      }
    </div>
  )
}
export default ListItem
