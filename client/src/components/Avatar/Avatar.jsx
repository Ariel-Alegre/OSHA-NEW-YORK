import React, { useState } from "react";
import uploadService from "./uploadService";

export default function Photo({ setImages, Images }) {
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  

  const [pathDiplom, setDiplom] = useState(
    "http://localhost:8000/upload/a.png"
  );

  const sendImage = (e) => {
    e.preventDefault();
    uploadService
      .sendImages(
        name,
        file,
     
      )
      .then((result) => {
        console.log(result);
      });
  };



  const onFileTestChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file.type.includes("image")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function load() {
          setDiplom(reader.result);
        };

        setFile(file);
      } else {
        console.log("error no se pudo pasar el archivo");
      }
    }
  };

  return (
    <div>
      <form >
      
  
        <input type="file" placeholder="test" onChange={onFileTestChange} />

        <img src={pathDiplom} alt="not found" />

      </form>

      <br />
      

      <button type="submit" onClick={sendImage} >
        enviar
      </button>
    </div>
  );
}
