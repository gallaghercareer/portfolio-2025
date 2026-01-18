import React from 'react'
import { AppBar, Toolbar, Button, Stack, Box, ButtonGroup } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { StyledHashButton } from '../Helper/StyledHashScroll'

function Navbar(props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(10, 22, 40, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(23, 96, 165, 0.3)',
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
              color: '#00d4ff',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#ffffff',
              },
            }}
          />
        </StyledHashButton>

        <Box width="100%">
          <Stack gap={5} flexDirection="row" justifyContent="flex-end">
            <ButtonGroup sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                target="_blank"
                href="https://docs.google.com/document/d/1eh-c7nNmuU6CRv5ZS2dTp5LpFqJEkoIwypHCYVvm_4I/edit?usp=sharing"
                sx={{
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: 1,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #1760a5, #00d4ff)',
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
            </ButtonGroup>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
