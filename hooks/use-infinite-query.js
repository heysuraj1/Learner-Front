import { useSWRInfinite } from 'swr';

export default function useInfiniteQuery( queryKey , initialData){
    const {}  = useSWRInfinite(
        ( pageIndex , previousPageData ) =>{

            if (previousPageData && !previousPageData.after) return null;

            //first page data here 

            if (pageIndex === 0) return queryKey;

            //next page
            const search = queryKey.includes('?');
            return `${queryKey} ${search ? '&' : '?'}cursor=${encodeURIComponent(JSON.stringify(previousPageData.after))}`

        }
        
    )
}