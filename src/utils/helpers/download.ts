const handleDownloadClick = async (url: string, fileName: string) => {
     try {
          const response = await fetch(url, {
               method: "GET",
               headers: {
                    "Content-Type": "image/jpeg" // Устанавливаем правильный Content-Type
               }
          });
          const blob = await response.blob();

          // Create a download link
          const downloadLink = document.createElement("a");
          downloadLink.href = window.URL.createObjectURL(blob);
          downloadLink.download = fileName;

          // Append the link to the document and trigger a click
          document.body.appendChild(downloadLink);
          downloadLink.click();

          // Remove the link from the document
          document.body.removeChild(downloadLink);
     } catch (error) {
          console.error("Error downloading the file:", error);
     }
};

export default handleDownloadClick;
