import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";
import html2pdf from "html2pdf.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const previewRef = useRef(null);

  // Image upload with base64 conversion
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const imageTag = `\n\n[[image:${reader.result}]]\n\n`;
          setMarkdown((prev) => `${prev}${imageTag}`);
        };
        reader.readAsDataURL(file);
      });
    },
  });

  // PDF export logic
  const downloadAsPDF = () => {
    const element = previewRef.current;
    html2pdf()
      .set({
        margin: 0.5,
        filename: "markdown_notes_with_images.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  // Markdown preview with base64 image rendering
  const renderWithImages = (text) => {
    const parts = text.split(/(\[\[image:.*?\]\])/g);
    return parts.map((part, i) => {
      if (part.startsWith("[[image:")) {
        const base64 = part.replace("[[image:", "").replace("]]", "");
        return (
          <img
            key={i}
            src={base64}
            alt="Uploaded"
            style={{
              maxWidth: "100%",
              margin: "1rem 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        );
      } else {
        return <ReactMarkdown key={i}>{part}</ReactMarkdown>;
      }
    });
  };


  // Reset/clear markdown
  const clearMarkdown = () => {
    setMarkdown("");
  };

  return (
    <div className="container my-5">
      <h4 className="text-primary mb-3">
        📝Make PDF Easily
      </h4>
      {/* Toolbar */}
      <div className="btn-toolbar mb-3 gap-2 flex-wrap" role="toolbar">
        <button className="btn btn-outline-danger ms-auto" onClick={clearMarkdown}>
          🗑️ Clear
        </button>
      </div>

      {/* Markdown Input */}
      <textarea
        className="form-control mb-3"
        rows={8}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write markdown here... or drop an image below"
      />

      {/* Image Upload */}
      <div
        {...getRootProps()}
        className="bg-light p-4 text-center border rounded mb-3"
        style={{ cursor: "pointer" }}
      >
        <input {...getInputProps()} />
        <p className="m-0 text-muted">📷 Drag & drop or click to upload an image</p>
      </div>

      {/* PDF Export */}
      <button className="btn btn-success mb-3" onClick={downloadAsPDF}>
        ⬇️ Export to PDF
      </button>

      {/* Markdown Preview */}
      <div
        ref={previewRef}
        className="bg-white border rounded shadow-sm p-4"
        style={{ minHeight: "200px" }}
      >
        {renderWithImages(markdown)}
      </div>
    </div>
  );
}
