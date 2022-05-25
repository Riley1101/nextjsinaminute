import { gql } from 'graphql-request'
import client from '@/queries/client'

const GETPOSTS = gql`query MyQuery {
  posts {
    id
    title
    excerpt
    coverImage {
      id
      url
    }
    content {
      markdown
    }
  }
}
`;

const getPosts = async () => {
    const data = await client.request(GETPOSTS);
    return {
        ...data
    }
}

export default getPosts;