import { createTheme } from '@mui/material/styles';

// Autonex brand: Deep Navy, Royal Blue, Golden Yellow, White, Light Blue
export const c = { bg: '#FFFFFF', soft: '#EAF3FF', navy: '#082B65', blue: '#0866D9', teal: '#2F86E8', amber: '#FFC21A', mute: '#44587A', line: '#D3E3F8', green: '#2EE6A6' };
const display = '"Bricolage Grotesque","Instrument Sans",system-ui,sans-serif';

export const theme = createTheme({
  palette: { primary: { main: c.blue }, secondary: { main: c.navy }, warning: { main: c.amber },
    background: { default: c.bg, paper: '#fff' }, text: { primary: c.navy, secondary: c.mute } },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Instrument Sans",system-ui,sans-serif',
    h1: { fontFamily: display, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.02, fontSize: 'clamp(2.5rem,6vw,4.6rem)' },
    h2: { fontFamily: display, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, fontSize: 'clamp(2rem,4vw,3.1rem)' },
    h3: { fontFamily: display, fontWeight: 600, letterSpacing: '-0.02em', fontSize: '1.4rem' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: { styleOverrides: { html: { scrollBehavior: 'smooth' }, body: { overflowX: 'hidden' }, '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 999, padding: '12px 26px', boxShadow: 'none' }, containedPrimary: { '&:hover': { boxShadow: '0 10px 24px -8px rgba(8,102,217,.55)' } } } },
  },
});

export const card = { bgcolor: '#fff', borderRadius: 3, border: `1px solid ${c.line}`, boxShadow: '0 22px 44px -22px rgba(8,43,101,.30)' };
