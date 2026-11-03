import { useState } from 'react';
import { AppBar, Toolbar, Container, Box, Button, IconButton, Drawer, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavigationIcon from '@mui/icons-material/Navigation';
import { c } from '../theme';
import mark from '../assets/logo-mark.png';

export const links = [['Features', '#features'], ['Platform', '#platform'], ['Customers', '#customers'], ['Blog', '#blog'], ['FAQ', '#faq']];

export const Logo = ({ light }) => (
  <Box component="a" href="#top" aria-label="Autonex home" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: light ? '#fff' : c.navy }}>
    <Box component="img" src={mark} alt="" sx={{ height: 34, width: 'auto', display: 'block' }} />
    <Typography sx={{ fontFamily: '"Bricolage Grotesque"', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '0.01em', textTransform: 'uppercase' }}>Autonex</Typography>
  </Box>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,.88)', backdropFilter: 'blur(10px)', borderBottom: `1px solid ${c.line}`, color: c.navy }}>
      <Container maxWidth="lg"><Toolbar disableGutters sx={{ minHeight: 68, justifyContent: 'space-between' }}>
        <Logo />
        <Box component="nav" aria-label="Main" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          {links.map(([t, h]) => <Button key={t} href={h} color="inherit" sx={{ fontWeight: 500 }}>{t}</Button>)}
          <Button variant="contained" href="#demo" sx={{ ml: 1 }}>Book a demo</Button>
        </Box>
        <IconButton aria-label="Open menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}><MenuIcon /></IconButton>
      </Toolbar></Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 280, p: 2, bgcolor: c.bg } }}>
        <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ alignSelf: 'flex-end' }}><CloseIcon /></IconButton>
        <List component="nav" aria-label="Mobile">
          {links.map(([t, h]) => <ListItemButton key={t} component="a" href={h} onClick={() => setOpen(false)}><ListItemText primary={t} primaryTypographyProps={{ fontWeight: 600 }} /></ListItemButton>)}
        </List>
        <Button variant="contained" href="#demo" onClick={() => setOpen(false)} sx={{ m: 2 }}>Book a demo</Button>
      </Drawer>
    </AppBar>
  );
}
