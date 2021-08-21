import React from 'react'
import Item from '../../components/site-item/index'
import { SiteListModel } from '../../types/siteModel'
import websites from "../../config/site";
import './index.css';

const Home: React.FC<{}> = (props) => {
  return (
    <div className="container">
      <h1>程序员网址导航<small>（hao.w3h5.com）</small></h1>
      {
        websites && websites.map((item: SiteListModel, index: React.Key) => {
          return(
            <div className="cate-container" key={`Cate-${index}`}>
              <h2 className="cate-name">{item.cate}</h2>
              <div className="cate-content">
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
