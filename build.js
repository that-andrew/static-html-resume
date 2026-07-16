const fs = require("fs");
const ejs = require("ejs");

const [target, ...otherArgs] = process.argv.slice(2);

const buildResume = target === "all" || target === "resume";
const buildCover = target === "all" || target === "cover";

// Read data
const rawData = fs.readFileSync("data.json", "utf8");
const parsedData = JSON.parse(rawData);
const resumeData = parsedData.resume;
const coverData = parsedData.cover;

/**
 *
 * @param {fs.PathOrFileDescriptor} outputPath
 * @param {fs.PathLike} templatePath
 * @param {ejs.Data} data
 * @param {ejs.RenderFileCallback} cb
 */
function render(outputPath, templatePath, data) {
  try {
    const templateExists = fs.existsSync(templatePath);
    if (!templateExists) {
      throw new Error(`template file not found at path: "${templatePath}"`);
    }
  } catch (err) {
    console.error(`Template Error!`, err);
    throw new Error(`Template Error!`, err);
  }
  try {
    // render data
    ejs.renderFile(templatePath, data, (err, html) => {
      if (err) {
        throw err;
      }

      try {
        // file output
        fs.writeFileSync(outputPath, html);
      } catch (err) {
        throw new Error(`Write Error!`, `outputPath: ${outputPath}`, err);
      }

      console.log(
        `✅ Successfully rendered '${templatePath}' to '${outputPath}'!`,
      );
    });
  } catch (err) {
    console.error(`Rendering Error!`, err);
    throw new Error(`Rendering Error!`, err);
  }
}

console.log(`Rendering documents...`);

if (buildCover) {
  console.log(` - rendering cover letter...`);
  render("cover.html", "template.ejs", coverData);
}

if (buildResume) {
  console.log(` - rendering resume...`);
  render("resume.html", "template.ejs", resumeData);
}

console.log(`finished rendering.`);

// // render data
// ejs.renderFile("template-resume.ejs", resumeData, (err, html) => {
//   if (err) {
//     console.error("Error redering template-resume.ejs:", err);
//     return;
//   }

//   // HTML file output
//   fs.writeFileSync("resume.html", html);
//   console.log("✅ Resume successfully built resume to resume.html!");
// });
