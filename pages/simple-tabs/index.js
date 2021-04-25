import React from 'react'
import { Tabs, Tab } from '../simple-tabs/tabs'

export default function Channels() {
  return (
    <main className='main bg-gray-200 text-gray-900 w-full h-screen mx-auto container p-10 '>
      <h2 className='pageName'>Channels</h2>
      <Tabs className=''>
        <Tab label={'recommended'} tabName={'Recommended'}>
          <p>Recommended channels for you</p>
        </Tab>
        <Tab label={'subscribed'} tabName={'Subscribed'}>
          <p>You haven't subscribed to any channel</p>
        </Tab>
        <Tab label={'subscribers'} tabName={'Subscribers'}>
          <h5>Millions of subscribers</h5>
        </Tab>
      </Tabs>
    </main>
  )
}
