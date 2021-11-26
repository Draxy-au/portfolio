import React from 'react';
import styles from './Tag.module.scss';

function Tag({ tagname }) {

  return (
    <div className={styles.pill}>
      <div className={styles.name}>
        {tagname}
      </div>
    </div>
  )
}

export default Tag
