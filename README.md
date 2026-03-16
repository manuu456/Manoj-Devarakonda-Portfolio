# My Portfolio Website - Overview 🚀

This repository contains the open source version of my portfolio website.
Do check it out!

## Instructions 🛠️

I have modified the gsap club plugins with the trial plugins, but with the trial plugin you cannot host it🔴. So for Club plugins, Check out here: https://gsap.com/docs/v3/Installation/

**Techstack** - React, TypeScript, GSAP, ThreeJS, WebGL, HTML, Css, JavaScript

![Portfolio-Preview](public/images/preview.png)

## Using Claude AI Models in VS Code 🤖

To use **Claude** (e.g. Claude Opus 4, Claude Sonnet 4) in VS Code for this project, follow the steps below.

### Option 1 — GitHub Copilot (Recommended) ✅

GitHub Copilot natively supports Claude models. This is the easiest and recommended approach.

1. **Get a GitHub Copilot subscription**
   - Sign up at <https://github.com/features/copilot>
   - Individual, Business, and Enterprise plans are available.
   - Free-tier users get limited Copilot access that includes Claude model usage.

2. **Install the VS Code extensions**
   - Open VS Code and install **GitHub Copilot** (`GitHub.copilot`) and **GitHub Copilot Chat** (`GitHub.copilot-chat`) from the Extensions Marketplace.
   - This repo includes `.vscode/extensions.json` so VS Code will prompt you to install them automatically.

3. **Select the Claude model**
   - Open **Copilot Chat** (click the chat icon in the sidebar or press `Ctrl+Shift+I` / `Cmd+Shift+I`).
   - At the bottom of the chat panel, click the **model picker** dropdown.
   - Choose a Claude model such as **Claude Sonnet 4** or **Claude Opus 4** from the list.

4. **Start coding** — Ask questions, generate code, get inline suggestions, and use Copilot agent mode, all powered by Claude.

### Option 2 — GitHub Copilot CLI

If you prefer using the terminal:

1. Install the [GitHub CLI](https://cli.github.com/) and the Copilot extension:
   ```bash
   gh extension install github/gh-copilot
   ```
2. Use it from the terminal:
   ```bash
   gh copilot suggest "create a React component for a contact form"
   gh copilot explain "what does this gsap animation do"
   ```

> **Note:** The CLI uses the model configured in your GitHub Copilot settings. You can set your preferred model (including Claude) at <https://github.com/settings/copilot>.

### Option 3 — Third-Party Extensions (API Key Required)

If you don't have GitHub Copilot, you can use Claude via third-party VS Code extensions with an Anthropic API key:

| Extension | How to Set Up |
|-----------|---------------|
| [Continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue) | Install → Add Anthropic provider in `~/.continue/config.json` with your API key |
| [Cline](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev) | Install → Enter your Anthropic API key in the extension settings |

Get an API key at <https://console.anthropic.com/>.

### Which Option Should You Choose?

| Criteria | GitHub Copilot | Copilot CLI | Third-Party Extension |
|----------|---------------|-------------|----------------------|
| Easiest setup | ✅ | ✅ | ❌ (needs API key) |
| Inline code suggestions | ✅ | ❌ | ✅ |
| Chat / agent mode | ✅ | ❌ | ✅ |
| Terminal assistance | ❌ | ✅ | ❌ |
| Free option available | ✅ (limited) | ✅ (limited) | ❌ (pay-per-use API) |

**Recommendation:** Use **GitHub Copilot** (Option 1) for the best integrated experience with Claude models in VS Code.

## License

This project is open source and available under the [MIT License](LICENSE).
