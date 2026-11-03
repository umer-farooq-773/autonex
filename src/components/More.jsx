import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Chip, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { c, card } from '../theme';
import { Reveal, Section } from './ui';
import drivers from '../assets/drivers.jpg';
import maint from '../assets/maint.jpg';
import waybill from '../assets/waybill.jpg';

const steps = [
  ['Connect Wialon', 'Link your Wialon account. Your units and messages appear in Autonex with no new hardware.'],
  ['Create tenants', 'Add each client or branch, assign their vehicles and invite their users with the right role.'],
  ['Set your rules', 'Choose speed limits, geofences and behavior thresholds that should raise an incident.'],
  ['Monitor and report', 'Watch the live map, handle incidents and review driver scores each week.'],
];

export const HowItWorks = () => (
  <Section id="how" sx={{ bgcolor: c.soft }}>
    <Reveal><Typography variant="h2" component="h2" sx={{ maxWidth: 640 }}>From your Wialon account to a live workspace.</Typography></Reveal>
    <Box sx={{ mt: 7, position: 'relative', display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: 'repeat(4,1fr)' } }}>
      <Box component={motion.div} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
        sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 21, left: 22, right: 22, height: 2, bgcolor: c.blue, opacity: 0.25, transformOrigin: 'left' }} />
      {steps.map(([t, d], i) => (
        <Reveal key={t} delay={i * 0.1}>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ width: 44, height: 44, borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 700, color: '#fff', background: `linear-gradient(135deg,${c.blue},${c.teal})`, boxShadow: '0 12px 22px -10px rgba(8,102,217,.7)' }}>{i + 1}</Box>
            <Typography variant="h3" component="h3" sx={{ mt: 2.5, fontSize: '1.2rem' }}>{t}</Typography>
            <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 280 }}>{d}</Typography>
          </Box>
        </Reveal>
      ))}
    </Box>
  </Section>
);

const posts = [
  { img: drivers, alt: 'Driver checking a route on a tablet, with real-time location, route monitoring and driver behavior listed', tag: 'Driver performance', min: 6, t: 'A practical approach to driver coaching', d: 'Use driving events as the start of a constructive conversation. Review patterns in context, agree on a clear improvement goal, and follow up with consistent feedback.' },
  { img: maint, alt: 'Mechanic checking a truck engine, with maintenance history, service reminders and reports listed', tag: 'Preventive maintenance', min: 5, t: 'Build a maintenance routine your fleet can follow', d: 'Bring service history, upcoming reminders, and maintenance reports together. A consistent process helps teams plan work earlier and keep vehicle records organized.' },
  { img: waybill, alt: 'Waybill clipboard in front of a truck: create waybill, track shipment, update status', tag: 'Shipment operations', min: 4, t: 'Keep every waybill moving from dispatch to delivery', d: 'Create a clear record for each shipment, keep its status current, and give your team one shared view of progress from the first handoff to delivery.' },
];

const Post = ({ p }) => (
  <Box component={motion.a} href="#blog" whileHover="h" initial="r" sx={{ ...card, display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%', textDecoration: 'none', color: 'inherit', '&:focus-visible': { outline: `2px solid ${c.blue}`, outlineOffset: 3 } }}>
    <Box sx={{ overflow: 'hidden', bgcolor: c.soft, aspectRatio: '16 / 9' }}>
      <Box component={motion.img} variants={{ r: { scale: 1 }, h: { scale: 1.04 } }} transition={{ duration: 0.5 }} src={p.img} alt={p.alt} loading="lazy" sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
    </Box>
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Stack direction="row" spacing={1} alignItems="center"><Chip label={p.tag} size="small" sx={{ bgcolor: 'rgba(8,102,217,.1)', color: c.blue, fontWeight: 600 }} /><Typography variant="caption" color="text.secondary">{p.min} min read</Typography></Stack>
      <Typography variant="h3" component="h3" sx={{ mt: 1.75, fontSize: '1.3rem', lineHeight: 1.2 }}>{p.t}</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, flex: 1 }}>{p.d}</Typography>
      <Typography sx={{ mt: 2.5, fontWeight: 600, color: c.blue }}>Read article</Typography>
    </Box>
  </Box>
);

