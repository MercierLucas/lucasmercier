// ============================================================
// EDUCATION
// ============================================================

export type Degree = {
  institution: string
  degree: string
  field: string
  start: string
  end: string
  items: string[]
  location: string
}

export const education: Degree[] = [
  {
    institution: 'École de technologie supérieure (ÉTS)',
    degree: 'Ph.D. in computer science, supervised by Carlos Vázquez, Neila Mezghani, Thierry Cresson',
    field: 'Medical Imaging',
    start: 'Oct 2021',
    end: 'Present',
    items: [
        'Developed acquisition software to synchronize RGB and MoCap systems; built inpainting pipeline using GANs to remove reflective markers from images; benchmarked and improved SOTA monocular 3D pose estimation models for clinical gait parameters.',
        'Co-supervision of two 6 months internships (camera calibration tool & on edge pose estimation)'
    ],
    location: 'Montréal, Canada',
  },
  {
    institution: 'Institut supérieur d\'électronique de Paris (ISEP)',
    degree: 'Engineering school (equiv. M.Sc.) - Specialization: Data analysis and artificial intelligence (years 2 & 3)',
    field: 'Computer science',
    start: '2016',
    end: '2021',
    items: [
        // 'Specialization: Data analysis and artificial intelligence (years 2 & 3)',
        'End of track research project: Myelin sheath segmentation using UNet for g-ratio estimation in neurological pathology analysis',
    ],
    location: 'Paris, France',
  },
  {
    institution: 'Wrexham University',
    degree: 'Exchange semester - Software and mobile development',
    field: 'Computer science',
    start: 'Jan 2018',
    end: 'May 2018',
    location: 'Wrexham, UK',
    // items: ['Mobile Development & Ethics in New Technologies']
    items: []
  },
]

export type Teaching = {
  course: string
  role: string
  semesters: string
  institution: string
  link: string
  labs: string[]
}


export const teaching: Teaching[] = [
    {
      course: 'GT411 - Digital Imaging',
      role: 'Teaching assistant',
      semesters: 'Fall 2024, Winter 2025, Fall 2025 - 107 hours total',
      institution: 'ETS - Montreal',
      link: 'https://www.etsmtl.ca/etudes/cours/gti411',
      labs: [
        'Mini Lightroom - contrast, curves, color space',
        'Road sign detection - classical CV, no deep learning',
        'Real-time background removal - non-DL segmentation',
      ],
    },
  ];

// ============================================================
// AWARDS & RECOGNITION
// ============================================================

export type Awards = {
  year: number
  title: string
  sub: string
}


export const awards: Awards[] = [
    {
      title: 'Mobility Scholarship at Institut de Biomécanique Humaine Georges Charpak',
      sub: 'Société de Biomécanique (International French-speaking Society of Biomechanics)',
      year: 2025,
    },
    {
      year: 2024,
      title: 'Excellence grant for scientific communication activities',
      sub: 'ÉTS Library',
    },
  ];


  export type Experience = {
  title: string
  organization?: string
  type: 'position' | 'tool' | 'industry'
  start: string
  end: string
  location?: string
  supervisor?: string
  bullets: string[]
  links?: string
  tags?: string[]
}
 
export const experience: Experience[] = [
  {
    title: 'Visiting PhD Student',
    organization: 'Institut de Biomécanique Humaine Georges Charpak',
    type: 'position',
    start: 'Jan 2026',
    end: 'Mar 2026',
    location: 'Paris, France',
    links: 'https://biomecanique.ensam.eu/accueil-biomeca-100770.kjsp',
    bullets: [
        'Finetuned and benchmarked SOTA pose estimation model for gait parameter estimation on pathological populations',
        'Improved these 2D-to-3D lifting models by integrating visual features from RGB frames using multi-scale deformable offset sampling (manuscript in preparation)',
    ],
  },
  {
    title: 'Real-time Markerless Pose Estimation for Movement Coaching',
    organization: 'Flowtion (Co-founder) - Funded by Austria Wirtschaftsservice (55k€)',
    type: 'position',
    start: 'Sept 2024',
    end: 'Present',
    location: 'Remote',
    links: 'https://www.linkedin.com/company/flowtiontech',
    bullets: [
        'Led technical architecture and development as the primary engineer on a two-person engineering team',
        'Built server-side pose estimation pipeline using WebRTC (aiortc) to stream client video for inference with pose models (HRNet, ViTPose etc.)',
    ],
  },
  {
    title: 'Pose Estimation Benchmarking Framework',
    type: 'tool',
    organization: 'Developed for industrial partner (closed-source)',
    location: 'Closed-source',
    start: '2023',
    end: 'Present',
    tags: ['Python', 'PyTorch', 'HDF5', 'YAML'],
    links: 'https://moveck.com',
    bullets: [
        'Unified plugin-oriented framework for training and evaluating SOTA 2D/3D pose estimation models. Reimplemented more than 15 models (HRNet, ViTPose, MotionBERT, MixSTE etc.). Designed for reproducibility and fair cross-model comparison.',
        'Used across multiple PhD projects and an industry collaboration for clinical markerless motion analysis.',
    ],
    },
  {
    title: 'R&D Computer Vision Intern',
    organization: 'Storelift',
    type: 'industry',
    start: 'Feb 2021',
    end: 'Aug 2021',
    links: 'https://storelift.co/',
    location: 'Ivry-sur-Seine, France',
    bullets: [
      'Implemented SOTA multi-object tracking algorithms (MOTNeuralSolver, FairMOT) for person tracking in autonomous retail environments.',
      'Developed a cross-camera object re-identification pipeline using TorchReID.',
      'Built a benchmarking framework to compare algorithm performance across metrics and camera configurations.',
    ],
  },
]


export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'JS & TypeScript', 'SQL / Postgres', 'JAVA', 'C#'],
  },
  {
    category: 'CV & ML',
    items: ['PyTorch', 'TensorFlow', 'OpenCV', 'scikit-learn'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'SLURM & HPC (Compute Canada)'],
  },
]


export type Service = {
  description: string
  organization: string
  year: string
}

export const service: Service[] = [
  {
    description: 'Authored lab software development quality procedures (reproducibility standards, Git workflows, onboarding documentation) as part of ISO certification maintenance',
    organization: 'LIO-ÉTS',
    year: '2023-2025',
  },
]