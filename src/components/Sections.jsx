import { useState } from 'react';
import { Box, Typography, Stack, Tabs, Tab, Button, TextField, Container, Alert } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import InsightsIcon from '@mui/icons-material/Insights';
import BuildIcon from '@mui/icons-material/Build';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SpeedIcon from '@mui/icons-material/Speed';
import CableIcon from '@mui/icons-material/Cable';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LockIcon from '@mui/icons-material/Lock';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { c, card } from '../theme';
import { Reveal, Section, RouteMap } from './ui';
import { Logo, links } from './Nav';
import road from '../assets/road.jpg';

export const Trust = () => (
  <Box sx={{ borderTop: `1px solid ${c.line}`, borderBottom: `1px solid ${c.line}`, bgcolor: c.soft }}>
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' } }}>
        {[[CableIcon, 'Wialon integration'], [ApartmentIcon, 'Multi-Company Management'], [LockIcon, 'Role-based access'], [LocalShippingIcon, 'Trucks, buses, vans, bikes']].map(([I, t]) => (
          <Stack key={t} direction="row" spacing={1.25} alignItems="center"><I sx={{ color: c.blue }} /><Typography sx={{ fontWeight: 600, fontSize: 15 }}>{t}</Typography></Stack>
        ))}
      </Box>
    </Container>
  </Box>
);

export const Proof = () => (
  <Section id="customers">
    <Box sx={{ display: 'grid', gap: { xs: 4, md: 8 }, alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
      <Box>
        <Reveal><Box component="img" src={road} alt="Road notices listing an accident ahead, road work and a weather alert beside a warning sign" loading="lazy" sx={{ width: '100%', height: 'auto', borderRadius: 4, display: 'block', border: `1px solid ${c.line}`, boxShadow: '0 30px 60px -34px rgba(8,43,101,.5)' }} /></Reveal>
      </Box>
      <Box>
        <Reveal delay={0.1}>
          <Typography component="blockquote" variant="h2" sx={{ m: 0, fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>
            “We stopped chasing drivers on the phone. Incidents show up with the vehicle, the time and the place.”
          </Typography>
          <Typography sx={{ mt: 3, fontWeight: 600 }}>Operations lead</Typography>
          <Typography color="text.secondary">Regional logistics company · sample testimonial, replace with a real customer</Typography>
        </Reveal>
      </Box>
    </Box>
  </Section>
);

export const CTA = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams(formData).toString();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // Clear the form on success
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Box id="demo" sx={{ px: { xs: 2, md: 4 }, pb: { xs: 8, md: 12 }, scrollMarginTop: '72px' }}>
      <Reveal>
        <Container maxWidth="lg" sx={{ borderRadius: 5, py: { xs: 6, md: 9 }, px: { xs: 3, md: 8 }, color: '#fff', background: `radial-gradient(600px 300px at 90% 0%, rgba(8,102,217,.55), transparent 70%), radial-gradient(500px 300px at 0% 100%, rgba(8,102,217,.4), transparent 70%), ${c.navy}` }}>
          <Typography variant="h2" component="h2" sx={{ maxWidth: 640 }}>See your own fleet in Autonex.</Typography>
          <Typography sx={{ mt: 2, maxWidth: 520, color: 'rgba(255,255,255,.82)' }}>Book a demo and we will walk through live tracking, incidents and driver behavior using your Wialon data.</Typography>
          
          {status === 'success' ? (
            <Alert severity="success" sx={{ mt: 4, maxWidth: 520, borderRadius: 2 }}>
              Thank you! Your demo request has been received. We will contact you shortly.
            </Alert>
          ) : status === 'error' ? (
            <Alert severity="error" sx={{ mt: 4, maxWidth: 520, borderRadius: 2 }}>
              Something went wrong. Please try again or email us directly.
            </Alert>
          ) : (
            <Stack 
              component="form" 
              name="demo-request" 
              onSubmit={handleSubmit}
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={1.5} 
              sx={{ mt: 4, maxWidth: 520 }}
            >
              <input type="hidden" name="form-name" value="demo-request" />
              
              <TextField 
                required 
                type="email" 
                name="email" 
                label="Work email" 
                fullWidth
                disabled={status === 'submitting'}
                sx={{ bgcolor: '#fff', borderRadius: 999, '& fieldset': { border: 0, borderRadius: 999 } }} 
                InputLabelProps={{ sx: { ml: 1 } }} 
                inputProps={{ style: { paddingLeft: 24 } }} 
              />
              <Button 
                type="submit" 
                variant="contained" 
                size="large" 
                disabled={status === 'submitting'}
                sx={{ bgcolor: c.amber, color: c.navy, whiteSpace: 'nowrap', '&:hover': { bgcolor: '#E8AB10' } }}
              >
                {status === 'submitting' ? 'Sending...' : 'Book a demo'}
              </Button>
            </Stack>
          )}
        </Container>
      </Reveal>
    </Box>
  );
};

export const Footer = () => (
  <Box component="footer" sx={{ borderTop: `1px solid ${c.line}`, py: 6 }}>
    <Container maxWidth="lg" sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr 1fr', md: '2fr 1fr 1fr 1fr' } }}>
      <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}><Logo /><Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 300 }}>Fleet tracking, incidents and driver behavior on Wialon.</Typography></Box>
      {[['Product', links.map(([t, h]) => [t, h])], ['Company', [['Book a demo', '#demo'], ['Contact', 'mailto:hello@fleetflow.example']]], ['Legal', [['Privacy', '#'], ['Terms', '#']]]].map(([h, ls]) => (
        <Box key={h} component="nav" aria-label={h}><Typography sx={{ fontWeight: 600, mb: 1.5 }}>{h}</Typography>
          <Stack spacing={1}>{ls.map(([t, u]) => <Box key={t} component="a" href={u} sx={{ color: c.mute, textDecoration: 'none', '&:hover': { color: c.blue }, '&:focus-visible': { outline: `2px solid ${c.blue}`, outlineOffset: 2 } }}>{t}</Box>)}</Stack></Box>
      ))}
    </Container>
    <Container maxWidth="lg"><Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 5 }}>© {new Date().getFullYear()} Autonex. All rights reserved.</Typography></Container>
  </Box>
);