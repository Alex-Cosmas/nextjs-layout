import React from 'react'
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs'

const Tab = ({ children }) => {
  const { onClick } = useTabState()

  return <button onClick={onClick}>{children}</button>
}

const Panel = ({ children }) => {
  const isActive = usePanelState()

  return isActive ? <p>{children}</p> : null
}

export default () => (
  <Tabs className=''>
    <div className='flex justify-center container mx-auto h-64 bg-gray-900 text-white '>
      <div className='w-full flex '>
        <div className='w-5/12 h-full flex flex-col bg-gray-400 '>
          <Tab>
            <div className='bg-yellow-400'>Default Setting</div>
          </Tab>
          <Tab>
            <div className='bg-yellow-400'>Default Setting</div>
          </Tab>
        </div>

        <Panel>
          <div className='p-8'>Panel 1 Padded</div>
        </Panel>
        <Panel>
          <div className='p-8'>Panel 2 Padded</div>
        </Panel>
      </div>
    </div>
  </Tabs>
)
