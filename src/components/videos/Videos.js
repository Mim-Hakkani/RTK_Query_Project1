import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {
    const {data:videos,isLoading,isError} =useGetVideosQuery();

    console.log("videos :: ",videos);

        let content = null ; 

    if(isLoading) {
        content = <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        
        
        </>
    }

    if(isError){
        content = <Error message="There is an Error " />
    }

      if(!isLoading &&  !isError && videos.length ===0){
        content = <Error message="No Videos are here  " />
    }

    if(!isLoading && !isError && videos.length>0){
        content = videos.map((video,index)=><Video key = {index} video={video}/>)
    }


    return content ;
}
