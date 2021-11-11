<article>
  <div class="c-work__article">
    <div class="c-work__logo-bg" style="background: url('{bgLogo}') -{pos}px 0, url('{bgLogo}') {pos + Math.round(logoWidth / 2)}px {Math.round(logoHeight / 2)}px;"></div>
    <img src="{logo}" alt="" class="c-work__logo" width="{logoWidth * 1.5}" />
  </div>
  <h1 class="c-work__title">{title}</h1>
  <slot></slot> 
</article>

<script>
  import { onMount } from 'svelte';

  export let bgLogo, logo, logoHeight, logoWidth, title

  let pos = 0;

  onMount(() => {
    document.addEventListener('scroll', () => { pos = window.scrollY }, {passive: true});
  });
</script>

<style lang="scss">
  .c-work__article {
    background-color: var(--color-grey-dark);
    clip-path: polygon(0% 5vh, 100% 0%, 100% calc(100% - 5vh), 0% 100%);
    position: relative;
  }
  .c-work__logo-bg {
    min-height: 150px;
    height: 30vh;
    max-height: 300px;
    opacity: 0.1;
    width: 100%;
    will-change: background;
  }

  .c-work__logo {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .c-work__title {
    font-size: 2rem;
    font-weight: var(--font-weight);
    margin-bottom: 0;
    margin-top: 1em;
  }
</style>