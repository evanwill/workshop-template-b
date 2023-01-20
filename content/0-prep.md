---
title: Workshop Prep
nav: Prep
topics: GitHub; Optional Software
---

To create your own materials using `workshop-template-b`, please set up a free [GitHub account](https://github.com/join) if you do not have one already.

Basic familiarity with the GitHub web interface will be helpful.
For a quick introduction check out GitHub's [Hello World guide](https://guides.github.com/activities/hello-world/), or the extensive [GitHub Learning Lab](https://lab.github.com/).

This template works great using only GitHub's web interface for editing--you don't have to install anything!
However, for more advanced uses you will want Git, Ruby, and Jekyll installed on your computer to do local development.

{% capture text %}
1. Have a [GitHub](https://github.com) account.
2. *Very Optional:* have [Git](https://git-scm.com/), [Jekyll](https://jekyllrb.com/), and a nice [text editor](https://code.visualstudio.com/) installed.
{% endcapture %}
{% include card.html text=text header="Setup Overview" %}

> *Tip:* for easier editing of your project in your browser, you can click `.` on any GitHub repository to [open the web editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) (which is a version of [Visual Studio Code](https://code.visualstudio.com/) editor)!
>
> *Tip:* you could also use this template on GitLab or other hosting service. GitHub is handy for easily creating and sharing projects, however, it is not a dependency!

-------------

## Local Jekyll Setup [very optional]

If you want to develop and preview your website project on your local computer (or deploy it some where other than GitHub Pages), you will need to install Git version control and the static site generator [Jekyll](https://jekyllrb.com/).

### Install Git

[Git](https://git-scm.com/) is a [free](https://www.gnu.org/philosophy/free-sw.en.html), [distributed](https://en.wikipedia.org/wiki/Distributed_version_control) version control system. [GitHub](https://github.com/) is a Git repository hosting service, a place to store and sync your work in the cloud.
Your GitHub project will be under Git version control, so you need the software on your machine. 

- **Windows:** Install [Git for Windows](https://git-scm.com/downloads){:target="_blank" rel="noopener"} using the default options, *except* when setup asks you to choose the default editor used by Git, select "Use the Nano editor by default". This will give you Git, Git Bash, and Git GUI. Git Bash is a terminal that lets you use UNIX style commands and utilities on Windows, and will be used as your default terminal when working with Jekyll.
- **Mac:** Mac systems will require the "Xcode Command Line Tools" installed, so open a terminal (to find your terminal search for "terminal" in your Spotlight), type in the command `xcode-select --install`, and follow the prompts. After the install finishes, try typing `git --version`. If you want a newer version of Git, download the official [Mac git installer](https://git-scm.com/downloads){:target="_blank" rel="noopener"}.
- **Linux:** Install from your distribution's software center or package manager (for Ubuntu `sudo apt install git`).

If you are interested in using a visual GUI application integrated with GitHub, Windows and Mac users should also install [GitHub Desktop](https://desktop.github.com/) using the default options.
You can install GitHub Desktop in addition to other versions of Git.
There are other [GUI apps available](https://git-scm.com/downloads/guis) for managing and visualizing Git repositories, including Linux options.

### Install Ruby

[Ruby](https://www.ruby-lang.org/en/){:target="_blank" rel="noopener"} is a open source programming language popular with web applications.
**_You do not need to know anything about Ruby_**, but you do need it to run Jekyll on your system!

Jekyll requires a Ruby version 2.5.0 or greater.
Below are quick start steps, but you may want to refer to Jekyll's official [installation guides](https://jekyllrb.com/docs/installation/) for tips.

- **Windows:** Use [RubyInstaller for Windows](https://rubyinstaller.org/){:target="_blank" rel="noopener"}.
    - First, [download](https://rubyinstaller.org/downloads/) the suggested stable version "WITH DEVKIT" (as of this writing, Ruby+Devkit 3.1.x (x64)) and double click to install. Use the install defaults, but make sure "Add Ruby executables to your PATH" is checked. On the final step, ensure the box to start the MSYS2 DevKit is checked.
    - Second, the installer will open a terminal window with options to install MSYS2 DevKit components. Choose option 3, "MSYS2 and MINGW development toolchain", or simply press ENTER to install all the necessary dependencies. The installer will proceed through a bunch of steps outputting a bunch of text in the terminal window. *Eventually*, this will conclude and you should see a message with the word `success` in it. If the window doesn't close, press `Enter` again or manually close it. (The installer can be restarted by typing `ridk install` into a command prompt).
- **Mac:** OS X has a version of Ruby installed by default. Check the version with `ruby -v`. If it is > 2.5.0 you can use the system Ruby. However, a newer version can be installed using [Homebrew](https://brew.sh/) or a manager such as [rbenv](https://github.com/rbenv/rbenv). Check the official Jekyll [Mac install docs](https://jekyllrb.com/docs/installation/#macOS) for tips.
- **Linux:** Although many distros come with a system Ruby installed or a repository version, we suggest using a version manager such as [rbenv](https://github.com/rbenv/rbenv) or [RVM](http://rvm.io/). This will ensure you have an up to date Ruby version and a clean environment separated from your system Ruby. You will also need the build tools Make and GCC, on Ubuntu get them with `sudo apt install build-essential`. 

### Install Jekyll

Jekyll is a Gem, a software package installed via Ruby's management system called RubyGems (similar to Python's Pip). 
Open a terminal and type:
`gem install jekyll bundler`

This will take a minute as Gem installs all the dependencies and builds extensions. 

### Install Text Editor

When working with code you should have a good text editor.
Windows notepad does not handle UTF-8 encoding or UNIX line endings that are standard for cross platform applications. 
For basic editing, Windows [Notepad++](https://notepad-plus-plus.org/), Mac TextEdit, or Linux Gedit are sufficient.
However, a more complete code editor will be helpful for managing Jekyll projects.
The current most popular open source cross platform option is [Visual Studio Code](https://code.visualstudio.com/).
