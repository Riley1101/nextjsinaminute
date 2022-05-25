import { request } from 'graphql-request'

const fetcher = (query, variables) => request(' https://api-ap-northeast-1.graphcms.com/v2/cl3k947d49mfa01xpehmj16wp/master', query, variables)


export default fetcher