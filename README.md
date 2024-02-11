<p align="center">
  <img src="https://github.com/muhammad-fiaz/MaaagicUI/assets/75434191/4fa95721-7161-4f88-8056-cba5e9fe647d" alt="Maaagic UI Logo">
</p>

<h1 align="center">Maaagic UI</h1>

<div align="center">
  <img src="https://img.shields.io/github/last-commit/muhammad-fiaz/MaaagicUI" alt="Last Updated">
  <img src="https://img.shields.io/github/license/muhammad-fiaz/MaaagicUI" alt="License">
  <img src="https://img.shields.io/github/v/release/muhammad-fiaz/MaaagicUI" alt="Release">
  <img src="https://img.shields.io/github/contributors/muhammad-fiaz/MaaagicUI" alt="Contributors">
  <img src="https://img.shields.io/github/issues/muhammad-fiaz/MaaagicUI" alt="Issues">
  <img src="https://img.shields.io/github/stars/muhammad-fiaz/MaaagicUI" alt="Stars">
  <img src="https://img.shields.io/github/languages/count/muhammad-fiaz/MaaagicUI" alt="Languages Count">
  <img src="https://img.shields.io/github/languages/code-size/muhammad-fiaz/MaaagicUI" alt="Code Size">
  <img src="https://img.shields.io/github/commit-activity/m/muhammad-fiaz/MaaagicUI" alt="Commit Activity">
  <a href="https://github.com/muhammad-fiaz/MaaagicUI/actions/workflows/github-code-scanning/codeql"><img src="https://github.com/muhammad-fiaz/MaaagicUI/actions/workflows/github-code-scanning/codeql/badge.svg" alt="CodeQL"></a>
<a href="https://github.com/muhammad-fiaz/MaaagicUI/actions/workflows/release.yml"><img src="https://github.com/muhammad-fiaz/MaaagicUI/actions/workflows/release.yml/badge.svg" alt="Release"></a>

<a href="https://github.com/muhammad-fiaz/MaaagicUI/"><img src="https://badges.strrl.dev/visits/muhammad-fiaz/MaaagicUI" alt="Visits Badge"></a>

   <br>
  <br>
  <img src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white" alt="Rust">
  <img src="https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF" alt="Tauri">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next JS">
    <br>
    <br>
</div>


Maaagic UI is an all-in-one solution for building modern and feature-rich applications. With Next.js for seamless server-side rendering and Tauri for Large Language Models and stable diffusion like AI Based Applications, this UI empowers developers to create intuitive and efficient user interfaces. Leveraging various large language models, Maaagic UI ensures exceptional performance and flexibility for diverse application needs. Get started with Maaagic UI today and unlock endless possibilities for your projects.


## Table of Contents

