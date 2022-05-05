import React, { useState } from "react";
import apiUtils from "../utils/api.utils";

const Products = ({ _id, nameOfProduct, brand, group, source, comment, category, itIs }) => {
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
        <label htmlFor="change-img">Change image source</label>
        <input id="change-img" type="file" onChange={handleChangeImg} />
        {imageUrl ? (
          <>
            <img src={imageUrl} alt="new profile" width="200" height="200" />
            <button onClick={handleUpdateImg}>Update Image</button>
          </>
        ) : null}
      </div>
      <div>
        <img src={source} alt={nameOfProduct} width="200" height="200" />
      </div>
      <div>{nameOfProduct}</div>
      <div>{brand}</div>
      <div>{group}</div>          
      <div>{category}</div>
      <div>{source}</div>          
      <div>{comment}</div>
      <div>{itIs}</div>

    </>
  );
};

export default Products;