import { Experience, Project, SkillCategory, ContactLink } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'f3-intern',
    title: 'Technical Intern',
    organization: 'F3 International Resources LLC',
    period: 'May 2025 – Aug 2025',
    description: [
      'Researched and analyzed specifications of emerging technologies to assess feasibility for defense and aerospace applications',
      'Collaborated with international offices and external vendors, providing technical insights to support system integration and management decisions',
      'Established a streamlined system for organizing contracts and pricing data, improving efficiency in project planning'
    ]
  },
  {
    id: 'star-lab',
    title: 'STAR Laboratory Research Assistant',
    organization: 'Spacecraft Technology and Research Lab, UF',
    period: 'Oct 2024 – Present',
    description: [
      'Analyzed the efficacy of a linear-switched multi-mode propulsion satellite to achieve a rendezvous in Low Earth Orbit',
      'Tested MATLAB closed-loop control algorithms to evaluate computational performance and solver accuracy for linear engine switching'
    ],
    technologies: ['MATLAB', 'Control Systems', 'Orbital Mechanics', 'Propulsion']
  },
  {
    id: 'shpe-manager',
    title: 'Corporate Project Manager',
    organization: 'Society of Hispanic Professional Engineers, UF',
    period: 'Sep 2025 – Present',
    description: [
      'Maintain and update UF SHPE\'s Corporate Database, ensuring company information, project highlights, and recruitment data remain current for nationwide members',
      'Implement improvements to enhance structure and usability, collaborating with team members to make it a more effective resource for SHPE chapters'
    ]
  },
  {
    id: 'swamp-launch',
    title: 'Controls R&D Team Member',
    organization: 'Swamp Launch Rocket Team, UF',
    period: 'Aug 2023 – Aug 2025',
    description: [
      'Designed and iterated new mechanical systems using CAD and 3D prototyping to optimize payload functionality and space utilization',
      'Constructed simulations to analyze apogee changes caused by air-brake actuation, enabling accurate altitude control within 1% of a 10k ft target'
    ],
    technologies: ['SolidWorks', 'CAD', 'Simulation', 'Control Systems']
  }
];

export const projects: Project[] = [
  {
    id: 'project-icarus',
    title: 'Project Icarus',
    type: 'Personal Project',
    period: '2025 – Present',
    description: 'Designing and programming a custom PX4-based quadcopter to study flight control, sensor fusion, and autonomous navigation.',
    accomplishments: [
      'Integrated ESCs, power distribution, and Pixhawk flight controller for stable flight and telemetry',
      'Developed C++/Python MAVSDK scripts for autonomous takeoff, hover, and landing',
      'Tuning PID parameters and implementing Kalman filtering to enhance flight stability and altitude estimation'
    ],
    technologies: ['PX4', 'MAVSDK', 'C++', 'Python', 'Kalman Filtering', 'PID Control'],
    githubUrl: 'https://github.com/yourusername/project-icarus', // Update with your actual GitHub URL
    images: [
      { alt: 'Quadcopter Hardware Assembly' },
      { alt: 'Flight Control Software Interface' },
      { alt: 'Test Flight Results' }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'C++', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'MATLAB', level: 80 },
      { name: 'Java', level: 75 }
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'PX4 Autopilot', level: 85 },
      { name: 'MAVSDK', level: 80 },
      { name: 'Git/Linux', level: 80 },
      { name: 'Arduino', level: 75 }
    ]
  },
  {
    category: 'Design & Analysis',
    skills: [
      { name: 'SolidWorks (CSWA)', level: 80 },
      { name: 'Control Systems', level: 85 },
      { name: 'Sensor Fusion', level: 80 }
    ]
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:brandonjacobson0@gmail.com'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/b-jacobson'
  },
  {
    label: 'Phone',
    href: 'tel:+13054098764'
  }
];

export const aboutCards = [
  {
    id: 'education',
    title: 'Education',
    content: [
      'University of Florida',
      'B.S. Aerospace Engineering',
      'Minors in Computer Science and Mathematics',
      'GPA: 3.8 | Expected May 2027'
    ]
  },
  {
    id: 'research',
    title: 'Research Focus',
    content: [
      'Research Assistant at the STAR Laboratory (Spacecraft Technology and Research Laboratory), analyzing multi-mode propulsion systems for satellite rendezvous missions in Low Earth Orbit using MATLAB control algorithms.'
    ]
  },
  {
    id: 'interests',
    title: 'Technical Interests',
    content: [
      'Specializing in flight software, control algorithms, and sensor fusion. Passionate about autonomous systems, PX4 autopilot development, and building hands-on aerospace projects from the ground up.'
    ]
  }
];
