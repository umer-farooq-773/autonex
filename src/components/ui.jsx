import { motion } from 'framer-motion';
import { Box, Container } from '@mui/material';

export const Reveal = ({ children, delay = 0, ...p }) => (
  <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} {...p}>
    {children}
  </motion.div>
);

export const Float = ({ children, dy = 8, dur = 6, delay = 0, sx }) => (
  <Box component={motion.div} animate={{ y: [0, -dy, 0] }} transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }} sx={sx}>
    {children}
  </Box>
);

export const Section = ({ id, children, sx }) => (
  <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: '72px', ...sx }}>
    <Container maxWidth="lg">{children}</Container>
  </Box>
);

// Route map redrawn as SVG (inspired by the dark route-planning reference)
export const RouteMap = ({ label = 'Route map showing a planned route with three alternatives' }) => (
  <svg viewBox="0 0 400 260" role="img" aria-label={label} style={{ width: '100%', height: '100%', display: 'block' }} preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="260" fill="#082B65" />
    {[...Array(10)].map((_, i) => <line key={'h' + i} x1="0" x2="400" y1={i * 30} y2={i * 30 + 14} stroke="#1B2E4D" strokeWidth="1" />)}
    {[...Array(14)].map((_, i) => <line key={'v' + i} y1="0" y2="260" x1={i * 32} x2={i * 32 + 18} stroke="#16294A" strokeWidth="1" />)}
    {[[120, 70], [235, 170], [330, 130]].map(([x, y], i) => <line key={i} x1={x} y1={y} x2={[170, 190, 290][i]} y2={[105, 140, 88][i]} stroke="#8FA3C4" strokeWidth="1.3" strokeDasharray="2 4" />)}
    <polyline points="55,200 105,232 150,160 200,118 245,126 295,68 335,44" fill="none" stroke="#2EE6A6" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
    {[[170, 105], [190, 140], [290, 88]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="#2EE6A6" stroke="#082B65" strokeWidth="2" />)}
    {[[120, 70, '24 min'], [235, 170, '27 min'], [330, 130, '22 min']].map(([x, y, t]) => (
      <g key={t}><circle cx={x} cy={y} r="6" fill="#F2A33A" /><rect x={x - 4} y={y - 30} width="46" height="20" rx="5" fill="#F2A33A" /><text x={x + 19} y={y - 16} fontSize="10" fontWeight="700" textAnchor="middle" fill="#082B65">{t}</text></g>
    ))}
    <circle cx="55" cy="200" r="7" fill="#fff" />
    <path d="M335 20c-8 0-14 6-14 14 0 10 14 24 14 24s14-14 14-24c0-8-6-14-14-14z" fill="#fff" /><circle cx="335" cy="34" r="5" fill="#082B65" />
  </svg>
);
