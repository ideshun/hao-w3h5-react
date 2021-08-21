import React, {useRef} from 'react'
import styles from './index.module.scss'

const SearchBox: React.FC = (props) => {
  const searchVal = useRef<HTMLInputElement>(null)
  const goToSearch = () => {
    if (searchVal?.current?.value) {
      window.open(`https://www.baidu.com/s?wd=${searchVal.current.value}`)
    }
  }
  return (
    <div className={styles.searchBox}>
      <div className={styles.searchSelect}>
        <div className={styles.searchSelected}>
          百度
        </div>
        <ul className={styles.searchList}>
          <li>百度</li>
          <li>谷歌</li>
          <li>360</li>
        </ul>
      </div>
      <input type="text" ref={searchVal} className={styles.searchValue} placeholder="百度一下，你就知道！"/>
      <div className={styles.searchButton} onClick={goToSearch}>搜索</div>
    </div>
  )
}

export default SearchBox;
