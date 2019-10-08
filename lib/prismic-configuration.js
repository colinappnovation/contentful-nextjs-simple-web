import Prismic from 'prismic-javascript'
// In prismic-configuration.js
const apiEndpoint = 'https://appnoexample.cdn.prismic.io/api/v2'
const accessToken = process.env.PRISMIC_TOKEN

export const client = Prismic.client(apiEndpoint, { accessToken })