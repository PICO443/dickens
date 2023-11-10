import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DrawerListItem({icon, label, route}) {
  const navigator = useNavigate()
  const navigateTo = () => {
    navigator(route)
  }
  return (
    <ListItemButton onClick={navigateTo}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
