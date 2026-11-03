import { Box, Typography, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import { c, card } from '../theme';
import { Reveal, Section } from './ui';
import wialon from '../assets/wialon.jpg';
import tenant from '../assets/tenant.jpg';
import analytics from '../assets/analytics.jpg';
import maint from '../assets/maint.jpg';
import waybill from '../assets/waybill.jpg';
import goods from '../assets/goods.jpg';

const rows = [
  { img: wialon, alt: 'Real-time tracking with Wialon: a laptop map showing speed, location and time', t: 'Real-time tracking with Wialon', d: 'Position, speed and status for every vehicle, read from your Wialon account. No new hardware needed.', pts: ['Live location and speed', 'Route monitoring', 'Driver behavior on the road'] },
  { img: tenant, alt: 'Multi-tenant support: Company A, B and C managed on a single platform', t: 'Multi-tenant support', d: 'Give each client or branch its own fleet, users and reports, all on one platform.', pts: ['Separate fleet per tenant', 'Role-based user access', 'Reports for each client'] },
  { img: analytics, alt: 'Analytics and reports: a laptop showing fleet charts, with a list of report types', t: 'Analytics and reports', d: 'Turn fleet activity into numbers you can act on, from daily trips to driver reports.', pts: ['Fleet performance', 'Driver reports', 'Trip history and custom reports'] },
];
const mods = [
  [maint, 'Mechanic checking a truck engine, with maintenance history, reminders and reports listed', 'Vehicle maintenance', 'Keep a service history, get reminders and produce service reports before work becomes overdue.'],
  [waybill, 'A waybill clipboard in front of a truck: create, track and update status', 'Waybill management', 'Create waybills, track each shipment and update its status from dispatch to delivery.'],
  [goods, 'Inspector with a tablet checking stacked goods: inspect, record findings, generate report', 'Goods inspection', 'Inspect goods, record what you find and generate a report for quality and safety.'],
];

export const Features = () => (
  <Section id="features">
    <Reveal><Typography variant="h2" component="h2" sx={{ maxWidth: 720 }}>Everything your operations team checks, in one place.</Typography></Reveal>
    <Box sx={{ mt: { xs: 5, md: 8 }, display: 'grid', gap: { xs: 6, md: 9 } }}>
      {rows.map((r, i) => (
        <Box key={r.t} sx={{ display: 'grid', gap: { xs: 3, md: 6 }, alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: i % 2 ? '1fr 1.55fr' : '1.55fr 1fr' } }}>
          <Reveal style={{ order: 0 }}>
            <Box component="img" src={r.img} alt={r.alt} loading="lazy" sx={{ width: '100%', display: 'block', borderRadius: 4, border: `1px solid ${c.line}`, boxShadow: '0 34px 60px -34px rgba(8,43,101,.5)' }} />
          </Reveal>
          <Reveal delay={0.1} style={{ order: i % 2 ? -1 : 1 }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: '1.7rem' }}>{r.t}</Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 420 }}>{r.d}</Typography>
            <Stack spacing={1.25} sx={{ mt: 3 }}>{r.pts.map((p) => <Stack key={p} direction="row" spacing={1.25} alignItems="center"><CheckCircleIcon sx={{ color: c.blue }} fontSize="small" /><Typography sx={{ fontWeight: 600 }}>{p}</Typography></Stack>)}</Stack>
          </Reveal>
        </Box>
      ))}
    </Box>
    <Box sx={{ mt: { xs: 7, md: 10 }, display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' } }}>
      {mods.map(([img, alt, t, d], i) => (
        <Reveal key={t} delay={i * 0.08}>
          <Box component={motion.div} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} sx={{ ...card, overflow: 'hidden', height: '100%' }}>
            <Box component="img" src={img} alt={alt} loading="lazy" sx={{ width: '100%', aspectRatio: '3 / 2', objectFit: 'cover', display: 'block' }} />
            <Box sx={{ p: 2.5 }}><Typography variant="h3" component="h3" sx={{ fontSize: '1.2rem' }}>{t}</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>{d}</Typography></Box>
          </Box>
        </Reveal>
      ))}
    </Box>
  </Section>
);
