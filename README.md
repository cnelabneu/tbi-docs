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
  - Roybal: roybal.md
  - Survey: survey.md <----- New page!! Make sure this file exists

```

Once you add the new page into the mkdocs.yml file, create a new file that has the name of the page you just added. The file should go into the **docs/** directory with the rest of the other Markdown files. You can create the webpage using only Markdown semantics, and it'll be translated to HTML and CSS to match the Markdown format. 

To view a dev version of the website, travel to the root directory of this repository and type the following:

```bash
mkdocs serve
```

To build your code into the new website, travel to the root directory of this repository and type the following:

```bash
mkdocs build
```

Then push your code here, and within a few minutes, the documentation will update!