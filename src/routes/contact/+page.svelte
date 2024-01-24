<script>
    import linkedin from "$lib/assets/images/linkedin.svg"
    import plane from "$lib/assets/images/paper-plane.svg"

    import t from "$lib/trad/translations";
</script>


<h1>{$t("contact.chat")}</h1>
<h2>{$t("contact.connect")}</h2>
<div>
    <div>
        <img src={linkedin} alt="" class="icon">
        <a href="https://www.linkedin.com/in/lucas-mercier-899470171/" class="highlight" target="_blank">/lucas-mercier-899470171</a>
    </div>
    <div>
        <img src={plane} alt="" class="icon">
        <span class="highlight">lucas.mercier.1 [at] ens.etsmtl.ca</span>
    </div>
</div>

<style>
    .icon
    {
        color: var(--color-text);
        fill: var(--color-text);
        width: 1.5rem;
    }
</style>