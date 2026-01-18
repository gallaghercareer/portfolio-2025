import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import video2 from '../media/video2.mp4';
import cardImage_Sun from '../media/sun.jpg';
import cardImage_Bullseye from '../media/bullseye.jpg';
import cardImage_Shoppingcart from '../media/shoppingcart.jpg';
import { useNavigate } from 'react-router-dom';

// Project data for cleaner card rendering
const projects = [
  {
    title: 'Recipe Maker App',
    image: cardImage_Shoppingcart,
    tech: ['React', 'TypeScript', 'Azure Functions', 'NoSQL'],
    viewUrl: 'https://icy-dune-0439bf00f.6.azurestaticapps.net/',
    githubUrl: 'https://github.com/gallaghercareer/recipemaker-ts',
    isExternal: true,
  },
  {
    title: 'C#/.NET Ticketing App',
    image: cardImage_Bullseye,
    tech: ['ASP.NET MVC', 'Azure SQL', 'Identity'],
    viewUrl: 'https://bugtracker-e2ecatdjfhaqbccz.canadacentral-01.azurewebsites.net/',
    githubUrl: 'https://github.com/gallaghercareer/BugTracker2025',
    isExternal: true,
  },
  {
    title: 'Weather App',
    image: cardImage_Sun,
    tech: ['React', 'Axios', 'MUI v5', 'API'],
    viewUrl: '/weather',
    githubUrl: 'https://github.com/gallaghercareer/portfolio-2022/blob/main/src/Components/Weather.jsx',
    isExternal: false,
  },
];

// Keyframes for animations
const fadeInUpKeyframes = {
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
};

export default function Home() {
  let navigate = useNavigate();
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setAutoPlay(true);
    }
  }, []);

  const handleViewProject = (project) => {
    if (project.isExternal) {
      window.open(project.viewUrl, '_blank');
    } else {
      navigate(project.viewUrl);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box id="home" />

      {/* Video Banner Section */}
      <Box position="relative" sx={{ display: { xs: 'none', lg: 'block' } }}>
        {autoPlay ? (
          <Card sx={{ borderRadius: 0 }}>
            <CardMedia
              component="video"
              autoPlay
              src={video2}
              muted
              loop
              sx={{ display: 'block', zIndex: -1 }}
            />
          </Card>
        ) : (
          <Card sx={{ borderRadius: 0 }}>
            <CardMedia
              component="video"
              src={video2}
              muted
              loop
              sx={{ display: 'block', zIndex: -1 }}
            />
          </Card>
        )}

        {/* Dark gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(10,22,40,0.4), rgba(10,22,40,0.9))',
            zIndex: 1,
          }}
        />

        {/* Hero text */}
        <Box
          sx={{
            position: 'absolute',
            color: 'white',
            top: { lg: 120, xl: 150 },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            textAlign: 'center',
            animation: 'fadeInUp 1s ease-out',
            ...fadeInUpKeyframes,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 400,
              fontSize: { lg: '3.5rem', xl: '4.5rem' },
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            I build wonderful experiences for the
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: { lg: '4rem', xl: '5rem' },
              fontWeight: 700,
              background: 'linear-gradient(90deg, #1760a5, #00d4ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
              mt: 1,
            }}
          >
            web
          </Typography>
        </Box>

        {/* Portfolio button */}
        <Box
          sx={{
            position: 'absolute',
            color: 'white',
            top: { lg: 500, xl: 600 },
            left: '75%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            animation: 'fadeInUp 1s ease-out 0.3s both',
            ...fadeInUpKeyframes,
          }}
        >
          <Button
            href="#portfolio"
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #1760a5, #00d4ff)',
              px: 6,
              py: 2,
              fontSize: '1.5rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 40px rgba(0, 212, 255, 0.4)',
              },
            }}
          >
            View Portfolio
          </Button>
        </Box>
      </Box>

      {/* Mobile Hero - shown on smaller screens */}
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          bgcolor: '#0a1628',
          px: 3,
          py: 8,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 400,
            mb: 2,
          }}
        >
          I build wonderful experiences for the
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            fontWeight: 700,
            background: 'linear-gradient(90deg, #1760a5, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          web
        </Typography>
        <Button
          href="#portfolio"
          variant="contained"
          sx={{
            mt: 4,
            background: 'linear-gradient(90deg, #1760a5, #00d4ff)',
            px: 4,
            py: 1.5,
            fontSize: '1.2rem',
            fontWeight: 600,
            borderRadius: 2,
            textTransform: 'none',
          }}
        >
          View Portfolio
        </Button>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          bgcolor: '#0a1628',
          pt: 10,
          pb: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #1760a5, #00d4ff, #1760a5, transparent)',
          },
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: '#ffffff',
              fontWeight: 600,
              mb: 3,
            }}
            gutterBottom
          >
            Welcome to My Portfolio
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ color: '#94a3b8' }}
            paragraph
          >
            I am a software developer with 6 years professional experience. I am
            searching for a job requiring proficiency as a full stack developer.
          </Typography>
          <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center" />
        </Container>
      </Box>

      {/* Projects Section */}
      <Container sx={{ py: 8, bgcolor: '#0a1628' }} maxWidth="lg" id="portfolio">
        <Typography
          align="center"
          variant="h3"
          sx={{
            mb: 6,
            background: 'linear-gradient(90deg, #ffffff, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 600,
          }}
        >
          Software Applications
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  height: 400,
                  overflow: 'hidden',
                  bgcolor: '#0f2744',
                  border: '1px solid rgba(23, 96, 165, 0.2)',
                  borderRadius: 3,
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 212, 255, 0.15)',
                    border: '1px solid rgba(0, 212, 255, 0.4)',
                  },
                  '&:hover .card-overlay': {
                    opacity: 1,
                  },
                  '&:hover .card-image': {
                    transform: 'scale(1.1)',
                  },
                }}
                onClick={() => handleViewProject(project)}
              >
                {/* Full-bleed image */}
                <CardMedia
                  className="card-image"
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                />

                {/* Always visible title at bottom */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: 'linear-gradient(to top, rgba(10,22,40,0.95), transparent)',
                  }}
                >
                  <Typography variant="h5" fontWeight={600} color="white">
                    {project.title}
                  </Typography>
                </Box>

                {/* Hover overlay with full content */}
                <Box
                  className="card-overlay"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background:
                      'linear-gradient(to top, rgba(10,22,40,0.98) 0%, rgba(10,22,40,0.85) 50%, rgba(10,22,40,0.4) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={600} color="white" mb={2}>
                    {project.title}
                  </Typography>

                  {/* Tech tags as pills */}
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                    {project.tech.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(0, 212, 255, 0.1)',
                          border: '1px solid rgba(0, 212, 255, 0.4)',
                          color: '#00d4ff',
                          fontWeight: 500,
                          mb: 1,
                        }}
                      />
                    ))}
                  </Stack>

                  {/* Action buttons */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                      variant="contained"
                      startIcon={<OpenInNewIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewProject(project);
                      }}
                      sx={{
                        background: 'linear-gradient(90deg, #1760a5, #00d4ff)',
                        textTransform: 'none',
                        fontWeight: 600,
                        px: 3,
                        '&:hover': {
                          background: 'linear-gradient(90deg, #1a6fc2, #00e5ff)',
                        },
                      }}
                    >
                      View Project
                    </Button>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      sx={{
                        color: '#00d4ff',
                        border: '1px solid rgba(0, 212, 255, 0.4)',
                        '&:hover': {
                          bgcolor: 'rgba(0, 212, 255, 0.1)',
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
