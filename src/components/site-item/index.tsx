import React from 'react'
import { SiteModel } from '../../types/siteModel'
import styles from './index.module.scss'


const Item: React.FC<{site: SiteModel}> = (props) => {
  const { site } = props
  return (
    <div className={styles.siteItem}>
      <div className={styles.siteName}>
        <a className={styles.siteUrl} href={site.url} target={site.target}>
          { site.name }
        </a>
      </div>
      <div className={styles.siteDesc}>
        { site.desc }
      </div>
    </div>
  )
}

export default Item;
