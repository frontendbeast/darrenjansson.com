<svelte:head>
	<title>Darren Jansson – Frontend Engineer</title>
	<meta property="og:title" content="Darren Jansson – Frontend Engineer" />
</svelte:head>

<Masthead />

<Section title="I&rsquo;m a frontend engineer based in the UK.">
    <p>With over {new Date().getFullYear() - 2004} years of commercial experience I develop responsive, performant and accessible websites using HTML, CSS and JavaScript.</p>
    <p>I&rsquo;m currently a Senior Frontend Developer at Auto Trader, working mainly on our design system.</p>
    <p><Link class="c-link--home" href="/about">More about</Link></p>
</Section>

<Section title="Skills" color="blue">
    <p>For the past few years I have worked almost exclusively in React, with some Gatsby and Jekyll thrown in as well. I have previously worked extensively in Angular.</p>
    <Lists lists={[['CSS and Sass', 'HTML', 'JS, ES5 and ES6+'], ['Node, Webpack, Gulp', 'React, Angular, Gatsby and Svelte', 'CI and TDD']]} />
    <p>I have integrated with many different content management systems using .NET (Sitecore and Umbraco), PHP (WordPress and Craft CMS) and of course with headless, cloud based systems such as Prismic and Contentful.</p>
    <p><Link class="c-link--home" href="/skills">More skills</Link></p>
</Section>

<Section title="Recent work" color="pink">
  <Work title="Auto Trader" logo="/images/logo-bg-autotrader.svg" logoWidth={156} logoHeight={20} logoSpacingX={20} logoSpacingY={40}>
    <p>I&rsquo;m currently a Senior Frontend Developer at Auto Trader. For the past {getYears(2020)} years I&rsquo;ve been working mainly with our Storybook design system, porting exiting pages over to the new system and creating new pages for marketing campaigns.</p>
  </Work>
  <p><Link class="c-link--home" href="/work">More work</Link></p>
</Section>

<script>
  import Link from '../components/link.svelte';
  import Lists from '../components/lists.svelte';
  import Masthead from '../components/masthead.svelte';
  import Section from '../components/section.svelte';
  import Work from '../components/work.svelte';
  
  import { getYears } from '../components/helpers.svelte';
</script>

<style lang="scss">
  :global(.c-link--home) {
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    margin-top: 1.5rem;
    padding: 0.5rem;
    text-transform: uppercase;

    &:hover {
      color: var(--color-grey-dark) !Important;
    }

    :global(.c-link__effect) {
      background-image: linear-gradient(0deg, var(--color-white), var(--color-white)) !Important;
    }
  }
</style>
