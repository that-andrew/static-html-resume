const fs = require('fs');
const ejs = require('ejs');

// Read data
const rawData = fs.readFileSync('data.json', 'utf8');
const resumeData = JSON.parse(rawData);

// render data
ejs.renderFile('template.ejs', resumeData, (err, html) => {
  if (err) {
    console.error("Error generating template:", err);
    return;
  }
  
  // HTML file output
  fs.writeFileSync('index.html', html);
  console.log('✅ Resume successfully built to index.html!');
});