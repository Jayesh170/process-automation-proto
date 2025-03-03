import React from 'react'
import Sidebar from '../compos/sidebar'
import Barchart from '../compos/Barchart'
import Tabs from '../compos/Tabs'

function LandingPage() {
  return (
    <div className='bg-[rgb(20,20,20)] min-h-screen text-white flex flex-2 overflow-y-auto'> 
      <Sidebar className="h-screen overflow-y-auto"/>
      <div className="flex-1 h-screen overflow-y-auto">
        <Barchart/>
        <Tabs/>
      </div>
    </div>
  )
}

export default LandingPage
