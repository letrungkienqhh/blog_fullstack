import React from 'react'
import Category from '../../../components/crud/Category'
import Tag from '../../../components/crud/Tag'

const categorytag = () => {
  return (
    <div className="flex items-center">
        <div className="w-1/2 p-2">
            <Category/>
        </div>
        <div className="w-1/2 p-2">
            <Tag/>
        </div>

    </div>
    
  )
}

export default categorytag