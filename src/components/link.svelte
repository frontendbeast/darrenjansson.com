<a class="c-link {klass || ""}" href="{href}" bind:this={link} {...$$restProps} on:click>
  <span class="c-link__text"><slot></slot></span>
  <span class="c-link__effect" style="background-image: linear-gradient({Math.floor(Math.random() * 359) + 1}deg, var(--color-orange), var(--color-pink), var(--color-purple), var(--color-blue));"></span>
</a>

<script>
	let klass = undefined, link;
	export { klass as class };
  export let href; 
</script>

<style lang="scss">
  .c-link {
    color: inherit;
    display: inline-flex;
    overflow: hidden;
    padding: 0 0.33rem;
    position: relative;
    text-decoration: none;

    &:hover {
      color: var(--color-white);

      .c-link__effect {
        top: 0;
      }
    }
  }

    .c-link__effect {
      animation: gradient 60s ease infinite;
      background-size: 500% 500% !important;
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: calc(100% - 2px);
      transition: top 0.25s ease-in-out;
      width: 100%;
      z-index: 0;
    }

    .c-link__text {
      position: relative;
      z-index: 1;
    }
</style>