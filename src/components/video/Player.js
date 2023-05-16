import { useGetVideoQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import PlayerLoader from "../ui/loaders/PlayerLoader";

export default function Player({videoId}) {
    const {data:playerVideoData,isLoading:playerVideoLoading,isError:playerLoadingError} =useGetVideoQuery(videoId)

  if(playerVideoLoading){
    <PlayerLoader />
  }

  if(playerLoadingError){
    <Error message="There is some error in player video" />
  }
  
    return (
        <iframe
            width="100%"
            className="aspect-video"
            src={playerVideoData?.link}
            title={playerVideoData?.title}
            frameBorder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
