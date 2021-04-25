import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import "react-tabs/style/react-tabs.css";

function vertical() {
  return (
    <div className='App mx-auto container'>
      <h1 className='text-3xl'>Sample</h1>
      <div className='bg-black py-20'>
        <Tabs className='bg-gray-600 flex w-full'>
          <div className='w-5/12 '>
            <TabList className='bg-green-500 h-full px-5 py-10'>
              <Tab className='text-xl focus:outline-none '>
                <p>Title 1</p>
              </Tab>
              <Tab className='text-xl focus:outline-none '>
                <p>Title 2</p>
              </Tab>
            </TabList>
          </div>

          <div className='w-auto'>
            <TabPanel className='py-10 px-6 bg-blue-500 '>
              <div className='panel-content'>
                <h2>Any content 1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </TabPanel>
            <TabPanel className='py-10 px-6 bg-blue-500 '>
              <div className='panel-content'>
                <h2>Any content 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default vertical
