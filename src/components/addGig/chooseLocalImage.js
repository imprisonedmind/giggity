import React from "react";
import ChooseImage from "@/components/buttons/chooseImage";

export default function ChooseLocalImage({
  displayImage,
  setDisplayImage,
  setDisplayFile,
}) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setDisplayFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDisplayImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label htmlFor="imageInput" className="mt-4 block">
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <ChooseImage displayImage={displayImage} />
    </label>
  );
}
