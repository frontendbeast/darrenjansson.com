<nav 
  class="c-nav"
  class:has-animation={animate}
>
  <ul class="c-nav__list">
    <li class="c-nav__list-item"><Link class="c-nav__link" data-link href="/about">About</Link></li>
    <li class="c-nav__list-item"><Link class="c-nav__link" data-link href="/skills">Skills</Link></li>
    <li class="c-nav__list-item"><Link class="c-nav__link" data-link href="/work">Work</Link></li>
    <li class="c-nav__list-item"><Link class="c-nav__link" data-link href="/contact">Contact</Link></li>
  </ul>
</nav>

<script>
  import { onMount } from 'svelte';

  import Hamburger from './hamburger.svelte';
  import Link from './link.svelte';

  export let animate = false;

  onMount(() => {
    const body = document.querySelector('body');
    const links = document.querySelectorAll('[data-link]');

    const onLinkClick = () => {
      body.classList.remove('nav-open');
    }

    links.forEach(link => {
      link.addEventListener('click', onLinkClick);
    });
  });

</script>

<style lang="scss">
  .c-nav {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    overflow: hidden;
  }

    .c-nav__list {
      list-style: none;
      margin: -105px 0 0 0;
      padding: 0;
      text-align: center;
    }

    .c-nav__list-item {
      opacity: 1;
      position: relative;
      top: 0;
      transition: top 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out;

      :global(.has-animation) & {
        top: -5vh;
        opacity: 0;
      }

      & + & {
        margin-top: 1rem;
      }

      :global(.nav-open) & {
        top: 0;
        opacity: 1;
        transition: top 0.5s ease-in-out 0.35s, opacity 0.5s ease-in-out 0.35s;

        &:nth-of-type(2) {
          transition: top 0.5s ease-in-out 0.45s, opacity 0.5s ease-in-out 0.45s;
        }

        &:nth-of-type(3) {
          transition: top 0.5s ease-in-out 0.55s, opacity 0.5s ease-in-out 0.55s;
        }

        &:nth-of-type(4) {
          transition: top 0.5s ease-in-out 0.65s, opacity 0.5s ease-in-out 0.65s;
        }

        &:nth-of-type(4) {
          transition: top 0.5s ease-in-out 0.75s, opacity 0.5s ease-in-out 0.75s;
        }
      }
    }

    :global(.c-nav__link) {
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
      padding: 0.5rem;
      text-transform: uppercase;
    }
</style>