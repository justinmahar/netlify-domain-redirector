const fs = require("fs");
const dotenv = require("dotenv");
// Load environment variables from the .env file
dotenv.config();

const redirectsEnvVarName = "REDIRECTS";
let redirects = undefined;
const redirectsEnvVar = process.env[redirectsEnvVarName];
if (!!redirectsEnvVar) {
  try {
    const parsedRedirects = JSON.parse(redirectsEnvVar);
    // Confirm it's an array of strings
    if (
      Array.isArray(parsedRedirects) &&
      typeof parsedRedirects.find((v) => typeof v !== "string") === "undefined"
    ) {
      redirects = parsedRedirects;
    } else {
      console.error(
        `${redirectsEnvVarName} must be a JSON array of redirect strings. Received instead: ${redirectsEnvVar}`
      );
    }
  } catch (e) {
    console.error(e);
    console.error(
      `${redirectsEnvVarName} must be a JSON array of redirect strings. Received instead: ${redirectsEnvVar}`
    );
  }
}

let redirectsContent = "/* /index.html 200"; // Show setup page if no redirects are set
if (redirects) {
  redirectsContent = redirects.join("\n");
}

const redirectsFilePath = "./build/_redirects";

fs.writeFile(redirectsFilePath, redirectsContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Redirects file written successfully to:", redirectsFilePath);
  console.log("Redirects:");
  console.log(`  ${redirectsContent.split("\n").join("\n  ")}`);
});
