import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:9000/',
	}),
   
  tagTypes:["Videos"],
	endpoints: (builder) => ({

        // for all videos api route

        getVideos : builder.query({
            query:()=> 'videos/',
            providesTags:["Videos"]

        }),

      // get single video route 

        getVideo:builder.query({
          query:(id)=> `videos/${id}` 
        }),

      // related video code is here 
        getRelatedVideos: builder.query({
            query: ({ id, title }) => {
                const tags = title.split(" ");
                const likes = tags.map((tag) => `title_like=${tag}`);
                const queryString = `/videos?${likes.join("&")}&_limit=4`;
                return queryString;
            },
            providesTags: (result, error, arg) => [
                { type: "RelatedVideos", id: arg.id },
            ],
        }),

      // create a new video 

      addVideo:builder.mutation({
        query:(data)=>({
          url:'/videos',
          method:'POST',
          body:data
        }),
        invalidatesTags:["Videos"]
        
      }),
 
    
    // edit the video 

      editVideo:builder.mutation({
        query:({id,data})=>({
          url:`/videos/${id}`,
          method:"PATCH",
          body:data
        })
      }),
      
      // delete video 

      deleteVideo:builder.mutation({
        query:(id)=>({
          url:`/videos/${id}`,
          method:'DELETE'
        }),
        invalidatesTags:["Videos"]
      })



    }),



});

export const {useGetVideosQuery,useGetVideoQuery,useAddVideoMutation,useDeleteVideoMutation,useEditVideoMutation,useGetRelatedVideosQuery} = apiSlice
