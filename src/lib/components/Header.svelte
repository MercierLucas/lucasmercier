<svelte:head>
<title>Lucas Mercier</title>
<meta name="description" content="PhD student at LIO, ÉTS Montréal. Research in computer vision, human pose estimation and biomechanics." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<header>
    <nav>
        <span class="nav-name"><a href="/">Lucas Mercier</a></span>
        <div class="nav-links">
        <a href="/#publications">Publications</a>
        <a href="/#teaching">Teaching</a>
        <a href="/#news">News</a>
        <a href="/#contact">Contact</a>
        <a href="/blog">Blog</a>
        <a href="/projects">Projects</a>
        </div>
    </nav>
</header>


<style>

header {
    --accent: #2D6A4F;
    font-family: 'DM Sans', sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem 2rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
    margin-bottom: 3rem;
  }

  .nav-name {
    font-family: 'DM Serif Display', serif;
    font-size: 17px;
    letter-spacing: 0.01em;
}

.nav-name a{
    text-decoration: none;
    color: inherit;

  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  .nav-links a {
    font-size: 13px;
    color: var(--color-muted, #666);
    text-decoration: none;
    transition: color 0.15s;
  }

  .nav-links a:hover { color: inherit; }
</style>