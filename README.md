# resume-doc-static-html-tailwind

# Static Tailwind Resume Generator

A minimalist, privacy-focused tool for rapidly generating professional, print-optimized resumes. 

This project uses **Tailwind CSS v4** (with the Typography plugin) for styling and **EJS** for templating. It intentionally separates your personal data (`data.json`) from the structural code (`template.ejs`), allowing you to commit the project to version control without exposing private information. The final output is a static HTML file perfectly calibrated for the browser's "Print to PDF" functionality.

---

## 📋 Requirements

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   npm (comes with Node.js)

---

## 🚀 Initial Setup

### 1. Clone the repository:
```bash
   git clone <your-repo-url>
   cd tailwind-resume
```

### 2. Install Dependencies:  
```bash
    npm install
```

### 3. Create your data file:  

Create a `data.json` file in the root directory.  
The `data.json` file is ignored by Git to protect sensitive data.   
The file `example_data.json` is included and can be used as a starting point.

```json
// example_data.json
{
     "basics": {
       "name": "Jane Doe",
       "title": "Senior Software Engineer",
       "email": "jane.doe@example.com",
       "phone": "(555) 123-4567",
       "location": "City, State",
       "linkedin": "[https://linkedin.com/in/janedoe](https://linkedin.com/in/janedoe)",
       "summary": "Your professional summary..."
     },
     "experience": [
       {
         "company": "Tech Solutions Inc.",
         "role": "Lead Developer",
         "date": "Jan 2021 – Present",
         "highlights": [
           "Key achievement 1",
           "Key achievement 2"
         ]
       }
     ]
   }
```  

### 4. Build the initial CSS:  
```bash
    npm run build:css
```

---

## 🛠️ Usage Workflow

Follow these steps to tailor a new resume for a specific job application.  

### 1. Update Your Data:  

Open `data.json` and adjust your summary, experience highlights, or skills as required.

### 2. Generate the HTML:  

Compile your data and EJS template into the final `index.html` file by running:  
```bash
    npm run build:html
```

### 3. Print to PDF:

Open the newly generated `index.html` file in a modern browser ( e.g., Google Chrome, Edge).

Press `Ctrl + P` (or `Cmd + P` on Mac).

Apply the following print settings:

| Setting | Value |
|--:|--|
**Destination** | Save as PDF
**Paper size**| Letter / A4 (match your local standard)
**Margins**| None (margins are handled via CSS)
**Headers and footers**| Unchecked
**Background graphics**| Checked

### 4. Modifying Styles (Optional)

If you need to change the layout or add new Tailwind classes to `template.ejs`, run the following command in a separate terminal to watch for changes and recompile the CSS on the fly:
```bash
npm run dev:css
```

---

## 🔒 Privacy Note

Both `data.json` and the compiled `index.html` are included in the `.gitignore` file. 

**Ensure you do not accidentally commit these files if you share this repository or make it public.**