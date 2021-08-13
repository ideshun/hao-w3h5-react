import React from 'react'
import { SiteModel } from '../../types/siteModel'
import './index.css'


const Item: React.FC<{site: SiteModel}> = (props) => {
  const { site } = props
  return (
    <div className="site-item">
      <div className="site-name">
        <a className="site-url" href={site.url} target={site.target}>
          { site.name }
        </a>
      </div>
      <div className="site-desc">
        { site.desc }
      </div>
    </div>
  )
}

export default Item;