export const Blog = () => (
  <Section id="blog" sx={{ bgcolor: c.soft }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 2, flexWrap: 'wrap', width: '100%' }}>
      <Reveal><Typography variant="h2" component="h2">Fleet insights for better operations.</Typography><Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 480 }}>Practical guidance on driver performance, preventive maintenance, and shipment visibility.</Typography></Reveal>
    </Box>
    <Box sx={{ mt: 6, width: '100%', display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' } }}>
      {posts.map((p, i) => <Reveal key={p.t} delay={i * 0.08} style={{ height: '100%' }}><Post p={p} /></Reveal>)}
    </Box>
  </Section>
);

const faqs = [
  ['Do I need to install new tracking hardware?', 'In most cases, no. Autonex is designed to work with vehicle units already connected to your Wialon account, so you can use the tracking data those units provide. The available information depends on your devices and Wialon configuration.'],
  ['What information can I see from Wialon?', 'Autonex brings key fleet information into one workspace, including vehicle location, speed, and status. You can also review route activity and driver events when the relevant data is reported by your tracking units and configured in Wialon.'],
  ['How does multi-tenant access work?', 'You can organize vehicles and users by client, company, or branch. Assign users to the appropriate tenant and role so teams can work with the fleet information relevant to them, while administrators manage the broader setup.'],
  ['Which driver behavior events can be reviewed?', 'Depending on the data your tracking units send, teams can review events such as speeding, harsh braking, harsh acceleration, and harsh cornering. Use the event details and trip context to identify patterns and support clear, constructive driver coaching.'],
  ['How are incidents recorded and followed up?', 'When an event meets a configured rule, it can be recorded with relevant details such as the vehicle, time, and location. Your team can review the incident, take action, and track it through to closure, helping keep follow-up organized.'],
  ['Can Autonex help with maintenance and waybills?', 'Yes. The operations workspace includes vehicle maintenance records and reminders, along with waybill creation and shipment status updates. It also supports goods inspection workflows, helping teams manage routine tasks alongside fleet tracking.'],
];

export const FAQ = () => (
  <Section id="faq">
    <Box sx={{ display: 'grid', gap: { xs: 4, md: 8 }, gridTemplateColumns: { xs: '1fr', md: '0.8fr 1.2fr' } }}>
      <Reveal><Typography variant="h2" component="h2">Frequently asked questions.</Typography><Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 360 }}>Clear answers about connecting Wialon, organizing fleets, and managing day-to-day operations.</Typography></Reveal>
      <Reveal delay={0.1}>
        {faqs.map(([q, a]) => (
          <Accordion key={q} disableGutters elevation={0} square sx={{ bgcolor: 'transparent', borderBottom: `1px solid ${c.line}`, '&::before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0, py: 0.5 }}><Typography sx={{ fontWeight: 600, fontSize: '1.05rem' }}>{q}</Typography></AccordionSummary>
            <AccordionDetails sx={{ px: 0, pt: 0 }}><Typography color="text.secondary">{a}</Typography></AccordionDetails>
          </Accordion>
        ))}
      </Reveal>
    </Box>
  </Section>
);

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ops from '../assets/ops.jpg';
const opsList = ['Register vehicles', 'Register drivers', 'Vehicle maintenance', 'Waybill management', 'Goods inspection', 'Manage goods'];
export const Operations = () => (
  <Section id="operations">
    <Box sx={{ display: 'grid', gap: { xs: 4, md: 8 }, alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
      <Reveal><Box component="img" src={ops} alt="Operations made easy: register vehicle, register driver, vehicle maintenance, waybill management, goods inspection and manage goods" loading="lazy" sx={{ width: '100%', display: 'block', borderRadius: 4, border: `1px solid ${c.line}`, boxShadow: '0 34px 60px -34px rgba(8,43,101,.5)' }} /></Reveal>
      <Reveal delay={0.1}>
        <Typography variant="h2" component="h2">Daily operations, made easy.</Typography>
        <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 440 }}>Set up vehicles and drivers once, then run maintenance, waybills and goods from the same place.</Typography>
        <Box sx={{ mt: 3, display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
          {opsList.map((t) => <Stack key={t} direction="row" spacing={1.25} alignItems="center"><CheckCircleIcon sx={{ color: c.blue }} fontSize="small" /><Typography sx={{ fontWeight: 600 }}>{t}</Typography></Stack>)}
        </Box>
      </Reveal>
    </Box>
  </Section>
);
