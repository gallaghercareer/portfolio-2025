import React from 'react';
import { Box } from '@mui/material';

// Keyframes for blob animations
const blobAnimations = {
  '@keyframes blob1': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
    },
    '25%': {
      transform: 'translate(20px, -30px) scale(1.1)',
    },
    '50%': {
      transform: 'translate(-20px, 20px) scale(0.9)',
    },
    '75%': {
      transform: 'translate(30px, 10px) scale(1.05)',
    },
  },
  '@keyframes blob2': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
    },
    '25%': {
      transform: 'translate(-30px, 20px) scale(1.15)',
    },
    '50%': {
      transform: 'translate(20px, -20px) scale(0.95)',
    },
    '75%': {
      transform: 'translate(-10px, 30px) scale(1.1)',
    },
  },
  '@keyframes blob3': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
    },
    '25%': {
      transform: 'translate(10px, 20px) scale(0.9)',
    },
    '50%': {
      transform: 'translate(-30px, -10px) scale(1.2)',
    },
    '75%': {
      transform: 'translate(20px, -30px) scale(1)',
    },
  },
  '@keyframes pulse': {
    '0%, 100%': {
      opacity: 0.6,
    },
    '50%': {
      opacity: 0.8,
    },
  },
};

const LottieBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        ...blobAnimations,
      }}
    >
      {/* Large purple blob - top right */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '-20%', md: '-10%' },
          right: { xs: '-30%', md: '-10%' },
          width: { xs: '400px', md: '600px', lg: '800px' },
          height: { xs: '400px', md: '600px', lg: '800px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'blob1 20s ease-in-out infinite, pulse 8s ease-in-out infinite',
        }}
      />

      {/* Blue blob - bottom left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '-20%', md: '-15%' },
          left: { xs: '-30%', md: '-15%' },
          width: { xs: '350px', md: '500px', lg: '700px' },
          height: { xs: '350px', md: '500px', lg: '700px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'blob2 25s ease-in-out infinite, pulse 10s ease-in-out infinite',
        }}
      />

      {/* Smaller accent blob - center */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: { xs: '20%', md: '30%' },
          width: { xs: '200px', md: '300px', lg: '400px' },
          height: { xs: '200px', md: '300px', lg: '400px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'blob3 18s ease-in-out infinite',
        }}
      />

      {/* Small purple accent - top left */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: { xs: '150px', md: '200px' },
          height: { xs: '150px', md: '200px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
          filter: 'blur(30px)',
          animation: 'blob2 22s ease-in-out infinite reverse',
        }}
      />

      {/* Gradient overlay for depth */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(18, 18, 24, 0.3) 70%, rgba(18, 18, 24, 0.8) 100%)',
        }}
      />
    </Box>
  );
};

export default LottieBackground;
