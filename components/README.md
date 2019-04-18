## components

- Organized on different folders:
  - `complete` has components that don't require anything extra to be shown
  - `layout` has components that are always part of the layout regardless of the page
    - Some are requested from the `/layouts/default` if the content is static
    - `Header.vue` is requested from each `/page` as it has a slot to fill
- The rest of the components are used in several pages and have slots to receive data