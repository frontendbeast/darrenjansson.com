<section class="c-footer">
  <div class="c-footer__inner">
    <p>&copy; {new Date().getFullYear()} Darren Jansson | <a class="c-footer__link" href="https://github.com/frontendbeast/darrenjansson.com">View source code on GitHub</a> | <a class="c-footer__link" href="https://twitter.com/frontendbeast">Follow me on Twitter</a></p>
  </div>
</section>

<style lang="scss">
  .c-footer {
    background-color: var(--color-grey-dark);
    color: #ddd;
    position: relative;

    &:before {
      background-color: var(--color-grey-dark);
      clip-path: polygon(0% 5vh, 100% 0%, 100% 100%, 0% 100%);
      content: '';
      display: block;
      height: 6vh;
      position: absolute;
      top: -5vh;
      width: 100%;
    } 
  }
  
    .c-footer__inner {
      margin-left:  auto;
      margin-right: auto;
      max-width: var(--width-content-max);
      overflow: auto;
      padding: 2vh 1rem;
    }
    
    .c-footer__link {
      color: #ddd;
    }
</style>