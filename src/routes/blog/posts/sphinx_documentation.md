---
title: Create a documentation for you code
date: "2023-07-14"
tldr: Tutorial on how to quickly automatically create a documentation with read the doc and sphinx
categories:
    - english
    - tutorial
    - python
---


If you ever took a look at some code documentation such as [numpy's](https://numpy.org/doc/stable/reference/index.html#reference) you might have notice the

> Created using [Sphinx](https://www.sphinx-doc.org/)

at the end. Their documentation website is auto-generated directly from their codebase. Pretty sweet right? Let's learn how we can do the same with our own code.

This tutorial assumes that you already have a code base with some docstring. I personally use the [numpy's standard](https://numpy.org/doc/1.20/docs/howto_document.html) but you can choose the one you like.

# 0 - Installation

First install sphinx. The easiest is to use pip

```bash
pip install -U sphinx
```

If you prefer to use brew, conda or any other package installer check the [Sphinx installation](https://www.sphinx-doc.org/en/master/usage/installation.html) for more details.

# 1 - Setup sphinx and create documentation folder

You then have to choose where to put the documentation folder. I personally like to put it at the root of my project. 

```
|- src/
	|- Module_1
	|- Module_2
|- tests/
<-- We are going to create the docs here
.gitignore
```

So let's say you want to call it "docs", open a commande line at the root of your project and type:

```bash
sphinx-quickstart docs
```

You will be asked if you want to separate build and source. I always say yes to keep everything clean. For the rest just fill your project title, your name and so on as asked.
At the end you should have have something like

```
|- src/
	|- Module_1
	|- Module_2
|- tests/
|- docs/
	|- build/
	|- source/
	|- make.bat
	|- Makefile
	
.gitignore
```


# 2 - Modify sphinx config

Then go in the source folder and open `config.py` . Here what you might want to add:

```python
## To generate the documentation of your code, Sphinx needs to import your code. To do that you must add it to the path like so:
import os
import sys
sys.path.insert(0, os.path.abspath("../../src"))


# Below you'll find what you entered previously, you can modify it if you wants
project = 'My project title'
copyright = '2023, Lucas Mercier'
author = 'Lucas Mercier'
release = '0.1'

# -- General configuration ---------------------------------------------------

# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

  
extensions = [
    'sphinx.ext.napoleon', # Read Numpy and Google docstring
    'sphinx.ext.viewcode', # Allows to view code in the website
    'sphinx.ext.autodoc',  # Generate documentation automatically
    'sphinx.ext.mathjax', # Allows to display LaTeX formula in your docs
    'sphinx.ext.autosummary' # Generate summary of your code
]

napoleon_numpy_docstring = True # Tell sphinx you're working with np docstring
autosummary_generate = True # Enable the module

templates_path = ['_templates']
exclude_patterns = []

# Select a theme that you like (see section 5.2 if you want another one)
html_theme = 'sphinx_book_theme'

html_static_path = ['_static']
```

# 3 - Build the doc

It's time to generate the website. First generate documentation file with the following command from docs folder (it will put all pages in a 'pages' folder):

```bash
sphinx-apidoc -o source/pages src/
```

Then from the same place run:

```
make html
```

This will convert `.rst` files to html ones and create home page and so on.
Your website is finally built. If you want to view it you can use python's web server:

Place yourself in the build/html folder and run:
```
python -m http.server --bind 127.0.0.1
```


It will create a local web server. You should see a message like this:

> Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) 

Just open your web browser and go to this address. You should now be able to view your documentation.

# 4 - Update the documentation

Let's say you've done some changes to your code base and want to update the documentation. The way I do it is:
1. Clear the build and pages folder
2. Regenerate the `.rst` files
3. Rebuild the html
4. (restart the webserver)

It can be tedious if you often update your code so the easiest way is to create a script that will to this for us. For example on window you can create something like `rebuild.bat` at the root of your "docs" folder:

```bash
CALL conda activate base
CALL make clean
@RD /S /Q "source/pages"
CALL sphinx-apidoc -o source/pages ../src
CALL make html

cd build/html
python -m http.server --bind 127.0.0.1
```


# 5 - Some improvements

## 5.1 - Adding a navbar on the left

In the numpy's documentation there is a left navbar that contains high level modules. It's called a Table of Content (Toc) and it's quite useful to quickly navigate. We will use the autosummary module combined with the 'recursive' tag to generate it:

To add this to your site go the `docs/source` folder and open `index.rst`

```rst
Welcome to your documentation!
==============================

.. autosummary::
   :toctree: _autosummary
   :recursive:

	Module_1
	Module_2
	.. add your modules ^ here

```

## 5.2 - Change the theme

To select a new theme you can use: [Sphinx-themes](https://sphinx-themes.org/) and select one and click on it, it will redirect you to the installation page.

I like the [Sphinx-book-theme](https://sphinx-themes.org/sample-sites/sphinx-book-theme/) so I check the documentation and see that I can install it with pip:
```bash
pip install sphinx-book-theme
```

Then I go back to the `conf.py` and change the default theme to
```python
html_theme = 'sphinx_book_theme'
```

Be careful, for the conf file the separators are underscores and not dashes.
