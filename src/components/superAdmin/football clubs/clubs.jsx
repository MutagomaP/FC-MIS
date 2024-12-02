import React from 'react'
import MenuBar from '../dashboard/MenuBar'
//import { ClubsDashboard } from './clubsdash'
import GlobalHeader from '../dashboard/GlobalHeader'
import { FootballClubs } from './clubsdash'


const Clubs = () => {
  return (
    <div>
        <GlobalHeader/>
        <div className='flex'>
            <MenuBar/>
            <div className='flex-1'>
                <FootballClubs/>
            </div>
        </div>
    </div>
  )
}

export default Clubs