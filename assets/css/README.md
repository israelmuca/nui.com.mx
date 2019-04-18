## assets/css

- Holds all the precompiled SCSS.
- Requires `node-sass` and `sass-loader`.
- `main.scss` must be referenced in `nuxt.config.js`:

```javascript
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],
```

