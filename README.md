# My company's webpage with a serverless function to mail the contact form
[![Netlify Status](https://api.netlify.com/api/v1/badges/0df48d1d-8f7e-4541-82b9-4e3ce6027d9e/deploy-status)](https://app.netlify.com/sites/nui/deploys)  
> A Nuxt.js static website with animations, transitions and a Contact Form

## Features
- [Nuxt.js](https://nuxtjs.org/) Static Site Generation for easy hosting.
- Netlify's lambda for Contact Form.
- SendGrid mailing for Contact Form.
- Netlify compilation on each commit, with automatic deployment to their CDN (once you finish all the steps).

# Getting started
Check out [this](https://israelmuca.dev/blog/jamstack-and-cd-pipelines-create-a-blog-with-nuxt-netlify-cms-and-netlify/) guide for a more thorough reading on Nuxt and Netlify, or jump straight ahead for more concise instructions.

## What's needed
- Github account
- Netlify account
- Vue/Nuxt understanding

## Fork the repo
Using your Github account, go ahead and [fork the repo](https://github.com/israelmuca/nui.com.mx/fork) or just [clone it](https://github.com/israelmuca/nui.com.mx).

## Get a SendGrid API Key
- Go to [Sign Up](https://signup.sendgrid.com/) and create an account.
- Then, go to the 'API Keys' page inside of 'Settings', and click 'Create API Key'.
- Give your API key a name.
- Select 'Restricted Access' and then choose the 'Mail Send' permission.
- Click 'Create and View'.
- Copy your API Key to `.envexample` and rename te file to `.env`.
  - This will let you do local testing.
  - Change the email that will receive the Contact Form info on `MAIL_TO`.
- Go to the Netlify's project 'Setting' page.
- Choose 'Build & deploy > Environment' and copy the API Key there as well.
  - This will let you work on production.

## Build Setup
Install all the dependencies
``` bash
npm i
```

Now, you can run the code in development with:
``` bash
npm run dev
```
This will serve your page in `localhost:3000` with hot reload.
It will also run a `netlify-lambda` server with the function for local testing.
It works through `@nuxt/proxy` that is configured on `nuxt.config.js`.

Once you're ready to generate your static assets for production:
``` bash
npm run generate
```
This will create a `/dist` folder with the assets. This folder is not committed.  
This is what Netlify will be building on their server, and then uploading the results to their CDN.

### Customizing the site
- Besides what was mentioned, it's just a regular Vue + Nuxt app.
- The code is commented to try to assist anyone in modifying the views.
- Configure Nuxt in: `nuxt.config.js`.
- Check the [Vue.js](https://vuejs.org/v2/guide/) and [Nuxt.js](https://nuxtjs.org/guide/) documentation.

## I'm ready, now what?
If you run `npm run dev` and you like what you see, you're ready to deploy to Netlify!

### Go to Netlify
- Go to [Netlify](https://app.netlify.com/start)
- Choose Github and authorize Netlify, if you haven't already
- Choose this repo
- Leave the settings as they are and click on **Deploy Site**

## You're done!
Now, with every commit you do, Netlify will compile your site with `npm run generate` and deploy it on their CDN.

## Issues
If you have any problems implementing this, please don't hesitate and create a Github Issue or send me a [tweet](https://twitter.com/IsraelMuCa).

## Built with
- [Vue.js](https://vuejs.org/)
- [Vuelidate](https://github.com/vuelidate/vuelidate)
- [Nuxt.js](https://nuxtjs.org/)
- [Netlify functions](https://www.netlify.com/docs/functions/)
- [SendGrid's Mailer](https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail)
- [Bulma](https://www.bulma.io)
- [SASS](https://sass-lang.com/)
- [Hooper's Slider](https://github.com/baianat/hooper)
- [Vue-Particles](https://github.com/creotip/vue-particles)
- ❤️

## Hosted in
- [Netlify](https://www.netlify.com/)
