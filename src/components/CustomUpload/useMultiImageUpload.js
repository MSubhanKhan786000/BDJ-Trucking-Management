import { useState } from "react";

export const useMultiImageUpload = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [previousAttachedFiles, setPreviousAttachedFiles] = useState([]);

  return {
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    previousAttachedFiles,
    setPreviousAttachedFiles,
  };
};
