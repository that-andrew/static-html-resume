const fs = require("fs");
const ejs = require("ejs");

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

function fileNameFormat(values = []) {
  const fileName = values.reduce((result, [value, defaultValue = ""]) => {
    return result.concat(String(value ?? defaultValue));
  }, "");
  return fileName
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

const [dataPath, ...otherArgs] = process.argv.slice(2);

// Read data
const rawData = fs.readFileSync(dataPath, "utf8");
const parsedData = JSON.parse(rawData);

const document = parsedData.document;
const docMeta = document.meta;

const docFileName = fileNameFormat([
  [document.title, "Resume"],
  [docMeta.applicantName, "FirstName-LastName"],
  [docMeta.target],
]);
document.title = docFileName;

const docPageCount = String(document.pages?.length ?? 0);
const outputPath = `dist/index.html`;

console.log(`Rendering Document:
  Pages:      ${docPageCount}
  Output:     ${outputPath}
  Title:      ${document.title}
  Output:     http://127.0.0.1:3000/${outputPath}
`);
render(outputPath, "src/template.ejs", parsedData);

console.log(`Finished Rendering.`);
