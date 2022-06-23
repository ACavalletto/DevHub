import React from 'react'
import Icon from '../assets/coolicon.svg';
import style from '../style/category.module.css'
import { useState, useEffect } from 'react'

const Category = ({ user, id, URL, category }) => {

  const [information, setInformation] = useState([])

  const getData = async () => {
    const response = await fetch(URL + 'category/' + id + category)
    const data = await response.json();
    const { content } = data;
    console.log(data)
    setInformation(content);
  }
  
  useEffect(() => { getData()}, [])

  const loaded = () => {

    return information.map((element) => (
      
      <div className={style.frame10_container}>
        <div className={style.frame10_frame10}>
          <div className={style.frame10_group32}>

            <div className={style.frame10_group26}>
              <span className={style.frame10_text}>
                <span className={style.frame10_text1}>
                  <span>{element.title}</span>
                  <br></br>
                  <span></span>
                </span>
                <span className={style.frame10_text5}>
                  <h5>{user}</h5></span>
              </span>
              <span className={style.frame10_text6}>
                <span className={style.frame10_text7}>
                  Last Updated:
                </span>
                <span className={style.frame10_text8}> {element.updatedAt}</span>
              </span>
            </div>
            <button className={style.frame10_edit_button}>
              <img src={Icon} alt='Edit Button' className={style.frame10_editedit} />
              <div className={style.content}>
                {element.content}
            </div>
            </button>
            <div className={style.frame10_image}>
              <div className={style.frame10_aspect}></div>
            </div>
          </div>
        </div>
      </div>
    ))
  }
  return information? loaded(): <h1>Loading...</h1>;
}


export default Category