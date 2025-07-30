const { defineConfig } = require("cypress");
const Tesseract = require("tesseract.js");
const path = require("path");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      on("task", {
        async ocrCanvas(imagePath) {
          const fullPath = path.join(
            __dirname,
            "cypress",
            "screenshots",
            imagePath
          );

          const result = await Tesseract.recognize(fullPath, "eng");
          return result.data.text.trim();
        },
        deleteScreenshot(filePath) {
          const fullPath = path.join(
            __dirname,
            "cypress",
            "screenshots",
            filePath
          );
          if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
            return `Deleted: ${filePath}`;
          }
          return `No file to delete: ${filePath}`;
        },
      });
    },
  },
});
