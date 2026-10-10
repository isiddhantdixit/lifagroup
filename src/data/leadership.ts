export interface LeaderProfile {
  id: string;
  name: string;
  designation: string;
  category: string;
  bio: string;
  image?: string;
  email: string;
  phone: string;
  whatsapp?: string; // international format e.g. "917992466601"
  linkedin?: string;
  instagram?: string;
}

export const leadershipData: LeaderProfile[] = [
  {
    id: 'leader-1',
    name: 'P K Singh',
    designation: 'Founder, Director - Aakash Hajipur',
    category: 'Executive Board',
    bio: 'Guiding long-term institutional vision, capital allocation, and executive stewardship across Lifa Group’s enterprises in Bihar.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RzHcPipablTx44MfXErbc8g0dZHLeKYAwlSQKGEPxwpah3OExn-9Nnnl3Qv4KdRaiZTqJlMOo5spY1CxxmSzYlNlQB8bbdugEphCFk-yc86A70OAklQlr_CbUR7lAiJO3Trqxj=s1360-w1360-h1020-rw',
    email: 'pksinghdec26@gmail.com',
    phone: '+91 7992466601',
    whatsapp: '917992466601',
    instagram: 'https://www.instagram.com/pksingh.education/'
  },
  {
    id: 'leader-2',
    name: 'Suman Singh',
    designation: 'Co-Founder, Director - St Mary\'s (P) School',
    category: 'Executive Board',
    bio: 'Overseeing organizational growth, regional institutional partnerships, and operational governance across Hajipur and Sonpur.',
    image: 'https://i.ytimg.com/vi/Xka-RfVj140/maxresdefault.jpg',
    email: 'sumansingh.7feb@gmail.com',
    phone: '+91 8709398797',
    whatsapp: '918709398797'
  },
  {
    id: 'leader-3',
    name: 'Siddhant Dixit',
    designation: 'Member',
    category: 'Member',
    bio: 'A young visionary with new ideas',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHD1tuqw_XwQQ/profile-displayphoto-scale_400_400/B4DaAAZRicHQAo-/0/1786713023268?e=1793232000&v=beta&t=Sx0seIh8PxsnQ1hOVFOzYC_OBjqabApT0qUmkp_ThoY',
    email: 'siddhantdixit@lifagroup.in',
    phone: '+91 7781881912',
    whatsapp: '917781881912',
    linkedin: 'https://www.linkedin.com/in/siddhantdixit07/',
    instagram: 'https://www.instagram.com/sidz.dixit/'
  },

];
