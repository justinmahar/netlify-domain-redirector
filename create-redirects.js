const fs = require("fs");
const dotenv = require("dotenv");
// Load environment variables from the .env file
dotenv.config();

const redirectsEnvVarName = "REDIRECTS";
let redirects = undefined;
try {
  const val = JSON.parse(process.env[redirectsEnvVarName]);
  if (Array.isArray(val)) {
    redirects = val;
  } else {
    console.error("REDIRECTS must be a JSON array of strings.");
  }
} catch (e) {
  console.error(e);
}

let redirectsContent = "/* /index.html 200";

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
  console.log("-- Redirects --");
  console.log(`  ${redirectsContent.split("\n").join("\n  ")}`);
  console.log("---------------");
});
