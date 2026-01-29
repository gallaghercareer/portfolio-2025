import React from 'react'
import { AppBar, Toolbar, Button, Stack, Box, ButtonGroup } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { StyledHashButton } from '../Helper/StyledHashScroll'

function Navbar(props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(18, 18, 24, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <StyledHashButton smooth to="/#home">
          <HomeIcon
            sx={{
              fontSize: 40,
              mr: 2,
              mt: 1,
              color: '#8b5cf6',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#a78bfa',
              },
            }}
          />
        </StyledHashButton>

        <Box width="100%">
          <Stack gap={5} flexDirection="row" justifyContent="flex-end">
            <Stack direction="row" spacing={3} alignItems="center">
              <Button
                target="_blank"
                href="https://docs.google.com/document/d/1eh-c7nNmuU6CRv5ZS2dTp5LpFqJEkoIwypHCYVvm_4I/edit?usp=sharing"
                sx={{
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: 1,
                  position: 'relative',
                  padding: '6px 16px',
                  minWidth: 'auto',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                  '&:hover': {
                    background: 'transparent',
                  },
                }}
              >
                RESUME
              </Button>

              <StyledHashButton
                smooth
                to="/#about"
                style={{
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: 1,
                  textDecoration: 'none',
                  padding: '6px 16px',
                  position: 'relative',
                }}
              >
                ABOUT
              </StyledHashButton>
            </Stack>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
