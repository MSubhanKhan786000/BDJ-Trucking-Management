import React, { useEffect, useRef } from "react";
import { Button, Container, Row } from "reactstrap";
import defaultImage from "assets/img/image_placeholder.jpg";
import { useToastNotification } from "utils/toast/useToastNotification";

export const MultiImageUpload = ({
  imagePreviewUrl,
  setImagePreviewUrl,
  attachedFiles,
  setAttachedFiles,
  previousAttachedFiles,
  setPreviousAttachedFiles,
  deleteDocument,
  allowUpload = true,
}) => {
  const fileInput = useRef(null);
  const { showSuccessToast, showErrorToast } = useToastNotification();

  const handleClick = () => {
    fileInput.current.click();
  };

  useEffect(() => {
    if (previousAttachedFiles?.length > 0) {
      setImagePreviewUrl((previousFiles) => {
        const uniqueFiles = new Set(previousFiles);
        previousAttachedFiles.forEach((file) => {
          uniqueFiles.add(file.image);
        });
        return Array.from(uniqueFiles);
      });
    }
  }, [previousAttachedFiles, setImagePreviewUrl]);

  const handleImageChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setAttachedFiles(files);
    files.forEach((file) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviewUrl((previousFiles) => [
          ...previousFiles,
          reader.result,
        ]);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleRemove = async (index) => {
    const newStateAfterRemoval = [...imagePreviewUrl];
    const document = previousAttachedFiles[index];

    if (document?.hasOwnProperty("id")) {
      try {
        await deleteDocument(document.id);
        newStateAfterRemoval.splice(index, 1);
        showSuccessToast();
      } catch (error) {
        showErrorToast();
      }
    }

    setImagePreviewUrl(newStateAfterRemoval);
  };

  return (
    <>
      <div className="fileinput text-center">
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInput}
          multiple={true}
          accept=".png, .jpg, .jpeg .pdf .docx"
        />
      </div>
      <Container>
        <Row className="upload-image-row" style={{ justifyContent: "center" }}>
          {imagePreviewUrl.map((url, index) => (
            <div key={index}>
              {allowUpload && (
                <span onClick={() => handleRemove(index)}>&times;</span>
              )}
              <img
                src={url}
                alt="uploaded"
                onClick={() => {
                  let image = new Image();
                  image.src = url;
                  var newTab = window.open();
                  newTab.document.body.innerHTML = image.outerHTML;
                }}
              />
            </div>
          ))}
        </Row>
      </Container>
      {imagePreviewUrl.length === 0 && (
        <Row className="upload-justify-div">
          <div>
            <img src={defaultImage} alt="..." />
          </div>
        </Row>
      )}
      {allowUpload && (
        <Row className="upload-justify-div">
          <Button onClick={() => handleClick()}>Upload</Button>
        </Row>
      )}
    </>
  );
};
