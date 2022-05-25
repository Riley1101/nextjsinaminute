import { gql } from 'graphql-request'
import client from '@/queries/client'

const GET_COURSES = gql`query Courses {
  courses {
    id
    title
    description
  }
}

`;

const getCourses = async () => {
    const data = await client.request(GET_COURSES);
    return {
        ...data
    }
}

export default getCourses;