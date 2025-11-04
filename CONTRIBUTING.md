# 🤝 Contributing to Hacktoberfest HTML/CSS/JS

First off, thank you for considering contributing to this project! It's people like you that make open source such a great community. 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the maintainers.

## 🚀 Getting Started

### Prerequisites

- Git installed on your local machine
- GitHub account
- Basic knowledge of HTML, CSS, JavaScript (depending on contribution area)
- Text editor or IDE (VS Code recommended)

### First Time Contributors

New to open source? Check these resources:
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

## 💡 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (browser, OS, etc.)

**Use the bug report template when creating an issue.**

### ✨ Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide detailed description** of the proposed feature
- **Explain why this enhancement would be useful**
- **Include mockups or examples** if applicable

### 📝 Contributing Code

#### Areas You Can Contribute To:

1. **HTML Components** (`html/`)
   - Responsive layouts
   - Accessible components
   - Modern HTML5 features

2. **CSS Styling** (`css/`)
   - Animations and transitions
   - Responsive designs
   - Theme implementations

3. **JavaScript Features** (`js/`)
   - Interactive components
   - Utility functions
   - API integrations

4. **DSA Implementations**
   - `dsa_in_js/` - JavaScript
   - `dsa_in_cpp/` - C++
   - `dsa_in_java/` - Java

5. **Design Patterns** (`design_patterns/`)
   - Pattern implementations
   - Real-world examples

6. **Tools & Utilities** (`tools/`)
   - Development tools
   - Helper scripts

7. **Documentation**
   - README improvements
   - Code comments
   - Tutorials and guides

## 🔄 Development Workflow

### Step 1: Get Assigned

**⚠️ IMPORTANT: Before starting work, create an issue and get assigned by a maintainer.**

```bash
# Create an issue describing what you want to work on
# Wait for maintainer approval and assignment
```

### Step 2: Fork and Clone

```bash
# Fork the repository on GitHub
# Clone your fork locally
git clone https://github.com/YOUR-USERNAME/Hacktoberfest-Html_CSS_JS.git
cd Hacktoberfest-Html_CSS_JS
```

### Step 3: Create a Branch

```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Branch naming conventions:
# feature/add-carousel-component
# fix/navigation-bug
# docs/update-readme
# refactor/optimize-css
```

### Step 4: Make Changes

- Write clean, readable code
- Follow the project's coding standards
- Add comments where necessary
- Test your changes thoroughly

### Step 5: Commit Changes

```bash
# Stage your changes
git add .

# Commit with a meaningful message
git commit -m "feat: add responsive carousel component"
```

### Step 6: Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name

# Go to GitHub and create a Pull Request
```

## 🎨 Style Guidelines

### HTML Style Guide

```html
<!-- Use semantic HTML5 elements -->
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
    </ul>
  </nav>
</header>

<!-- Proper indentation (2 spaces) -->
<!-- Self-closing tags with space before / -->
<img src="image.jpg" alt="Description" />

<!-- Lowercase attributes and element names -->
<!-- Double quotes for attribute values -->
```

### CSS Style Guide

```css
/* Use meaningful class names */
.navigation-menu {
  display: flex;
  justify-content: space-between;
}

/* Group related properties */
.card {
  /* Positioning */
  position: relative;
  
  /* Display & Box Model */
  display: flex;
  padding: 1rem;
  margin: 1rem 0;
  
  /* Typography */
  font-size: 1rem;
  
  /* Visual */
  background-color: #fff;
  border-radius: 8px;
}

/* Use CSS variables for consistency */
:root {
  --primary-color: #007bff;
  --spacing-unit: 8px;
}
```

### JavaScript Style Guide

```javascript
// Use camelCase for variables and functions
const userName = 'John';

// Use PascalCase for classes
class UserProfile {
  constructor(name) {
    this.name = name;
  }
}

// Use const for constants
const MAX_USERS = 100;

// Add JSDoc comments for functions
/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

// Use arrow functions for callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

// Use template literals for string interpolation
console.log(`User ${userName} logged in`);
```

### General Guidelines

- ✅ **Write self-documenting code** with clear variable and function names
- ✅ **Add comments** for complex logic
- ✅ **Keep functions small** and focused on a single task
- ✅ **Use meaningful commit messages**
- ✅ **Test your code** before submitting
- ✅ **Follow DRY principle** (Don't Repeat Yourself)

## 📝 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(css): add dark mode theme
fix(js): resolve navigation menu bug on mobile
docs: update contributing guidelines
style(html): format code with prettier
refactor(dsa): optimize binary search algorithm
```

## 🔀 Pull Request Process

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated (if applicable)
- [ ] No console errors or warnings
- [ ] Changes tested thoroughly

### PR Title Format

```
feat: Add responsive navigation menu
fix: Resolve mobile menu overlay issue
docs: Update installation instructions
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
```

### Review Process

1. Maintainers will review your PR within 2-3 days
2. Address any requested changes
3. Once approved, your PR will be merged
4. Add yourself to `Contributor.md`

## 🎯 What NOT to Do

- ❌ Don't submit PRs without getting assigned to an issue
- ❌ Don't make multiple unrelated changes in one PR
- ❌ Don't submit spam or low-quality PRs
- ❌ Don't copy code without understanding it
- ❌ Don't ignore maintainer feedback
- ❌ Don't submit plagiarized content

## 👥 Community

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Pull Requests**: Code contributions and reviews

### Getting Help

- Check existing issues and documentation first
- Create a new issue with detailed information
- Tag maintainers if urgent: @HarshitPachori @ayushHardeniya

## 🏆 Recognition

All contributors will be:
- Added to the Contributors list
- Featured on the README
- Credited in release notes (for significant contributions)

## 📚 Additional Resources

- [Project README](README.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Repository Structure](REPOSITORY_STRUCTURE.md)
- [Security Policy](SECURITY.md)

## 🎉 Thank You!

Your contributions make this project better for everyone. Happy coding! 🚀

---

**Questions?** Feel free to reach out to the maintainers:
- Harshit Pachori - [@HarshitPachori](https://github.com/HarshitPachori)
- Ayush Sharma - [@ayushHardeniya](https://github.com/ayushHardeniya)