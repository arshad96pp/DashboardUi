import React from 'react'
import Header from '../components/Header'
import SideBar from './SIdeBar/SideBar'
import Route from '../routes'
import { useAppContext } from '../context'

function App() {
  const context=useAppContext()
  const {Actions}=context

  const {isSideBar}=Actions


  const closeSidebarHandler=()=>{
      isSideBar.isSideBarClose()
  }
  return (
    <>
    <Header/>
    <div className="app-Layout">
      <SideBar/>
      <div className="layout" onClick={closeSidebarHandler}>
      <Route/>
      </div>
    </div>
    </>
  )
}

export default App