- [Maaagic UI](#maaagic-ui)
    - [Getting Started](#getting-started)
    - [Features](#features)
    - [Requirements Used](#requirements-used)
    - [Customization](#customization)
    - [Folder Structure](#folder-structure)
    - [Recommended IDE Setup](#recommended-ide-setup)
    - [License](#license)
    - [Contributing](#contributing)
    - [Code of Conduct](#code-of-conduct)
    - [Support and Thanks](#support-and-thanks)
        - [Star the Project](https://github.com/muhammad-fiaz/MaaagicUI#star-the-project)
        - [Contribute](https://github.com/muhammad-fiaz/MaaagicUI#contribute)
        - [Fork the Project](https://github.com/muhammad-fiaz/MaaagicUI#fork-the-project)
        - [Sponsor on GitHub](https://github.com/muhammad-fiaz/MaaagicUI#sponsor-on-github)

## Getting Started

Clone the repository:

```bash
gh repo clone https://github.com/muhammad-fiaz/MaaagicUI.git
cd MaaagicUI
```


```bash
npm i
npm tauri dev
npm tauri build
```


## Features

- Builtin CivitAI download Store
- Supports Windows, macOS, and Linux
- Support for dark and light modes
- Components-based UI design
- A draggable title bar with minimize, maximize, and close buttons
- A sidebar with a navigation menu
- UI for AI Development
- AI Based Application
- Large Language Models
- Stable Diffusion
- Responsive design
- Customizable theme


## Requirements Used

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (v7 or later) or [pnpm](https://pnpm.io/) (v6 or later)
- [Rust](https://www.rust-lang.org/) (v1.54 or later)
- [Tauri CLI](https://tauri.studio/en/docs/getting-started/intro) (v1.0.0-beta.5 or later)
- [Git](https://git-scm.com/)
- [Next.js](https://nextjs.org/) (v11 or later)
- [Tailwind CSS](https://tailwindcss.com/) (v2.2 or later)
- [TypeScript](https://www.typescriptlang.org/) (v4.4 or later)
- [prettier](https://prettier.io/) (v2.4 or later)
- [ESLint](https://eslint.org/) (v8.0 or later)
- [Cargo](https://doc.rust-lang.org/cargo/) (v1.54 or later)
- [Chakra UI](https://chakra-ui.com/) (v1.6 or later)
- [Chakra Icons](https://chakra-ui.com/docs/media-and-icons/icon) (v1.0 or later)
- [Radix UI](https://www.radix-ui.com/) (v0.3 or later)
- [Lucide Icons](https://lucide.dev/) (v1.0 or later)
- [React Icons](https://react-icons.github.io/react-icons/) (v4.2 or later)
- [shadcn/ui](https://github.com/shadcn/ui) for UI components
- [prisma](https://www.prisma.io/) (v3.0 or later)
- [Python](https://www.python.org/) (v3.9 or later)
- [pip](https://pypi.org/project/pip/) (v21 or later)
- [pipenv](https://pypi.org/project/pipenv/) (v2021.5 or later)
- [Flask](https://flask.palletsprojects.com/) (v2.0 or later) or [FastAPI](https://fastapi.tiangolo.com/) (v0.68 or later)
- [Scss](https://sass-lang.com/) (v1.37 or later)

## Customization

The template can be customized by editing the following files:

- To customize a application settings you can do it from [src-tauri/tauri.conf.json](src-tauri/tauri.conf.json)
- This contains a npm dependencies [package.json](/package.json)
- This contains a cargo dependencies [src-tauri/cargo.toml](src-tauri/Cargo.toml)
- To change the app icon, update `app-icon.png`, and then run `npm tauri icon`. This will automatically generate icon files into _src-tauri/icons_. You can also manually replace the icon files in _src-tauri/icons_.
- To add more components you can use [shadcn/ui](https://ui.shadcn.com/docs/installation/next) for UI components


## Folder Structure

```
.
├── backend                 # Main directory for your Python backend
│   ├── app.py              # Main application file
│   ├── requirements.txt    # Python dependencies
│   └── ...                 # Other Python files and directories
├── prisma                  # Prisma directory
│   └── schema.prisma       # Prisma schema file
├── src                     # Main directory for your frontend source code
│   ├── app                 # Contains your Next.js application
│   ├── assets              # Contains static assets for your project
│   ├── components          # Contains UI components for your project
│   ├── data                # Contains data for your project
│   ├── hooks               # Contains React hooks for your project
│   ├── lib                 # Contains utility functions and libraries used in your project
│   └── styles              # Contains style-related files for your project
├── src-tauri               # Main directory for your backend source code
│   └── icons               # Contains the icons for your application
├── public                  # Contains public assets that will be served by Next.js
├── README.md               # Contains information about your project and how to use it
├── package.json            # Contains the list of npm dependencies for your project
├── tsconfig.json           # Used to specify the root files and the compiler options required to compile the project
├── next.config.js          # Used for configuring Next.js
├── postcss.config.js       # Used for configuring PostCSS
├── prettier.config.js      # Used for configuring Prettier
└── tailwind.config.js      # Used for configuring Tailwind CSS

```

## Recommended IDE Setup
 these are the recommended IDEs for this project:
- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
- [WebStorm](https://www.jetbrains.com/webstorm/) + [Tauri](https://plugins.jetbrains.com/plugin/16459-tauri) + [Rust](https://plugins.jetbrains.com/plugin/8182-rust)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) + [Tauri](https://plugins.jetbrains.com/plugin/16459-tauri) + [Rust](https://plugins.jetbrains.com/plugin/8182-rust)
- [Sublime Text](https://www.sublimetext.com/) + [Tauri](https://packagecontrol.io/packages/Tauri) + [Rust Enhanced](https://packagecontrol.io/packages/Rust%20Enhanced)
- [Atom](https://atom.io/) + [Tauri](https://atom.io/packages/tauri) + [ide-rust](https://atom.io/packages/ide-rust)
- [Jet Brains Rover (Early Access)](https://www.jetbrains.com/rover/) + [Tauri](https://plugins.jetbrains.com/plugin/16459-tauri) + [Rust](https://plugins.jetbrains.com/plugin/8182-rust)


## License

This project is licensed under the GNU General Public License v3.0. See [LICENSE](LICENSE) for the full license text.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have a way to improve this project.

## Code of Conduct

This project and everyone participating in it is governed by the [Maaagic UI Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior by either discussion or issues.

## Support and Thanks

Thank you for using Maaagic UI! Your support means a lot to us. If you encounter any issues or have suggestions for improvement, please don't hesitate to open an issue on GitHub. Your feedback helps us make Maaagic UI even better.

If you'd like to show your appreciation or support further development, here are some ways you can contribute:

- [Star the Project](https://github.com/muhammad-fiaz/MaaagicUI#star-the-project): Show your support by giving the project a star ⭐ on GitHub.
- [Contribute](https://github.com/muhammad-fiaz/MaaagicUI#contribute): If you're interested in contributing to the project, feel free to fork it and submit your changes as a pull request. We welcome contributions of all kinds, from bug fixes to new features.
- [Fork the Project](https://github.com/muhammad-fiaz/MaaagicUI#fork-the-project): If you'd like to contribute to the project, you can fork it and submit your changes as a pull request. We welcome contributions of all kinds, from bug fixes to new features.
- [Sponsor on GitHub](https://github.com/muhammad-fiaz/MaaagicUI#sponsor-on-github): Consider becoming a sponsor on GitHub to provide ongoing financial support. Your sponsorship helps us cover maintenance costs and supports future development efforts.


[![Sponsor muhammad-fiaz](https://img.shields.io/static/v1?label=Sponsor&message=muhammad-fiaz&logo=github&color=green)](https://github.com/sponsors/muhammad-fiaz)



Your contributions, feedback, and support are immensely valuable to us. Thank you for being a part of the Maaagic UI community!
