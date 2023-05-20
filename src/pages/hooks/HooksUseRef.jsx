import { useEffect, useRef, useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
const HooksUseRef = () => {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const [img, setImg] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const imagePreview = (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const reader = new FileReader();
    const url = e.target.files[0] && reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      //   reader.result(e.target.files[0]);
      setImg(reader.result);
    };
  };
  return (
    <>
      <img
        src={img}
        alt=""
        style={{
          borderRadius: "60%",
          width: "156px",
        }}
      />
      <input
        type="file"
        ref={inputRef1}
        style={{ display: "none" }}
        onChange={imagePreview}
      />
      <input type="text" ref={inputRef} />
      <FileUploadOutlinedIcon
        color="success"
        fontSize="large"
        onClick={() => {
          inputRef1.current.click();
        }}
      />
    </>
  );
};
export default HooksUseRef;
