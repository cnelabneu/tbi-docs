# How to Contribute

Make sure you have python installed on your machine. Any version above 3.9 works

Run the following command:
```bash
pip install mkdocs
```
Once installed, clone the repository onto your local machine. 

To edit anything, please use the **docs** directory. The **site** directory is what gets displayed onto the website, do not edit that directly.

If you wish to add a new page of documentation, find the mkdocs.yml file and edit it as such:

```yaml
site_name: TBI Lab Documentation
nav:
  - Login: login.md
  - Home: index.md
  - General: 
    - EEG: eeg.md
    - MRI: mri.md
  - Study:
    - Roybal: roybal.md
    - techs: techs.md
    - survey: survey.md <---- This is the new one! Make sure to add the appropriate Markdown file in the docs directory
```

Once you add the new page into the mkdocs.yml file, create a new file that has the name of the page you just added. The file should go into the **docs/** directory with the rest of the other Markdown files. You can create the webpage using only Markdown semantics, and it'll be translated to HTML and CSS to match the Markdown format. 


The format of the docs/ directory is like this:
.
└── docs/
    ├── js/
    │   └── file.js
    ├── img/
    │   ├── img1.png
    │   ├── img2.png
    │   └── im3.jpg
    ├── theme/
    │   └── index.html
    ├── index.md
    ├── login.md
    ├── roybal.md
    ├── techs.md
    └── etc.md

All of the mardown files belong on the same level as each other. Each image should be in the img folder. js holds custom javascript code. theme is the theme for the website, best left untouched.

To view a dev version of the website, travel to the root directory of this repository and type the following:

```bash
mkdocs serve
```

To build your code into the new website, travel to the root directory of this repository and type the following:

```bash
mkdocs build
```

```bash
mkdocs gh-deploy
```

Push your code to the github with the following commands:

```bash
git add .; git commit -m "new changes"; git push origin main
```

Then push your code here, and within a few minutes, the documentation will update!
