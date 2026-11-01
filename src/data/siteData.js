import fertilityLogo from '../assets/logo_1.png'
import postnatalLogo from '../assets/logo_2.png'
import digestiveLogo from '../assets/logo_3.png'
import pregnancyLogo from '../assets/logo_4.png'
import holisticLogo from '../assets/logo_5.png'
import maleFertilityLogo from '../assets/logo_6.png'

export const navLinks = [
  { label: 'About Dr.', href: '#about-dr' },
  { label: 'Programs', href: '#programs' },
  { label: 'Care areas', href: '#care-areas-detail' },
  { label: 'FAQ', href: '#faq' },
]
export const appointmentUrl = 'https://calendar.app.google/Z8Zk8mhcgnEkVxFw6'
export const contactFormEndpoint =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT ||
  'https://formsubmit.co/pankajgupta1468@gmail.com'

export const programs = [
  {
    title: 'Fertility Reset',
    summary: 'A structured 3-month plan to improve natural conception chances.',
    detail: 'The Fertility Reset Program is a three-month, couple-friendly journey for people trying to conceive naturally or preparing for IUI or IVF support. Care begins with an Ayurvedic and modern review of your cycle, digestion, lifestyle, stress, and available reports. The plan then brings together cycle tracking, ovulation support, gut correction, fertility-supportive nutrition, and carefully selected protocols. Each month is reviewed so the plan can respond to your body rather than follow a fixed template.',
    duration: '3 months',
    includes: ['Prakriti, Dosha, Agni, and Ama assessment', 'Beeja, Kshetra, Ritu, and Ambu considerations', 'Cycle and ovulation support', 'Preconception detox and Rasayana planning'],
    icon: 'fertility',
    logo: fertilityLogo,
  },
  {
    title: 'PCOS Reversal',
    summary: 'Cycle regulation, metabolism correction, and lasting hormonal balance.',
    detail: 'A root-cause program for irregular cycles, acne, weight changes, and metabolic imbalance. Treatment adapts as your cycles and reports improve.',
    duration: '4-6 months',
    includes: ['Hormonal and lifestyle assessment', 'PCOS-friendly meal planning', 'Menstrual cycle support', 'Metabolic and stress management'],
    icon: 'cycle',
    logo: holisticLogo,
  },
  {
    title: 'Male Fertility',
    summary: 'Improving semen quality, motility, and reproductive strength.',
    detail: 'A couple-focused program designed to improve sperm health, energy, digestion, sleep, and reproductive resilience through practical, sustainable care.',
    duration: '3-4 months',
    includes: ['Partner health assessment', 'Semen-supportive nutrition', 'Lifestyle and stress correction', 'Repeat report comparison'],
    icon: 'male',
    logo: maleFertilityLogo,
  },
  {
    title: 'Pregnancy Care',
    summary: 'Safe, trimester-wise Ayurvedic support for a healthy pregnancy.',
    detail: 'Gentle trimester-wise care that supports digestion, energy, sleep, fetal development, emotional wellbeing, and a smoother postpartum transition.',
    duration: 'Trimester-based',
    includes: ['Trimester-wise care plan', 'Nausea and digestion support', 'Safe movement and rest guidance', 'Postpartum preparation'],
    icon: 'pregnancy',
    logo: pregnancyLogo,
  },
  {
    title: 'Postnatal & Lactation',
    summary: 'Restoring strength, nourishment, hormonal balance, and breastfeeding confidence.',
    detail: 'A gentle postpartum care program designed around the mother’s recovery, feeding goals, digestion, sleep, emotional wellbeing, and changing energy needs. The plan supports traditional nourishment and practical routines that make recovery sustainable.',
    duration: '6-12 weeks',
    includes: ['Postnatal nourishment plan', 'Lactation and breastfeeding support', 'Hormonal and sleep recovery', 'Gentle strength and digestion care'],
    icon: 'pregnancy',
    logo: postnatalLogo,
  },
  {
    title: 'Digestive & Metabolic Care',
    summary: 'Rebuilding digestion, metabolism, gut balance, and everyday vitality.',
    detail: 'A root-cause program for bloating, IBS, constipation, inflammatory patterns, weight changes, fatigue, and metabolic imbalance. Care brings together digestive correction, realistic meal planning, daily rhythm, and sustainable lifestyle support.',
    duration: '3-4 months',
    includes: ['Digestive and metabolic assessment', 'Personalized nutrition planning', 'Gut, Agni, and Ama support', 'Lifestyle and stress correction'],
    icon: 'cycle',
    logo: digestiveLogo,
  },
]

