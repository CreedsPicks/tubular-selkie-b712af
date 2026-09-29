export type FacultyMember = {
  id: string
  name: string
  title: string
  focus: string
  bio: string
  initials: string
}

export const faculty: FacultyMember[] = [
  {
    id: 'castellano',
    name: 'Dr. Naomi Castellano',
    title: 'Chair, Department of Computer Science & Information Systems',
    focus: 'Applied Machine Learning',
    bio: 'Leads the department’s AI research group and previously spent six years building fraud-detection systems in industry before returning to teaching.',
    initials: 'NC',
  },
  {
    id: 'okafor',
    name: 'Dr. Emeka Okafor',
    title: 'Associate Professor, Cybersecurity',
    focus: 'Network Security & Digital Forensics',
    bio: 'Coaches the Cyber Defense competition team and consults for regional healthcare systems on incident response.',
    initials: 'EO',
  },
  {
    id: 'reyes',
    name: 'Prof. Marisol Reyes',
    title: 'Assistant Professor, Software Engineering',
    focus: 'Human-Computer Interaction',
    bio: 'Runs the senior capstone studio and pairs student teams with nonprofit and small-business clients every year.',
    initials: 'MR',
  },
  {
    id: 'lindqvist',
    name: 'Dr. Anders Lindqvist',
    title: 'Professor, Computer Information Systems',
    focus: 'Enterprise Systems & Data Analytics',
    bio: 'Built the Business Systems track and maintains the department’s partnerships with regional employers.',
    initials: 'AL',
  },
  {
    id: 'delacroix',
    name: 'Dr. Simone Delacroix',
    title: 'Associate Professor, Artificial Intelligence',
    focus: 'Natural Language Processing',
    bio: 'Advises the hackathon team and publishes on low-resource language models with undergraduate co-authors.',
    initials: 'SD',
  },
  {
    id: 'whitfield',
    name: 'Prof. Grant Whitfield',
    title: 'Lecturer, Systems & Cloud Computing',
    focus: 'Distributed Systems',
    bio: 'Spent a decade at cloud infrastructure companies before joining Caldwell to teach systems programming.',
    initials: 'GW',
  },
]
