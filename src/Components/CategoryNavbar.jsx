import React from 'react'
import Styles from "../Styles/Category.module.css"
const CategoryNavbar = ({ filterData }) => {
  return (
    <div className={Styles.Category}>
      <button className={Styles.CategorySection} onClick={() => filterData("omg", null,null)}>
        <img className={Styles.CategorySectionImg} src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" />
        <p>OMG!</p>
      </button>
      <button className={Styles.CategorySection} onClick={() => filterData("National Park", null, null)}>
        <img className={Styles.CategorySectionImg} src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" />
        <p>National Parks</p>
      </button>
      <button className={Styles.CategorySection} onClick={() => filterData("Islands", null, null)}>
        <img className={Styles.CategorySectionImg} src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" />
        <p>Island</p>
      </button>
      <button className={Styles.CategorySection} onClick={() => filterData("Cabins", null, null)}>
        <img className={Styles.CategorySectionImg} src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" />
        <p>Cabins</p>
      </button>
    </div>
  )
}
export default CategoryNavbar
