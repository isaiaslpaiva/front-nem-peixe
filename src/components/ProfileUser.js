import React, { useState } from "react";
import apiUtils from "../utils/api.utils";
import "./ProfileUser.css";

const ProfileUser = ({ name, email, gender, image, youAre }) => {
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState("");

  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    } else {
      setImageUrl(null);
    }
  };

  const handleUpdateImg = async () => {
    try {
      await apiUtils.updateImage(file);
      setFile(null);
      setImageUrl(null);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='sec-1'>
        
        <input id="change-img" type="file" onChange={handleChangeImg} />
        {imageUrl ? (
          <>
            <img src={imageUrl} alt="new profile" className="profile-img" />
            <button onClick={handleUpdateImg}>Save Image</button>
          </>
        ) : null}
      </div>
      <div>
        <img src={image} alt={name} width="200" height="200" />
      </div>
      <div>Nome:
        {name}
      </div>
      <div>E-mail cadastrado:
        {email}
      </div>
      <div>Gênero:
        {gender}
      </div>          
      <div>Você é:
        {youAre}
      </div>
    </>
  );
};

export default ProfileUser;