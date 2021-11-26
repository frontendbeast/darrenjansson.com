<svelte:head>
	<title>Darren Jansson – Frontend Engineer</title>
</svelte:head>

<Masthead />

<Section title="I&rsquo;m a frontend engineer based in the UK.">
    <p>With over {new Date().getFullYear() - 2004} years of commercial experience I develop responsive, performant and accessible websites using HTML, CSS and JavaScript.</p>
    <p>I&rsquo;m currently a Senior Frontend Developer at Auto Trader, working mainly on our design system.</p>
</Section>

<Section title="Skills" color="blue">
    <p>For the past few years I have worked almost exclusively in React, with some Gatsby and Jekyll thrown in as well. I have previously worked extensively in Angular.</p>
    <Lists lists={[['CSS and Sass', 'HTML', 'JS, ES5 and ES6+'], ['Node, Webpack, Gulp', 'React, Angular, Gatsby and Svelte', 'CI and TDD']]} />
    <p>I have integrated with many different content management systems using .NET (Sitecore and Umbraco), PHP (WordPress and Craft CMS) and of course with headless, cloud based systems such as Prismic and Contentful.</p>
</Section>

<Section title="Recent work" color="pink">
  <Work title="Auto Trader" logo="/images/logo-bg-autotrader.svg" logoWidth={156} logoHeight={20} logoSpacingX={20} logoSpacingY={40}>
    <p>I&rsquo;m currently a Senior Frontend Developer at Auto Trader. For the past {getYears(2019)} years I&rsquo;ve been working mainly with our Storybook design system, porting exiting pages over to the new system and creating new pages for marketing campaigns.</p>
  </Work>
  <!-- <Work title="Co-op" logo="/images/logo-coop.svg" logoWidth="58" logoHeight="100">
  </Work> -->
</Section>

<script>
  import Lists from '../components/lists.svelte';
  import Masthead from '../components/masthead.svelte';
  import Section from '../components/section.svelte';
  import Work from '../components/work.svelte';

  const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  const getYears = (year) => {
    const count = new Date().getFullYear() - year;
    return count < 10 ? numbers[count-1] : count;
  } 
</script>
