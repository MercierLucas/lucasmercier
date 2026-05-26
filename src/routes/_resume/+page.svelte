<script>
    import { education, teaching, experience, awards, skills, service } from "$lib/resume";
    import { publications, abstracts, presentations } from '$lib/publications';
    import { a } from "$lib/mdsvex.svelte";

    const publicationsHeaders = ['JOURNALS', 'CONFERENCES']
    const confs = abstracts.concat(presentations)
    const pubs = [publications, confs]

</script>


<main>
    <header>
        <h1>Lucas Mercier</h1>
        <p class="tagline">PhD Candidate in Computer Vision applied to 3D Human pose estimation · Seeking Postdoctoral Position from late 2026</p>
        <p>Laboratoire d'Innovation ouverte en technologie de la santé · ÉTS Montréal</p>
        <div class="socials">
          <a class="social-link" href="https://github.com/MercierLucas" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 496 512" aria-hidden="true"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
            GitHub
          </a>
          <a class="social-link" href="https://www.linkedin.com/in/lucas-mercier-899470171/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 448 512" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            LinkedIn
          </a>
          <a class="social-link" href="https://scholar.google.com/citations?user=vIxSajkAAAAJ&hl=fr" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
            Google scholar
          </a>
          <a class="social-link" href="https://www.researchgate.net/profile/Lucas-Mercier" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/></svg>
            ResearchGate
          </a>
        </div>
        <div>Portfolio <a href="https://www.lucasmercier.me/" class="portfolio">https://www.lucasmercier.me/</a></div>
    
    </header>

    <div class="section">
        <div class="section-title">RESEARCH INTEREST</div>
        <div class="section-content">
            Computer vision, 3D Human pose estimation, Gait analysis, Machine learning, Image and video processing, Motion analysis, AI for healthcare
        </div>
    </div>


    <!-- EDUCATION -->
    <div class="section">
        <div class="section-title">EDUCATION</div>
        <div class="section-content">
            {#each education as degree}
                <div class="section-item">
                    <div>
                        <div><span class="bold">{degree.institution}</span> - {degree.location}</div>
                        <ul>
                            <li>{degree.degree}</li>
                            {#each degree.items as item}
                                <li>{item}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class="section-date">
                        {degree.start} - 
                        {#if degree.end == "present"}
                            <b>{degree.end}</b>
                        {:else}
                            {degree.end}
                        {/if}
                        
                    </div>
                </div>
            {/each}
        </div>
    </div>
    

    <div class="section">
        <div class="section-title">EXPERIENCE</div>
        <div class="section-content">
            <!-- <div class="section-item">
                <div><b>Main topics:</b> Computer vision, 3D Human pose estimation, Gait analysis, Machine learning, Image and video processing, Motion analysis, AI for healthcare</div>
            </div> -->
            
            <!-- <p class="pub-header">Related projects</p> -->
            {#each experience as exp}
                <div class="section-item">
                    <div class="experience-item">
                        <div><span class="bold">{exp.title}</span> - <a href={exp.links} class='link'>{exp.organization}</a></div>
                        <ul>
                            <!-- <li>{degree.degree}</li> -->
                            {#each exp.bullets as item}
                                <li>{item}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class="section-date">{exp.start} - {exp.end}</div>
                </div>
            {/each}

        </div>
    </div>


    <!-- TEACHING -->
    <div class="section">
        <div class="section-title">TEACHING EXPERIENCE</div>
        <div class="section-content">
            {#each teaching as course}
                <div>
                    <div><span class="bold">{course.role}</span> - {course.institution}</div>
                    <ul>
                        <li><a href={course.link} class="link">{course.course}</a>   ({course.semesters})</li>
                    </ul>
                </div>
            {/each}
        </div>
    </div>

    <!-- Awards -->
    <div class="section">
        <div class="section-title">GRANTS  &  <br> AWARDS</div>
        <div class="section-content">
            {#each awards as award}
                <div class="award-item">
                    <div><span class="bold">{award.title}</span> - {award.sub}</div>
                    <div class="section-date">{award.year}</div>
                </div>
            {/each}
        </div>
    </div>

    <!-- SKILLS -->
    <div class="section">
        <div class="section-title">SKILLS</div>
        <div class="section-content">
            {#each skills as sk}
                <div>
                    <div><span class="bold">{sk.category}:</span> {sk.items.join(', ')}</div>
                </div>
            {/each}
        </div>
    </div>

    <!-- LAB -->
    <div class="section">
        <div class="section-title">LAB IMPLICATION</div>
        <div class="section-content">
            {#each service as s}
            <div class="award-item">
                <div>{s.description} · <span class="bold">{s.organization}</span></div>
                <div class="section-date">{s.year}</div>
            </div>
            {/each}
        </div>
    </div>

    <!-- PUBLICATIONS -->
    <div class="section no-bt">
        <div class="section-title">PUBLICATIONS</div>
        <div class="section-content">
            {#each publicationsHeaders as header, i}
                <div>
                    <p class="pub-header">{header}</p>
                    {#each pubs[i] as pub}
                        <div class="pub-item">
                            <div>{pub.year}</div>
                            <div>
                                {#each pub.authors as auth}
                                    {#if auth.includes('Mercier')}
                                        <span class="authorship">{auth}, </span>
                                    {:else}
                                        <span>{auth} ,</span>
                                    {/if}
                                {/each}
                                <!-- <span><i>{pub.title}</i></span> -->
                                <span>{pub.title}, </span>
                                <span>{pub.loc}</span>
                                {#each pub.links as link}
                                    <a href={link.href}>[{link.label}]</a> 
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>
            {/each}

        </div>
    </div>


</main>



<style>
    header{
        display: flex;
        flex-direction: column; /* Stacks elements vertically */
        align-items: center;    /* Centers elements horizontally */
        text-align: center;     /* Ensures text inside elements is centered */
        margin-bottom: 1rem;
    }
    header p{
        margin: 0;
    }

    .link
    {
        color: #2D6A4F;
        font-weight: bold;
    }

    .tagline {
        /* font-style: italic; */
        font-size: 0.95em;
        color: var(--color-text-secondary);
        margin-bottom: 0.3rem;
    }

    ul
    {
        margin: 0;
        /* font-size: smaller; */
    }

    .socials {
        text-align: center;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .section-date
    {
        font-size: small;
    }

    .social-link, .portfolio{
        /* color: blue; */
        text-decoration: underline;
    }

    a{
        color: #2D6A4F;
    }


    .social-link svg {
        width: 12px;
        height: 12px;
        fill: currentColor;
        flex-shrink: 0;
        color: black;
    }

    .bold
    {
        font-weight: bold;
    }

    .award-item
    {
        display: grid;
        grid-template-columns: 11fr 1fr;
    }

    .section
    {
        display: grid;
        grid-template-columns: 2fr 10fr;
        padding-bottom: 1rem;
        padding-top: 1rem;
        break-inside: avoid;
        /* margin-bottom: 2rem; */
        border-bottom: 1px solid grey;
    }

    .no-bt
    {
        border: none !important;
    }
    
/* 
    .section-content
    {
        border: 1px solid red;
    } */

    .pub-header
    {
        margin: 0;
        margin-bottom: 1rem;
        text-align: center;
        /* margin-top: 1rem; */
        font-weight: bold;
    }

    .section-content
    {
        margin: 0;
        padding: 0;
    }

    .section-item
    {
        display:grid;
        grid-template-columns: 10fr 2fr;
        gap: 1rem;
        margin-bottom: 1rem;

    }
    .pub-item
    {
        display:grid;
        grid-template-columns: 1fr 11fr;
        margin-bottom: 1rem;
    }
    
    *{
        /* font-family: Georgia ; */
        font-family: 'EB Garamond', serif;
        /* font-family: "Latin Modern Roman 17"; */
    }

    .authorship {
        border-bottom: 1px solid gray;
        /* text-decoration: underline; */
    }

   @media print {
        @page {
            size: A4;
            margin: 10mm 14mm 10mm 14mm;
        }

        *, *::before, *::after {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        :global(html), :global(body) {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            background: white !important;
            
        }

        :global(main) {
            margin: 0 !important;
            padding: 0 !important;
            max-width: 100% !important;
            min-width: 0 !important;
            font-size: 10pt;
        }

        header {
            margin-bottom: 3rem;
        }

        /* h1 {
            font-size: 1.4rem;
            margin: 0.2rem 0;
        } */

        .experience-item
        {
            break-inside: avoid;
        }

        .section {
            margin-bottom: 0.6rem;
            break-inside: auto;
        }

        .section-title {
            /* break-after: avoid; */
            font-size: medium;
        }

        .section-date{
            font-size: x-small;
        }

        /* .section-item,
        .pub-item,
        .award-item {
            break-inside: avoid;
        } */

        .pub-header {
            break-after: avoid;
        }
        }

</style>