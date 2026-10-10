export type Publication = {
    title: string;
    authors: string[];
    loc: string;
    year: number;
    badges?: {label: string, type:string}[];
    links?: {label:string, href:string}[];
    image?: string;
    description?: string;
};
  
export const publications:Publication[] = [
{
    title: 'Effect of markers in training dataset for markerless applications in biomechanics',
    authors: ['Mercier L.', 'Cresson T.', 'Gervais S.', 'Mezghani N.', 'Vázquez C.'],
    loc: 'Journal of Biomechanics',
    badges: [{ label: 'Journal', type: 'journal' }],
    links: [
    { label: 'DOI', href: 'https://www.sciencedirect.com/science/article/pii/S002192902600196X' },
    ],
    description: "We formally demonstrate that when pose estimation model are trained with visible markers, the model learns to detect the markers rather than the actual human anatomy. We developed an inpainting pipeline using a GAN-based model (LaMa) to remove markers from test images. By using Class Activation Maps (CAM), we showed that the network's attention focuses heavily on markers when they are visible.",
    
    // In markerless motion analysis applications, human pose estimation models are often trained on marker-based MoCap annotations. In these cases, reflective markers (and rigid bodies) remain visible in the training images. Using computer-vision techniques, we demonstrate that when these markers are visible, the model learns to detect the markers rather than the actual human anatomy. We developed an inpainting pipeline using a GAN-based model (LaMa) to remove markers from test images. By using Class Activation Maps (CAM), we showed that the network's attention focuses heavily on markers when they are visible.",
    year:2026,
    image: '/images/publis/2026_job_markers.png'
},
];

export const abstracts:Publication[] = [
{
    year:2026,
    title: 'Investigating reflective marker impact in a multi-camera markerless motion capture scenario. ',
    authors: ['Mercier L.', 'Gajny L.',  'Cresson T.', 'Mezghani, N.', 'Vázquez, C.'],
    loc: 'Congress of the French society of biomechanics · Montpellier, France 2026',
    badges: [{ label: 'Oral', type: 'oral' }],
    links: [{ label: 'DOI', href: 'https://hal.science/hal-05738111/document' }],
    image: '/images/publis/2026_sb_mercier.png',
    description: "We extend our previous work on marker impact in training pose estimation model to multi-camera markerless motion capture scenario. In that case MPJPE (mm) increases by up to +40% when markers are removed."
},

{
    year:2026,
    title: 'Using knee kinesiography to train markerless pose estimation models for first-line kinematic assessment in knee osteoarthritis',
    authors: ['Mercier L.', 'Marois B.', 'Fuentes A.', 'Cagnin A.', 'Cresson T.', 'Vázquez, C.'],
    loc: 'OARSI World Congress on Osteoarthritis · Palm Beach, USA 2026',
    badges: [{ label: 'Poster', type: 'poster' }],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.joca.2026.01.216' }],
    image: '/images/publis/2026_oarsi.png',
    description: "Off-the-shelf pose estimation models reported limited precision to estimate sagittal knee kinematics. results further suggest that the available models are insufficient to estimate knee OA relevant markers, failing to meet required clinical accuracy. Retraining them on a clinicaly validated system, the KneeKG, significantly improved models' accuracy to achieve within-to-close clinically acceptable threshold. "
},
{
    title: 'Framework for the application of markerless motion capture to biomechanics',
    authors: ['Mercier L.', 'Cresson T.', 'Mezghani N.', 'Vázquez C.'],
    loc: 'Congress of the French society of biomechanics · Marseille, France 2025',
    badges: [{ label: 'Oral', type: 'oral' }],
    year:2025,
    links: [{ label: 'DOI', href: 'https://doi.org/10.46298/mbj.16163' }],
    image: '/images/publis/2025_sb_mercier.png'

},
{
    year:2025,
    title: 'Markerless motion capture accuracy in children with cerebral palsy and typically developing children',
    authors: ['Naaïm A.', 'Rozaire J.', 'Mercier L.', 'Begon M.', 'Cherni Y.'],
    loc: 'Congress of the French society of biomechanics · Marseille, France 2025',
    links: [{ label: 'DOI', href: 'https://doi.org/10.46298/mbj.16215' }],
    badges: [{ label: 'Oral', type: 'oral' }],
    image: '/images/publis/2025_sb_naaim.png'

}
];

export const presentations:Publication[] = [

{
    year:2025,
    title: 'Evaluation of 3D marker-less motion capture precision in upper limb children movement',
    authors: ['Naaim A.', 'Rozaire J.', 'Mercier L.', 'Duprey S.', 'Begon M.'],
    loc: 'International Society of Biomechanics · Stockholm, Sweden · 2025',
    badges: [{ label: 'Oral', type: 'oral' }],
    image: '/images/publis/2025_isb.jpg'

},
{
    year:2025,
    title: 'Étude de l\'impact de la présence des marqueurs pour l\'estimation de la pose humaine',
    authors: ['Mercier L.', 'Cresson T.', 'Mezghani N.', 'Vázquez C.'],
    loc: '92e Congrès de l\'Acfas · Montréal, Canada · 2025',
    links: [{label: 'ORAL', href: 'https://www.acfas.ca/archives/evenements/congres/activites/88454'}],
    badges: [{ label: 'Oral', type: 'oral' }],
    image: '/images/publis/2025_acfas.png'

},
];