<script>
    import profile from "$lib/assets/images/profile.png"
    import github from "$lib/assets/images/github.svg"
    import linkedin from "$lib/assets/images/linkedin.svg"
    import plane from "$lib/assets/images/paper-plane.svg"
    import t from "$lib/trad/translations";
</script>


<div class="container">
    <div class="center">
        <img src={profile} alt="Profile" class="profile">
        <p>🇫🇷 Lucas Mercier</p>
        <p>{$t("homepage.phd")} @ <a href="https://www.etsmtl.ca/laboratoires/lio" class="highlight" target="_blank">LIO</a></p>
        <p>🇨🇦 Montreal, Canada</p>
        <div class="icons">
            <div><a href="https://github.com/MercierLucas" target="_blank"><img src={github} alt="" class="icon"></a></div>
            <div><a href="https://www.linkedin.com/in/lucas-mercier-899470171/" target="_blank"><img src={linkedin} alt="" class="icon"></a></div>
            <div><a href="/contact" ><img src={plane} alt="" class="icon"></a></div>
        </div>
    </div>
    <div>
        <h1>{$t("homepage.title")}</h1>
        <p>{$t("homepage.subtitle")}</p>

        <div class="two-columns">
            <div>
                <h3>{$t("homepage.interest")}</h3>
                <ul>
                    <li>Computer vision</li>
                    <li>Human pose estimation</li>
                    <li>{$t("homepage.biomecanics")}</li>
                    <li>{$t("homepage.gamedev")}</li>
                    <li>{$t("homepage.sports")}</li>
                </ul>
            </div>
            <div>
                <h3>Experience</h3>
                <ul>
                    <li>{$t("homepage.phd_title")}</li>
                    <li>{$t("homepage.engineer")}</li>
                    <li>{$t("homepage.internship")}Computer vision internship</li>
                    <li><a href="/experience" class="highlight">{$t("homepage.more")}</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


<style>
    .container
    {
        width: 100%;
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 3fr;
    }

    .center
    {
        text-align: center;
    }

    @media only screen and (max-width: 600px)
    {
        .container
        {
            display: flex;
        }
    }
    .icons
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .icon
    {
        color: var(--color-text);
        fill: var(--color-text);
        width: 1.5rem;
    }
    .profile
    {
        width: 100%;
        border-radius: 50%;
    }

    .two-columns
    {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
</style>