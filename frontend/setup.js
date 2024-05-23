const fs = require("fs");
const path = require("path");

// Get the directory from the command line arguments
const directory = process.argv[2];

if (!directory) {
  console.error("Please provide a directory as an argument");
  process.exit(1);
}

// Ensure the directory exists or create it
fs.mkdirSync(directory, { recursive: true });

// Define the content to be written to environment.ts
const content = `
export const environment = {
  firebaseConfig: {
    apiKey: "AIzaSyC3H-qoUFA6HafwbMOjWy6EmhT9wLiVByY",
    authDomain: "wikispace-clone.firebaseapp.com",
    databaseURL: "https://wikispace-clone-default-rtdb.firebaseio.com",
    projectId: "wikispace-clone",
    storageBucket: "wikispace-clone.appspot.com",
    messagingSenderId: "691526135272",
    appId: "1:691526135272:web:f8919b9f909ffd7f4a485d"
  }
};
`;

// Resolve the full path to the environment.ts file
const filePath = path.join(directory, "environment.ts");

// Write the content to environment.ts
fs.writeFile(filePath, content.trim(), (err) => {
  if (err) {
    console.error("Error writing to environment.ts:", err);
    process.exit(1);
  }
  console.log("environment.ts created successfully at", filePath);
});
