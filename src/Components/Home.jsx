import * as React from 'react';
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
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import cardImage_Sun from '../media/sun.jpg';
import cardImage_Bullseye from '../media/bullseye.jpg';
import cardImage_Shoppingcart from '../media/shoppingcart.jpg';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LottieBackground from './LottieBackground';

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

      {/* Hero Section with Animated Background */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#121218',
        }}
      >
        {/* Animated gradient background */}
        <LottieBackground />

        {/* Hero content */}
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            py: { xs: 8, md: 0 },
          }}
        >
          {/* Main headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
              fontWeight: 600,
              color: '#ffffff',
              mb: 3,
              animation: 'fadeInUp 1s ease-out',
              ...fadeInUpKeyframes,
              lineHeight: 1.2,
            }}
          >
            I build {' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI-powered full-stack applications
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              color: '#9ca3af',
              mb: 5,
              maxWidth: '600px',
              mx: 'auto',
              animation: 'fadeInUp 1s ease-out 0.2s both',
              ...fadeInUpKeyframes,
              lineHeight: 1.7,
            }}
          >

            Crafting seamless digital experiences with modern technologies.
          </Typography>

          {/* Glass-morphism input card */}
          <Paper
            elevation={0}
            sx={{
              background: 'rgba(26, 26, 36, 0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: 3,
              p: { xs: 2, sm: 3 },
              maxWidth: '550px',
              mx: 'auto',
              animation: 'fadeInUp 1s ease-out 0.4s both',
              ...fadeInUpKeyframes,
            }}
          >
            <TextField
              fullWidth
              placeholder="Ask me about my experience..."
              variant="outlined"
              InputProps={{
                readOnly: false,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      component={HashLink}
                      smooth
                      to="#portfolio"
                      edge="end"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        width: 48,
                        height: 48,
                        mr: -1,
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: 'primary.light',
                        },
                      }}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: 'rgba(18, 18, 24, 0.6)',
                  borderRadius: 2,
                  pr: 1.5,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(139, 92, 246, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(139, 92, 246, 0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                  '& input': {
                    color: '#9ca3af',
                    py: { xs: 2.5, md: 2 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  },
                },
              }}
              sx={{ mb: 2 }}
            />

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                startIcon={<DescriptionIcon />}
                href="https://docs.google.com/document/d/1eh-c7nNmuU6CRv5ZS2dTp5LpFqJEkoIwypHCYVvm_4I/edit?usp=sharing"
                target="_blank"
                sx={{
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #9d6eff, #8b5cf6)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 30px rgba(139, 92, 246, 0.4)',
                  },
                }}
              >
                View Resume
              </Button>

              <Button
                variant="outlined"
                startIcon={<CodeIcon />}
                component={HashLink}
                smooth
                to="#portfolio"
                sx={{
                  borderColor: 'rgba(59, 130, 246, 0.5)',
                  color: '#3b82f6',
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#3b82f6',
                    bgcolor: 'rgba(59, 130, 246, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                See Projects
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          bgcolor: '#121218',
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
            background: 'linear-gradient(90deg, transparent, #8b5cf6, #3b82f6, #8b5cf6, transparent)',
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
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
            gutterBottom
          >
            Welcome to My Portfolio
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: '#9ca3af',
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.8,
            }}
            paragraph
          >
            I am a software developer with 6 years professional experience. I am
            searching for a job requiring proficiency as a full stack developer.
          </Typography>
          <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center" />
        </Container>
      </Box>

      {/* Projects Section */}
      <Container sx={{ py: 8, bgcolor: '#121218' }} maxWidth="lg" id="portfolio">
        <Typography
          align="center"
          variant="h3"
          sx={{
            mb: 6,
            background: 'linear-gradient(135deg, #ffffff, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 600,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
          }}
        >
          Software Applications
        </Typography>

        <Stack spacing={8}>
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                bgcolor: 'rgba(26, 26, 36, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(139, 92, 246, 0.1)',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px -5px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                },
              }}
              onClick={() => handleViewProject(project)}
            >
              {/* Image Section */}
              <Box
                sx={{
                  width: { xs: '100%', md: '50%' },
                  minHeight: { xs: 240, md: 400 },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                    '.MuiCard-root:hover &': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />

                {/* Overlay Gradients */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, transparent 60%, rgba(26, 26, 36, 0.9) 100%)',
                    display: { xs: 'none', md: 'block' }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(0deg, rgba(26, 26, 36, 0.95) 0%, transparent 60%)',
                    display: { xs: 'block', md: 'none' }
                  }}
                />
              </Box>

              {/* Content Section */}
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 3, md: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.5rem' },
                    fontWeight: 700,
                    color: '#fff',
                    mb: 3,
                    background: 'linear-gradient(135deg, #fff, #a78bfa)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {project.title}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1.5} mb={5}>
                  {project.tech.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      sx={{
                        bgcolor: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        color: '#a78bfa',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        px: 1,
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Button
                    variant="contained"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProject(project);
                    }}
                    sx={{
                      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #9d6eff, #8b5cf6)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)',
                      }
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
                      color: '#9ca3af',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      p: 1.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#fff',
                        borderColor: '#a78bfa',
                        bgcolor: 'rgba(139, 92, 246, 0.1)'
                      }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
