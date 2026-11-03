import { useRef, useState } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import PlaceIcon from '@mui/icons-material/Place';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SpeedIcon from '@mui/icons-material/Speed';
import { c, card } from '../theme';
import { Reveal, Section, Float } from './ui';
import dash from '../assets/dash.jpg';
import drivers from '../assets/drivers.jpg';
import road from '../assets/road.jpg';

const items = [
  { id: 'live', Icon: PlaceIcon, t: 'Workspace dashboard', d: 'Vehicles, drivers, waybills and maintenance in one all-in-one view.', head: 'Dashboard', img: dash, alt: 'Autonex workspace dashboard with vehicle and driver totals, a route map and recent activities' },
  { id: 'drivers', Icon: SpeedIcon, t: 'Driver coordination', d: 'Real-time location, route monitoring and behavior for each driver.', head: 'Drivers', img: drivers, alt: 'Driver holding a tablet with a route map, next to a map showing a driver on duty' },
  { id: 'incidents', Icon: ReportProblemIcon, t: 'Road notices', d: 'Accidents, road work and weather alerts for the route ahead.', head: 'Road notices', img: road, alt: 'Road notice list showing an accident ahead, road work and a weather alert beside a warning sign' },
];

export default function Platform() {
  const [k, setK] = useState('live');
  const cur = items.find((i) => i.id === k);
  const still = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const spring = { stiffness: 110, damping: 16 };
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [11, -1]), spring);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-17, -1]), spring);
  const move = (e) => { if (still) return; const r = ref.current.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); };
  const leave = () => { mx.set(0); my.set(0); };

  return (
    <Section id="platform" sx={{ position: 'relative', overflow: 'hidden', background: `radial-gradient(700px 400px at 80% 20%, rgba(8,102,217,.12), transparent 65%), radial-gradient(500px 360px at 5% 80%, rgba(8,102,217,.12), transparent 65%), #EAF3FF` }}>
      <Reveal><Typography variant="h2" component="h2" sx={{ maxWidth: 680 }}>A workspace built for the people running the day.</Typography></Reveal>
      <Box sx={{ mt: { xs: 5, md: 8 }, display: 'grid', gap: { xs: 5, md: 6 }, alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: '0.75fr 1.6fr' } }}>
        <Reveal>
          <Box role="group" aria-label="Platform views" sx={{ display: 'grid', gap: 1 }}>
            {items.map(({ id, Icon, t, d }) => {
              const on = id === k;
              return (
                <Box key={id} component="button" type="button" aria-pressed={on} onClick={() => setK(id)}
                  sx={{ position: 'relative', textAlign: 'left', font: 'inherit', color: c.navy, cursor: 'pointer', border: 0, bgcolor: 'transparent', borderRadius: 3, p: 2, display: 'flex', gap: 2, alignItems: 'flex-start', '&:focus-visible': { outline: `2px solid ${c.blue}`, outlineOffset: 2 }, '&:hover': { bgcolor: on ? undefined : 'rgba(8,43,101,.04)' } }}>
                  {on && <Box component={motion.span} layoutId="pf-active" transition={{ type: 'spring', stiffness: 380, damping: 32 }} sx={{ position: 'absolute', inset: 0, borderRadius: 3, bgcolor: '#fff', border: `1px solid ${c.line}`, boxShadow: '0 16px 32px -18px rgba(8,43,101,.35)' }} />}
                  <Box sx={{ position: 'relative', width: 40, height: 40, flexShrink: 0, borderRadius: 2, display: 'grid', placeItems: 'center', color: on ? '#fff' : c.blue, bgcolor: on ? c.blue : 'rgba(8,102,217,.1)', transition: 'all .25s' }}><Icon fontSize="small" /></Box>
                  <Box sx={{ position: 'relative' }}><Typography sx={{ fontWeight: 600 }}>{t}</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>{d}</Typography></Box>
                </Box>
              );
            })}
          </Box>
        </Reveal>

        <Reveal delay={0.1}>
          <Box ref={ref} onMouseMove={move} onMouseLeave={leave} sx={{ position: 'relative', perspective: '1600px', py: { xs: 1, md: 4 }, px: { xs: 0, md: 2 } }}>
            <Box sx={{ position: 'absolute', inset: '10% 2% 2% 12%', borderRadius: 6, background: `linear-gradient(135deg,${c.blue},${c.teal})`, opacity: 0.22, filter: 'blur(36px)' }} />
            <motion.div style={{ rotateX: still ? 0 : rx, rotateY: still ? 0 : ry, transformStyle: 'preserve-3d', position: 'relative' }}>
              <Box sx={{ bgcolor: '#082B65', color: '#fff', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)', boxShadow: '0 50px 80px -36px rgba(8,43,101,.7), 0 0 0 6px rgba(255,255,255,.7)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1.25, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                  {['#FF6B6B', c.amber, c.green].map((x) => <Box key={x} sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: x }} />)}
                  <Typography sx={{ ml: 1, fontSize: 13, fontWeight: 600, opacity: 0.9 }}>Autonex · {cur.head}</Typography>
                  <Chip label="Live" size="small" sx={{ ml: 'auto', height: 22, fontWeight: 600, bgcolor: 'rgba(255,194,26,.18)', color: c.amber }} />
                </Box>
                <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: c.soft }}>
                  <AnimatePresence mode="wait">
                    <motion.img key={k} src={cur.img} alt={cur.alt} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  </AnimatePresence>
                </Box>
              </Box>
              <Float sx={{ position: 'absolute', right: { md: -28 }, top: { md: -34 }, display: { xs: 'none', md: 'block' }, z: 110, transform: 'translateZ(110px)' }} dy={9} dur={6}>
                <Box sx={{ ...card, p: 2, width: 190 }}>
                  <Typography variant="caption" color="text.secondary">Active drivers</Typography>
                  <Typography sx={{ fontFamily: '"Bricolage Grotesque"', fontWeight: 700, fontSize: '2.1rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>186</Typography>
                  <Box sx={{ mt: 1, height: 6, borderRadius: 3, bgcolor: c.line }}><Box sx={{ width: '82%', height: '100%', borderRadius: 3, background: `linear-gradient(90deg,${c.blue},${c.teal})` }} /></Box>
                </Box>
              </Float>
              <Float sx={{ position: 'absolute', left: { md: -34 }, bottom: { md: 70 }, display: { xs: 'none', md: 'block' }, transform: 'translateZ(70px)' }} dy={8} dur={7.5} delay={0.7}>
                <Box sx={{ ...card, p: 1.5, display: 'flex', gap: 1.25, alignItems: 'center', borderLeft: `4px solid ${c.amber}`, width: 215 }}>
                  <ReportProblemIcon sx={{ color: '#B7740F' }} />
                  <Box><Typography sx={{ fontSize: 13, fontWeight: 600 }}>Weather alert</Typography><Typography variant="caption" color="text.secondary">Heavy rain · 10 km ahead</Typography></Box>
                </Box>
              </Float>
            </motion.div>
          </Box>
          {/* <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5, textAlign: 'center' }}>Illustrative screens.</Typography> */}
        </Reveal>
      </Box>
    </Section>
  );
}
