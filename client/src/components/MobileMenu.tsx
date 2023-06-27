'use client'

import { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { Info, LayoutDashboard, Loader2, User } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/Button'
import { toast } from './ui/toast'
import { navLinks } from '@/constants';

const MobileMenu: React.FC = () => {
  //Auth
  // const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const theme = useTheme();
  const isMobile: boolean | undefined = useMediaQuery(theme.breakpoints.down('sm'))

  const toggleMenu = () => {
    setOpen(!open)
  };

  return (
    <>
      {isMobile && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
        >
          {open ? <X /> : <Menu />}
        </IconButton>
      )}
      <Drawer
        anchor="left"
        open={open && isMobile}
        onClose={toggleMenu}
        PaperProps={{ style: { width: 300 } }}
      >
        <div>
          <img src="/logo.png" alt="logo" className='w-12 h-12 ml-3' />
        </div>
        <List>
          {navLinks.map((link) => (<ListItem button>
            <ListItemText key={link.id} primary={link.title} className='border-gray-100 border-b pb-3'/>
          </ListItem>))}
        </List>
      </Drawer>
    </>
  )
}

export default MobileMenu
