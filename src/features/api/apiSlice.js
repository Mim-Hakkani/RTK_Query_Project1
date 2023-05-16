import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:9000/',
	}),

	endpoints: (builder) => ({

        // for all videos api route

        getVideos : builder.query({
            query:()=> 'videos/'

        }),


        // get single video route 

        getVideo:builder.query({
          query:(id)=> `videos/${id}` 
        })
    }),



});

export const {useGetVideosQuery,useGetVideoQuery} = apiSlice
