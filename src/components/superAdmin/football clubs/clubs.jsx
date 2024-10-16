import React from 'react'
import MenuBar from '../dashboard/MenuBar'
import ClubsDashboard from './clubsdash'

const Clubs = () => {
  return (
    <div>
        <div className='flex flex-row'>
            <MenuBar/>
            <ClubsDashboard/>
        </div>
    </div>
  )
}

export default Clubs