import { FileInput, Select, TextInput, Button, Alert } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  
  const handleUploadImage = async () => {
    if(!file){
        setImageUploadError('Please select an image');
        return;
    }
    setImageUploadError(null);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "myCloud");
    data.append("cloud_name", "drbgazxua");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/drbgazxua/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const cloudData = await res.json();
      console.log(cloudData.url);
      
      setFormData({ ...formData, image: cloudData.url });
    } catch (error) {
      setImageUploadError('Image upload failed');
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized"> Select a category</option>
            <option value="javascript"> JavaScript</option>
            <option value="reactjs"> React.js </option>
            <option value="nextjs"> Next.js </option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            onClick={handleUploadImage}
          >
            Upload Image
          </Button>
        </div>
        {imageUploadError && (
            <Alert color="failure" type='danger' className="mt-4">{imageUploadError}</Alert>
        )}
        {
            formData.image && (
                <img 
                    src={formData.image} 
                    alt="upload" 
                    className="w-full h-72 object-cover"
                />
            )
        }
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
        ></ReactQuill>
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
