import React, { useState } from "react";
import apiUtils from "../utils/api.utils";

const UserProfile = ({ _id, name, email, gender, image }) => {
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="change-img">Change Image</label>
        <input id="change-img" type="file" onChange={handleChangeImg} />
        {imageUrl ? (
          <>
            <img src={imageUrl} alt="new profile" width="200" height="200" />
            <button onClick={handleUpdateImg}>Update Image</button>
          </>
        ) : null}
      </div>
      <div>
        <img src={image} alt={name} width="200" height="200" />
      </div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{gender}</div>          
      
    </>
  );
};

export default UserProfile;