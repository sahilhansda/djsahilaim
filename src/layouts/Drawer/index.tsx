import { useState } from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Nav from '../NavBar/Nav'

const anchorType = 'right'
const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent)

const Drawer = () => {
  const [state, setState] = useState(false)

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event?.type &&
      ['Tab', 'Shift'].includes((event as React.KeyboardEvent).key)
    ) {
      return
    }

    setState(open)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Nav />
    </Box>
  )

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
      >
        <MenuIcon style={{ fontSize: 40 }} />
      </IconButton>
      <SwipeableDrawer
        anchor={anchorType}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        PaperProps={{
          sx: {
            backgroundColor: '#080924',
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </>
  )
}

export default Drawer
