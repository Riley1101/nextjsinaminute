import fetcher from "@/queries/fetcher";
import useSWR from "swr";
const usePosts = (limit) => {
    const { data, error, isValidating } = useSWR(
        [`query MyPosts {
                posts {
                        id
                        title
                        excerpt
                        coverImage {
                        id
                        url
                    }
                }
            }`, { limit: limit }],fetcher)
    return {
        data, error, isValidating
    }
};
export default usePosts;


