<main>
  <slot></slot>
  <Footer />
</main>

<script>
  import Footer from '../components/footer.svelte';
</script>

<style lang="scss">
  :root {
    --color-grey-dark: #2f3132;
    --color-orange: #ff6633;
    --color-pink: #ff3366;
    --color-purple: #6633ff;
    --color-blue: #3366ff;
    --color-white: #fff;

    --font-stack: 'Open Sans', sans-serif;
    --font-weight: 300;

    --width-content-max: 928px;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-v16-latin-300.woff') format('woff'),
        url('/fonts/open-sans-v16-latin-300.woff2') format('woff2');
    font-weight: var(--font-weight);
    font-style: normal;
  }

  :global(html) {
    font-size: 1rem;

    @media (min-width: 48em) {
      font-size: 1.25rem;
    }
  } 

  :global(body) {
    background-color: var(--color-dark-grey);
    color: var(--color-white);
    font-family: var(--font-stack);
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
</style>