export const careAreas = [
  {
    title: 'Fertility & preconception',
    description: 'Couple-based assessment, cycle tracking, ovulation support, endometrial protocols, and IUI/IVF support.',
    focus: 'A complete fertility review that looks beyond hormones at digestion, sleep, stress, ovulation, reproductive tissues, and the partner’s health.',
    support: ['Natural conception planning', 'Cycle and ovulation tracking', 'Preconception diet and lifestyle', 'IUI/IVF preparation and support'],
  },
  {
    title: "Women’s hormonal care",
    description: 'Personalized support for PCOS, irregular cycles, PMS, painful periods, thyroid imbalance, and hormonal acne.',
    focus: 'Care is individualized around the pattern behind irregular or painful cycles, helping restore metabolic, digestive, and reproductive balance over time.',
    support: ['PCOS and cycle regulation', 'PMS and painful periods', 'Thyroid and hormonal balance', 'Acne, weight, and stress support'],
  },
  {
    title: 'Pregnancy care',
    description: 'Trimester-wise guidance for nutrition, digestion, energy, sleep, emotional wellbeing, and a healthy pregnancy.',
    focus: 'Gentle, safe Ayurvedic guidance adapted to each trimester, with attention to maternal comfort, fetal nourishment, and everyday wellbeing.',
    support: ['Trimester-wise nutrition', 'Morning sickness and digestion', 'Sleep and anxiety support', 'Birth and postpartum preparation'],
  },
  {
    title: 'Postnatal & lactation',
    description: 'Gentle postpartum recovery support for nourishment, strength, lactation, digestion, and hormonal restoration.',
    focus: 'A supportive recovery plan that respects the physical and emotional changes after birth while rebuilding strength and restoring routine.',
    support: ['Postnatal nourishment', 'Lactation support', 'Hormone and sleep recovery', 'Gut strength and fatigue care'],
  },
  {
    title: 'Digestive & metabolic health',
    description: 'Root-cause care for bloating, IBS, constipation, metabolic imbalance, inflammation, and healthy weight.',
    focus: 'Digestive correction is addressed as the foundation of hormone health, immunity, energy, metabolism, and sustainable fertility care.',
    support: ['IBS and bloating care', 'Constipation management', 'Metabolic and inflammation support', 'Sustainable food and lifestyle planning'],
  },
  {
    title: 'Male reproductive health',
    description: 'Support for sperm quality, motility, count, stress, metabolic health, and reproductive strength.',
    focus: 'Partner-focused treatment considers semen reports, digestion, sleep, stress, medications, heat exposure, and metabolic health.',
    support: ['Semen quality and motility support', 'Strength and reproductive tissue care', 'Stress and sleep correction', 'Nutrition and supplement guidance'],
  },
  {
    title: 'Panchakarma & Shaniika Chikitsa',
    description: 'Classical cleansing and restorative therapies selected according to your constitution and current health needs.',
    focus: 'Therapy selection begins only after suitability, strength, health reports, and your current phase are carefully assessed.',
    support: ['Constitution-based therapy planning', 'External Ayurvedic therapies', 'Pre- and post-therapy care', 'Restoration and long-term maintenance'],
  },
]

export const faqs = [
  {
    question: 'Can Ayurveda support IVF or IUI?',
    answer: 'Yes. Care can be coordinated alongside your fertility specialist to support digestion, cycle health, stress regulation, and recovery. Bring your current reports to the consultation.',
  },
  {
    question: 'Do I need to come as a couple?',
    answer: 'Not always. Individual consultations are available, but when fertility is being addressed together, including your partner can provide a more complete picture.',
  },
  {
    question: 'How long does a fertility program take?',
    answer: 'Program duration varies according to the condition, reports, and treatment response. Structured programs commonly range from three to six months, with regular reviews.',
  },
  {
    question: 'Can I consult for PCOS, IBS, or painful periods?',
    answer: 'Yes. The consultation may include menstrual health, digestion, hormones, lifestyle, nutrition, stress, and relevant report review to create a personalized plan.',
  },
]