<main>
  <slot></slot>
</main>

<style lang="scss">
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-v16-latin-300.woff') format('woff'),
        url('/fonts/open-sans-v16-latin-300.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  :global(html) {
    font-size: 1rem;

    @media (min-width: 30em) {
      font-size: 1.25rem;
    }
  } 

  :global(body) {
    background-color: #2f3132;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
</style>