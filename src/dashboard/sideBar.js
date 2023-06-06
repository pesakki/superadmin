import React from 'react'
import { Box,styled } from '@mui/material'
import { ProSidebar, Sidebar, Menu, MenuItem, ProSidebarProvider } from 'react-pro-sidebar'
import { Home, ViewCozyOutlined, AccountTreeOutlined, GridViewOutlined, PersonOutlineOutlined } from '@mui/icons-material'

const MenuItemColor = styled(MenuItem)({
  margin:"10px",
  fontSize:20
})
const RotateIcon = styled(ViewCozyOutlined)({
  transform: "rotate(90deg)",

});

function DrawerWrapper() {
  return (
    <div id='app' style={{backgroundColor:"white", height: "100vh", display: "flex", color: "#283B54", alignItems: "center" }}>
      <Sidebar style={{ height: "100vh", backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <PersonOutlineOutlined fontSize="large" style={{ fontSize: 60, marginTop: "60%" }} />
          <h4 style={{fontSize:25,fontWeight:"normal"}}> Admin</h4>
        </div>
        <div>
        <Menu style={{marginTop:30}}>
          <MenuItemColor icon={<Home/>}>Home </MenuItemColor>
          <MenuItemColor icon={<RotateIcon/>}>ViewCozyOutlined </MenuItemColor>
          <MenuItemColor icon={<AccountTreeOutlined/>}>AccountTreeOutlined </MenuItemColor>
          <MenuItemColor icon={<GridViewOutlined/>}>GridViewOutlined </MenuItemColor>
        </Menu>
        </div>
      </Sidebar>
    </div>
  )
}

function App() {
  return (
    <ProSidebarProvider>
      <DrawerWrapper />
    </ProSidebarProvider>
  )
}

export default App
