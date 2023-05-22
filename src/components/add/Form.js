// import Success from "../ui/Success";
import { useState } from "react";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Success from "../ui/Success";

export default function Form() {

 const [title,setTitle] = useState('');
 const [author,setAuthor] = useState('');
 const [description,setDescription] = useState('');
 const [duration,setDuration] = useState('');
 const [views,setViews] = useState('');
 const [link,setLink] = useState('');
 const [date,setDate] = useState('');
 const [thumbnail,setThumbnail] = useState('');


 const reset = ()=>{
    setTitle("");
    setDate("");
    setDuration("");
    setAuthor("");
    setDescription("");
    setThumbnail("");
    setLink("");
    setViews("");
 }


    const [addVideo,{data,isLoading,isError,isSuccess}] =useAddVideoMutation()


    const handleAddVideo =(e)=>{
        e.preventDefault();


        console.log(      title,
              description,
              views,
              link,
              thumbnail,
              duration,
              date,
              author);

        addVideo({
              title,
              description,
              views,
              link,
              thumbnail,
              duration,
              date,
              author
        })
    }

    return (
        <form  onSubmit={handleAddVideo}  >
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput 
                             title="Title"
                             onChange={(event)=>setTitle(event.target.value)}
                             
                             />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput 
                             title="Author"
                             onChange={(event)=>setAuthor(event.target.value)} />
                        </div>

                        <div className="col-span-6">
                            <TextArea title="Description"
                            
                              onChange={(event)=>setDescription(event.target.value)}
                            />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="Link"
                            
                              onChange={(event)=>setLink(event.target.value)}
                            />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="Thumbnail"
                            
                              onChange={(event)=>setThumbnail(event.target.value)}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput title="Date" 
                            
                              onChange={(event)=>setDate(event.target.value)}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Duration"
                            
                              onChange={(event)=>setDuration(event.target.value)}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Views"
                            
                              onChange={(event)=>setViews(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>

                {isSuccess && <Success message="Video was added successfully" />}
            </div>
        </form>
    );
}


 