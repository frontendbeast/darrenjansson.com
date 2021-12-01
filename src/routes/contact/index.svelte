<svelte:head>
	<title>Contact | Darren Jansson – Frontend Engineer</title>
</svelte:head>

<Section title="Contact" top={true} color="white">
  <p>I'm not actively looking for new opportunities at the moment, but please feel free to get in touch if you would like to work with me. You can <Link href="mailto:darren@darrenjansson.com">email</Link> me or use the contact form below. </p>
  <form class="c-contact__form" method="post" name="Contact" on:submit|preventDefault={submitContactForm} netlify action="/contact/success">
    <div class="c-contact__field">
      <label class="c-contact__label" for="name">Name <span class="c-contact__error" data-required="name" hidden>is required</span></label>
      <input class="c-contact__input" type="text" name="name" bind:value={fields.name.value} data-field="name" required />
    </div>
    <div class="c-contact__field">
      <label class="c-contact__label" for="email">E-mail <span class="c-contact__error" data-required="email" hidden>is required</span></label>
      <input class="c-contact__input" type="email" name="email" bind:value={fields.email.value} data-field="email" required />
    </div>
    <div class="c-contact__field">
      <label class="c-contact__label" for="message">Message <span class="c-contact__error" data-required="message" hidden>is required</span></label>
      <textarea class="c-contact__input c-contact__textarea" name="message" bind:value={fields.message.value} data-field="message" required />
    </div>
    <p class="c-contact__error" data-error-msg hidden>
      There was an error sending your message.
    </p>
    <button class="c-contact__submit" type="submit" style="background: linear-gradient({Math.floor(Math.random() * 359) + 1}deg, var(--color-orange), var(--color-pink), var(--color-purple), var(--color-blue))">Send</button>
  </form>
</Section> 

<script>
  import { onMount } from 'svelte';
  import Link from '../../components/link.svelte';
  import Section from '../../components/section.svelte';

  let fields = {
    name: {
      value: '',
      field: undefined,
      errorRequired: undefined
    }, 
    email: {
      value: '',
      field: undefined,
      errorRequired: undefined
    }, 
    message: {
      value: '',
      field: undefined,
      errorRequired: undefined
    }
  };

  let errorMsg, form; 

  const isEmpty = (value, field) => {
    return (value === '' || value === undefined);
  }

  const toggleErrorMessage = (toggle, field, type) => {
    const className = 'has-error';

    fields[field].errorRequired.hidden = !toggle;
    toggle ? fields[field].field.classList.add(className) : fields[field].field.classList.remove(className);
  }

  const submitContactForm = () => {
    let errors = 0;
    let data = new FormData();

    Object.keys(fields).forEach(field => {
      const error = fields[field].value.replace(/^\s+|\s+$/gm,'') === '';
      toggleErrorMessage(error, field, 'required');
      
      data.set(field, fields[field].value);
      
      errors = (error) ? errors + 1 : errors;
    })

    if(!errors) {
      return fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
        .then(() => {          
          window.location.href = '/contact/success';
        })
        .catch((error) => {
          errorMsg.hidden = false;
        });
    }
  }

  onMount(() => {
    Object.keys(fields).forEach(field => {
      fields[field].field = document.querySelector(`[data-field="${field}"]`);
      fields[field].errorRequired = document.querySelector(`[data-required="${field}"]`);
    })

    errorMsg = document.querySelector(`[data-error-msg]`);
  });

</script>

<style lang="scss">
  h2 {
    font-size: 1.5rem;
    font-weight: var(--font-weight);
    margin-bottom: 0;
    margin-top: 1em;
  }

  .c-contact__error {
    color: var(--color-pink);
  }

  .c-contact__field {
    margin-bottom: 1rem;
  }

  .c-contact__input {
    color: var(--color-grey-dark);
    font-family: var(--font-stack);
    font-size: 1rem;
    background-color: var(--color-white);
    border: 0.125rem solid var(--color-black-trans-mid);
    border-radius: 0;
    box-sizing: border-box;
    padding: 0.33rem;
    transition: border-color 0.5s;
    width: 100%;
    max-width: 25em;

    &:focus {
      border-color: var(--color-blue);
      border-radius: 0;
      outline: none;
    }

    &:global(.has-error) {
      border-color: var(--color-pink);
    }
  }

  .c-contact__label {
    display: block;
    padding-bottom: 0.33rem;
  }

  .c-contact__submit {
    animation: gradient 60s ease infinite;
    background-size: 500% 500% !important;
    border: none;
    border-radius: 0;
    color: var(--color-white);
    font-family: var(--font-stack);
    font-size: 1rem;
    padding: 0.455rem 0.625rem;

    &:focus {
      border-color: var(--color-blue);
      border-radius: 0;
      outline: none;
    }
  }

  .c-contact__textarea {
    height: 4rem;
  }
</style>