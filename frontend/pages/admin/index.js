import Link from 'next/link'
import React from 'react'
import Admin from '../../components/auth/Admin'

const styles = {
    wrapper:"flex justify-between",
    left:"flex-col w-1/4 items-center justify-center",
    right:"flex-col w-3/4  items-center justify-center",
    tab:"m-2 p-2 items-center justify-center",
    title:"text-xl font-semibold p-2 m-2"
}
const admin = () => {
  return (
  <Admin>
      <div className={styles.wrapper}>
          <div className={styles.left}>
              <div className={styles.title}>Admin Dashboard</div>
              <div className={styles.tab}>
                  <Link href={'/admin/crud/category-tag'}>
                    <h2>Category</h2>
                  </Link> 
                  <Link href={'/admin/crud/blog'}>
                    <h2>Create blog</h2>
                  </Link> 
              </div>
              
              
          </div>
          <div className={styles.right}>
              <h1>Content</h1>
          </div>
      </div>

  </Admin>
  )
}

export default admin