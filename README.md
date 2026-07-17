# resume-doc-static-html-tailwind

# Static Tailwind Resume Generator

A minimalist, privacy-focused tool for rapidly generating professional, print-optimized resumes.

This project uses **Tailwind CSS v4** (with the Typography plugin) for styling and **EJS** for templating. It intentionally separates your personal data (e.g. `data.json`) from the structural code (`template.ejs`), allowing you to commit the project to version control without exposing private information. The final output is static HTML files calibrated for the browser's "Print to PDF" functionality.

---

## 📋 Requirements

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

---

## 🚀 Initial Setup

### 1. Clone the repository:

```bash
   git clone <your-repo-url>
   cd statis-html-resume
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
  "cover": {
    "meta": {
      "nav": [
        {
          "url": "resume.html",
          "label": "Resume",
          "icon": "file-user"
        }
      ]
    },
    "page": {
      "title": "Cover Letter | Your Name",
      "header": {
        "title": "Cover Letter",
        "subTitle": "Your Name"
      },
      "articles": [
        {
          "title": "",
          "sections": [
            {
              "title": "",
              "content": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed aliquet enim. Aenean volutpat erat libero, eget feugiat metus luctus sit amet. Fusce mattis mi eu ante gravida vulputate. Vivamus molestie, nisl a ullamcorper condimentum, metus velit tincidunt ligula, quis tristique justo purus a est. Etiam lectus sem, tempor eget porta quis, molestie sed ipsum. Phasellus ullamcorper nunc in nibh facilisis, quis molestie metus pellentesque. Praesent ultrices ornare elit, a consectetur dolor tincidunt eget. Integer a interdum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum scelerisque sapien non ligula bibendum, eget fringilla urna tristique. Cras ligula tortor, suscipit vitae dapibus nec, tempus pellentesque eros. Sed pharetra, elit id vestibulum lobortis, purus nisi cursus nunc, vel interdum urna magna quis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce venenatis diam ac ullamcorper mollis. Curabitur egestas venenatis dui a tristique. Morbi congue porta tincidunt."
              ]
            }
          ]
        }
      ]
    }
  }
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

|                 Setting | Value                                   |
| ----------------------: | --------------------------------------- |
|         **Destination** | Save as PDF                             |
|          **Paper size** | Letter / A4 (match your local standard) |
|             **Margins** | None (margins are handled via CSS)      |
| **Headers and footers** | Unchecked                               |
| **Background graphics** | Checked                                 |

### 4. Modifying Styles (Optional)

If you need to change the layout or add new Tailwind classes to `template.ejs`, run the following command in a separate terminal to watch for changes and recompile the CSS on the fly:

```bash
npm run dev:css
```

---

## 🔒 Privacy Note

Both `data.json` and the compiled `index.html` are included in the `.gitignore` file.

**Ensure you do not accidentally commit these files if you share this repository or make it public.**
