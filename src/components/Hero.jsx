import { Box, Button, Container, Typography, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import PlaceIcon from '@mui/icons-material/Place';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { c, card } from '../theme';
import { Float, RouteMap } from './ui';
import hero from '../assets/hero.jpg';

const ease = [0.22, 1, 0.36, 1];
const rise = (d = 0) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease } });

const Score = () => (
  <Box sx={{ ...card, p: 1.5, display: 'flex', alignItems: 'center', gap: 1.5, width: { xs: 160, md: 190 } }}>
    <Box sx={{ position: 'relative', width: 54, height: 54, flexShrink: 0 }}>
      <svg viewBox="0 0 36 36" width="54" height="54" aria-hidden="true">
        <circle cx="18" cy="18" r="15" fill="none" stroke={c.line} strokeWidth="4" />
        <circle cx="18" cy="18" r="15" fill="none" stroke={c.teal} strokeWidth="4" strokeLinecap="round" strokeDasharray="87 100" transform="rotate(-90 18 18)" />
      </svg>
      <Typography sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 15 }}>92</Typography>
    </Box>
    <Box><Typography sx={{ fontWeight: 600, fontSize: 13 }}>Driver score</Typography><Typography variant="caption" color="text.secondary">Last 7 days</Typography></Box>
  </Box>
);

export default function Hero() {
  return (
    <Box id="top" sx={{ pt: { xs: 5, md: 9 }, pb: { xs: 6, md: 8 }, background: `radial-gradient(900px 480px at 85% 10%, rgba(8,102,217,.10), transparent 60%), radial-gradient(600px 400px at 0% 90%, rgba(8,102,217,.10), transparent 60%)` }}>
      <Container maxWidth="lg" sx={{ display: 'grid', gap: { xs: 6, md: 4 }, alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' } }}>
        <Box>
          <motion.div {...rise(0)}><Chip label="Built on your Wialon tracking data" size="small" sx={{ bgcolor: '#fff', border: `1px solid ${c.line}`, fontWeight: 600, mb: 3 }} /></motion.div>
          <motion.div {...rise(0.08)}><Typography variant="h1" component="h1">Drive smarter. Manage better.</Typography></motion.div>
          <motion.div {...rise(0.16)}><Typography sx={{ mt: 3, fontSize: { xs: '1.05rem', md: '1.2rem' }, maxWidth: 520 }} color="text.secondary">
            Complete fleet management in your hands: live vehicle tracking, incident alerts and driver behavior reports, with every client's fleet kept separate.
          </Typography></motion.div>
          <motion.div {...rise(0.24)}><Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
            <Button variant="contained" size="large" href="#platform">Explore the platform</Button>
            <Button variant="outlined" size="large" href="#demo" sx={{ borderColor: c.navy, color: c.navy, '&:hover': { borderColor: c.navy, bgcolor: 'rgba(8,43,101,.05)' } }}>Book a demo</Button>
          </Stack></motion.div>
        </Box>

        <Box component={motion.div} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2, ease }}
          sx={{ position: 'relative', height: { xs: 330, sm: 420, md: 500 }, perspective: '1400px' }}>
          <Box sx={{ position: 'absolute', left: 0, right: 0, top: 0, height: '78%', borderRadius: 4, overflow: 'hidden', transform: 'rotateY(-6deg) rotateX(2deg)', boxShadow: '0 40px 70px -30px rgba(8,43,101,.5)', border: '6px solid #fff' }}>
            <Box component="img" src={hero} alt="White Autonex-branded truck on a highway with a world map and location pins behind it" sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '30% 50%', display: 'block' }} />
          </Box>
          <Float sx={{ position: 'absolute', left: 0, bottom: '3%' }} dy={8} dur={6}>
            <Box sx={{ ...card, p: 1.75, width: { xs: 190, md: 230 } }}>
              <Stack direction="row" spacing={1} alignItems="center"><PlaceIcon sx={{ color: c.blue }} fontSize="small" /><Typography sx={{ fontWeight: 600, fontSize: 14 }}>Truck 07</Typography>
                <Chip label="Moving" size="small" sx={{ ml: 'auto', bgcolor: 'rgba(8,102,217,.14)', color: '#0B4FA8', fontWeight: 600, height: 22 }} /></Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>Ring Road · 78 km/h</Typography>
            </Box>
          </Float>
          <Float sx={{ position: 'absolute', right: 0, bottom: '-2%', width: 250, display: { xs: 'none', sm: 'block' } }} dy={10} dur={7.5} delay={0.8}>
            <Box sx={{ ...card, overflow: 'hidden', p: 0 }}>
              <Box sx={{ height: { xs: 100, md: 130 } }}><RouteMap /></Box>
              <Box sx={{ p: 1.25, display: 'flex', justifyContent: 'space-between' }}><Typography sx={{ fontSize: 13, fontWeight: 600 }}>Next stop · ETA 14:05</Typography><Typography variant="caption" color="text.secondary">15.2 km</Typography></Box>
            </Box>
          </Float>
          <Float sx={{ position: 'absolute', left: '38%', bottom: '-5%', display: { xs: 'none', md: 'block' } }} dy={7} dur={6.5} delay={0.4}>
            <Box sx={{ ...card, p: 1.5, display: 'flex', gap: 1.25, width: { xs: 180, md: 220 }, borderLeft: `4px solid ${c.amber}` }}>
              <WarningAmberIcon sx={{ color: '#B7740F' }} />
              <Box><Typography sx={{ fontWeight: 600, fontSize: 13 }}>Harsh braking</Typography><Typography variant="caption" color="text.secondary">Truck 12 · 2 min ago</Typography></Box>
            </Box>
          </Float>
          <Float sx={{ position: 'absolute', right: { xs: 8, md: '3%' }, top: { xs: -14, md: -18 } }} dy={6} dur={5.5} delay={1.2}><Score /></Float>
        </Box>
      </Container>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 2 }}>Hero cards show sample data.</Typography>
    </Box>
  );
}
