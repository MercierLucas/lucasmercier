export type Publication = {
    title: string;
    authors: string[];
    loc: string;
    badges?: {label: string, type:string}[];
    links?: {label:string, href:string}[];
    image?: string;
};
  
export const publications:Publication[] = [
{
    title: 'Effect of markers in training dataset for markerless applications in biomechanics',
    authors: ['Mercier, L.', 'Cresson, T.', 'Gervais, S.', 'Mezghani, N.', 'Vázquez, C.'],
    loc: 'Preprint · 2025',
    badges: [{ label: 'Preprint', type: 'preprint' }],
    links: [
    { label: 'DOI', href: 'https://dx.doi.org/10.2139/ssrn.6017118' },
    ],
    image: '/images/publis/2026_job_markers.png'

},
];

export const abstracts:Publication[] = [
{
    title: 'Framework for the application of markerless motion capture to biomechanics',
    authors: ['Mercier, L.', 'Cresson, T.', 'Mezghani, N.', 'Vázquez, C.'],
    loc: 'Multidisciplinary Biomechanics Journal · 2025',
    badges: [{ label: 'Oral', type: 'oral' }],
    links: [{ label: 'DOI', href: 'https://doi.org/10.46298/mbj.16163' }],
    image: '/images/publis/2025_sb_mercier.png'

},
{
    title: 'Markerless motion capture accuracy in children with cerebral palsy and typically developing children',
    authors: ['Naaïm, A.', 'Rozaire, J.', 'Mercier, L.', 'Begon, M.', 'Cherni, Y.'],
    loc: 'Multidisciplinary Biomechanics Journal · 2025',
    links: [{ label: 'DOI', href: 'https://doi.org/10.46298/mbj.16215' }],
    badges: [{ label: 'Oral', type: 'oral' }],
    image: '/images/publis/2025_sb_naaim.png'

},
{
    title: 'Using knee kinesiography to train markerless pose estimation models for first-line kinematic assessment in knee osteoarthritis',
    authors: ['Mercier, L.', 'Marois, B.', 'Fuentes, A.', 'Cagnin, A.', 'Cresson, T.', 'Vazquez, C.'],
    loc: 'OARSI World Congress on Osteoarthritis · April 2026',
    badges: [{ label: 'Poster', type: 'poster' }],
    links: [{ label: 'DOI', href: 'https://www.oarsijournal.com/article/S1063-4584(26)00235-9/abstract' }],
    image: '/images/publis/2026_oarsi.png'
},
];

export const presentations:Publication[] = [

{
    title: 'Evaluation of 3D marker-less motion capture precision in upper limb children movement',
    authors: ['Naaim, A.', 'Rozaire, J.', 'Mercier, L.', 'Duprey, S.', 'Begon, M.'],
    loc: 'International Society of Biomechanics · Stockholm, Sweden · 2025',
    badges: [{ label: 'Oral', type: 'oral' }],
    image: '/images/publis/2025_isb.jpg'

},
{
    title: 'Étude de l\'impact de la présence des marqueurs pour l\'estimation de la pose humaine',
    authors: ['Mercier, L.', 'Cresson, T.', 'Mezghani, N.', 'Vázquez, C.'],
    loc: '92e Congrès de l\'Acfas · Montréal, Canada · 2025',
    badges: [{ label: 'Oral', type: 'oral' }],
    image: '/images/publis/2025_acfas.png'

},
];