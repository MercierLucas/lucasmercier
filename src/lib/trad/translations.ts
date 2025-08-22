import { writable, derived } from "svelte/store"


export const lang = writable("en");

type SubDictonary = {
    [key: string]: string
}

type Dictionary = {
    [key: string]: SubDictonary
}


export let Trads: { [key: string]: Dictionary } = {
    "fr": {
        "homepage":
        {
            "title": "Salut!",
            "subtitle": "Moi c'est Lucas, étudiant au doctorat basé à Montreal",
            "interest": "Centres d'intérêts",
            "phd": "Doctorant",
            "biomecanics": "Biomécanique",
            "gamedev": "Développement de jeux",
            "sports": "Sports (muay thai et natation)",
            "phd_title": "Doctorant: estimation de la pose appliquée à la biomécanique",
            "engineer": "Diplôme d'ingénieur, majeure en traitement des données",
            "internship": "Stage R&D en computer vision",
            "more": "Voir plus",
            "news": "Recents",
            "sara_grant": "05/2024 - Bourse d'excellence pour le développement d'activités de communication scientifique - Bibliothèque ETS",
            "gti411": "09/2024 - GT411 Imagerie numérique - chargé de laboratoire"
            
        },
        "research":
        {
            "sciencitif_communication": "Communications scientifiques"
        },
        "projects":
        {
            "title": "Quelques projets auquels j'ai participé",

            "garage_title": "Organisation d'évènements d'IA pour les élèves ingénieurs",
            "garage_description": "En tant que président du laboratoire d'IA de GarageISEP, une association étudiante d'innovation, nous avons organisé de nombreuses activités pour aider les étudiants à découvrir certaines applications de l'IA. Parmi celles-ci, nous avons organisé un hackathon avec près de 200 participants, des ateliers et des conférences dans notre école.",
        
            "myelin_title": "Segmentation de gaines de myeline",
            "myelin_description": "Projet réalisé dans le cadre de mes cours de recherche de fin d'études. L'objectif était de segmenter les gaines de myéline dans les images CT. Cette segmentation peut ensuite être utilisée pour calculer le rapport R, un paramètre clinique qui permet de détecter les maladies comme la sclérose. Technologie utilisée : Python et Tensorflow",
            
            "domotic_title": "Projet domotique",
            "domotic_description": "Pendant ma 3ème année d'école d'ingénieur, nous avons travaillé sur un projet de domotique où nous avons installé des capteurs (chaleur, luminosité, etc.) sur une carte Arduino. Les résultats étaient ensuite envoyés à un serveur local et les données pouvaient être accédées via une application web. Avec son compte, l'utilisateur pouvait également déclencher des éléments tels que des ventilateurs ou des volets. La logique de la carte a été contrôlée en C et l'application web en HTML, CSS, JS pour le front et JS, PHP pour le backend."
        },
        "experience":
        {
            "work": "Professionnelle",
            "education": "Académique",

            "to": "à",

            "phd_title": "Doctorant - Computer vision",
            "phd_from": "Janvier 2022",
            "phd_to": "Now",
            "phd_description": "Estimation de la pose humaine appliquée à l'analyse des mouvements vidéo pour calculer les paramètres biomécaniques \n Synchronisation temporelle et calibration de caméras RGB-D et infrarouge",

            "isep_title": "Diplôme d'ingénieur - Informatique et analyse de données",
            "isep_from": "2016",
            "isep_to": "2021",
            "isep_description": "Majeure: Data science (2 ans): Technologies des bases de données (SQL/NoSQL), Projet de recherche en traitement d'image (voir 'projects') et Deep learning \n Tronc commun (1 an): Projet domotique: Utilisation d'une carte Arduino pour collecter des données de capteur et intéragir avec via une interface web (voir 'projects' pour plus de détails) \n Classes préparatoires intégrées (2 ans): Mathématiques, physique, traitement du signal et informatique",

            "wales_title": "Echange académique - Ethique et programmation",
            "wales_from": "Janvier 2018",
            "wales_to": "Juin 2018",
            "wales_description": "Cours d'éthique appliquée à l'informatique \n Développement d'application de bureau (C# / .NET) \n Développement d'application mobile (Java / Android)",

            "lio_assist_title": "Assistant de recherche",
            "lio_assist_from": "Février 2021",
            "lio_assist_to": "Actuellement",
            "lio_assist_description": "Assistant développeur pour un outil interne de reconstruction de modèle 3D à partir de scans CT (C++) \n Membre du système qualité: Restructuration du système qualité du laboratoire, notamment 'Développement de logiciel au laboratoire' et formation pour les membres",

            "boxy_title": "Stage R&D en computer vision",
            "boxy_from": "Février 2021",
            "boxy_to": "Août 2021",
            "boxy_description": "Suivi d'objets multiple (MOT), comparaison des performances des algorithmes pour le suivi de personne dans un magasin connecté (Torch / TensorFlow) \n Pre et post traitement pour améliorer les détections et limiter les problèmes d'occlusion",

            "pinewood_title": "Stage: Développeur web",
            "pinewood_from": "Février 2020",
            "pinewood_to": "Juin 2020",
            "pinewood_description": "Front end: ASP / JS / HTML / CSS \n Backend: développement d'API avec C# .NET / Postman and technoligies de BDD VB.NET / SQL",

        },
        "contact":
        {
            "chat": "Vous souhaitez échanger?",
            "connect": "N'hésitez pas à me contacter"
        }
    },
    "en": {
        "homepage":
        {
            "title": "Hi!",
            "subtitle": "I'm Lucas Mercier, a PhD student living in Montreal.",
            "interest": "Center of interest",
            "phd": "Phd student",
            "biomecanics": "biomecanics",
            "gamedev": "Gamedev",
            "sports": "Sports (muay thai and natation)",
            "phd_title": "PhD student, pose estimation applied to biomechanic",
            "engineer": "Engineering diploma (Data science major)",
            "internship": "Computer vision internship",
            "more": "See more",
            "news": "News",
            "sara_grant": "05/2024 - Excellence grant for the development of scientific communication activities - ETS library",
            "gti411": "09/2024 - GT411 Digital imaging - Tutorial supervisor"
        },
        "research":
        {
            "sciencitif_communication": "Scientific communications"
        },
        "projects":
        {
            "title": "Some projects I enjoyed taking part in",

            "garage_title": "Organizing AI related event for engineering students",
            "garage_description": "As the president of the AI lab in GarageISEP, a student innovation association we organized many activities to help student discover some AI application. Among those we has a hackathon with nearly 200 participants, some workshops and talks at our school.",
        
            "myelin_title": "Myelin sheath segmentation",
            "myelin_description": "Project realized as part of my end of study research classes. The aim was to segment myelin sheats in CT scan images. This can then be used to compute the R-ratio, a clinical parameter that can help detect diseases like sclerosis. Tech used: Python with Tensorflow",
            
            "domotic_title": "Domotic project",
            "domotic_description": "During my 3rd year of engineering school we worked on a domotic project where we set up some sensors (heat, luminosity etc.) on an arduino board. The results were then send to a local server and data could be access through a web application. With his account the user could also trigger elements such as fans or shutters. The board logic was controlled in C and the web app in HTML, CSS, JS for the front and JS, PHP for the backend."
        },
        "experience":
        {
            "work": "Professional",
            "education": "Academic",
            
            "to": "to",

            "phd_title": "PhD student - Computer vision",
            "phd_from": "January 2022",
            "phd_to": "Now",
            "phd_description": "Human pose estimation applied to video movement analysis to compute biomecanical parameters \n Infrared and RGB-D cameras spatial and temporal synchonization",

            "isep_title": "Engineering diploma - Computer science",
            "isep_from": "2016",
            "isep_to": "2021",
            "isep_description": "Specialization - Data science (2 years): Databases technologies (SQL/NoSQL), Computer vision research project (see 'projects') and Deep learning \n Core curriculum (1 year): Autonomous home project: Arduino board to gather sensors data and manage them with a web interface (see 'projects' for more) \n Preparatory classes (2 years): Mathematics, physics and signal processing",

            "wales_title": "Academic exchange - Ethics and developpement",
            "wales_from": "January 2018",
            "wales_to": "June 2018",
            "wales_description": "Ethics applied to computer science \n Desktop application developpment (C# / .NET) \n Mobile application developpment (Java / Android)",

            "lio_assist_title": "Research assistant",
            "lio_assist_from": "February 2021",
            "lio_assist_to": "Actuellement",
            "lio_assist_description": "Developpement: Internal tool for 3D model reconstruction from CT scans (C++) \n Member of quality system board: Reorganization of quality system and creation of 'Good practices in software developpment' training for lab members",

            "boxy_title": "R&D computer vision intern",
            "boxy_from": "February 2021",
            "boxy_to": "August 2021",
            "boxy_description": "Multiple object tracking (MOT) algorithm benchmark for person tracking in autonomous store (Torch / TensorFlow) \n Pre and post processing for smoothing tracking detections",

            "pinewood_title": "Web developper intern",
            "pinewood_from": "February 2020",
            "pinewood_to": "Jun 2020",
            "pinewood_description": "Front end: ASP / JS / HTML / CSS \n Backend: API developpement with C# .NET / Postman and database technologies VB.NET / SQL",

        },
        "contact":
        {
            "chat": "Want to have a chat?",
            "connect": "Feel free to connect"
        }
    }
}


export function translate(lang:string, key:string): string
{
    let split = key.split(".");
    let page:string = split[0]; 
    let item:string = split[1];
    if (!(page in Trads[lang]))
    {
        console.warn(page +"is not a valid page")
    }
    // console.log(lang, key)
    // console.log(Trads[lang][page])
    
    let res = Trads[lang][page][item];
    return res;
}

// Inspired from https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=3.33.0
export const t = derived(lang, ($lang) => (key:string) => translate($lang, key));

export default t;



