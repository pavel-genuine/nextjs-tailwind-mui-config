/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    },
    '@mui/icons-material/?(((\\w*)?/?)*)': {
      transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
    }
  }
}
