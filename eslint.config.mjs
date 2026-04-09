import astro from 'eslint-plugin-astro'

export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**', '.idea/**'],
  },
  ...astro.configs['flat/recommended'],
]
