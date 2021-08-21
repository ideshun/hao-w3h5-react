import React from 'react'
import Item from '../../components/site-item'
import Search from '../../components/search-box'
import { SiteListModel } from '../../types/siteModel'
import websites from "../../config/site";
import styles from './index.module.scss';

const Home: React.FC<{}> = (props) => {
  return (
    <div className={styles.container}>
      <h1>程序员网址导航<small>（hao.w3h5.com）</small></h1>
      <Search />
      {
        websites && websites.map((item: SiteListModel, index: React.Key) => {
          return(
            <div className={styles.cateContainer} key={`Cate-${index}`}>
              <h2 className={styles.cateName}>{item.cate}</h2>
              <div className={styles.cateContent}>
                {item.sites.map((item, index: React.Key) => {
                  return(
                    <Item site={item} key={`Item-${index}`}/>
                  )
                })}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home;
