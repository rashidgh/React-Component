import React, { useState } from "react";
import { saveAs } from "file-saver";
import styles from "./File.module.css";

const App = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile.type === "application/pdf" ||
      selectedFile.type === "image/png" ||
      selectedFile.type === "application/msword"
    ) {
      setFile(selectedFile);
    } else {
      alert("Please select a file with extension pdf, png, or doc");
    }
  };

  const handleDownload = format => {
    if (format === "pdf") {
      saveAs(file, "document.pdf");
    } else if (format === "png") {
      saveAs(file, "image.png");
    } else if (format === "doc") {
      saveAs(file, "document.doc");
    }
  };

  return (
    <section className={styles.formBlock}>
      <div className={styles.div1}>
        <input type="file" onChange={handleFileChange} />
        <div>
          <button onClick={() => handleDownload("pdf")}>Download as PDF</button>
          <button onClick={() => handleDownload("png")}>Download as PNG</button>
          <button onClick={() => handleDownload("doc")}>Download as DOC</button>
        </div>
      </div>
    </section>
  );
};

export default App;
