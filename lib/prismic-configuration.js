import Prismic from 'prismic-javascript'
// In prismic-configuration.js
const apiEndpoint = 'https://appnoexample.cdn.prismic.io/api/v2'
const accessToken = 'MC5YWmR5ZGhJQUFDTUFJX3Yy.WO-_vQPvv70G77-977-977-977-9Au-_ve-_vRIpc--_vX8DZyXvv73vv73vv73vv70qEmjvv73vv73vv73vv70t'

export const client = Prismic.client(apiEndpoint, { accessToken })