# Git & GitHub Basics

## Introduction
Git is a distributed version control system that helps developers track changes in their code and collaborate with others. GitHub is a web-based platform that hosts Git repositories and provides additional collaboration features.

## Why Git & GitHub Matter
1. **Version Control**: Track changes and maintain history
2. **Collaboration**: Work with others on the same codebase
3. **Backup**: Keep your code safe and accessible
4. **Branching**: Work on features without affecting the main code

## Basic Git Concepts

### Repository
A repository (repo) is a storage location for your project files and their complete history.

### Commit
A commit is a snapshot of your changes at a specific point in time.

### Branch
A branch is a separate line of development that allows you to work on features without affecting the main code.

### Remote
A remote is a version of your repository hosted on another server (like GitHub).

## Getting Started

### Installation
1. Download Git from [git-scm.com](https://git-scm.com)
2. Install and configure your identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Creating a Repository
```bash
# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git
```

## Basic Git Commands

### Checking Status
```bash
# Check repository status
git status

# View commit history
git log
```

### Making Changes
```bash
# Stage changes
git add filename.txt
git add .  # Stage all changes

# Commit changes
git commit -m "Description of changes"

# Stage and commit in one command
git commit -am "Description of changes"
```

### Working with Branches
```bash
# Create a new branch
git branch feature-name

# Switch to a branch
git checkout feature-name

# Create and switch in one command
git checkout -b feature-name

# List all branches
git branch
```

### Remote Operations
```bash
# Add a remote repository
git remote add origin https://github.com/username/repository.git

# Push changes to remote
git push origin branch-name

# Pull changes from remote
git pull origin branch-name

# Fetch changes without merging
git fetch origin
```

## GitHub Features

### Repository Management
1. **README**: Project documentation
2. **Issues**: Track bugs and feature requests
3. **Pull Requests**: Propose changes to other repositories
4. **Projects**: Organize work with boards
5. **Actions**: Automate workflows

### Collaboration
1. **Forking**: Create your copy of a repository
2. **Branching**: Work on features separately
3. **Pull Requests**: Request changes to be merged
4. **Code Review**: Review and discuss changes
5. **Merging**: Combine changes into the main code

## Best Practices

### 1. Commit Messages
- Be descriptive and concise
- Use present tense
- Start with a capital letter
- Limit to 50 characters for the first line

### 2. Branching Strategy
- Use meaningful branch names
- Keep branches short-lived
- Delete branches after merging
- Use feature branches for new features

### 3. Collaboration
- Pull before pushing
- Review code before merging
- Keep commits focused and atomic
- Use pull requests for changes

## Common Workflows

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request on GitHub
```

### 2. Bug Fix
```bash
# Create bugfix branch
git checkout -b fix/bug-description

# Fix the bug and commit
git add .
git commit -m "Fix bug description"

# Push and create pull request
git push origin fix/bug-description
```

### 3. Updating Your Repository
```bash
# Get latest changes
git fetch origin

# Update your branch
git pull origin main

# Resolve conflicts if any
git add .
git commit -m "Resolve merge conflicts"
```

## Common Pitfalls

### 1. Losing Changes
```bash
# Recover lost changes
git reflog
git checkout <commit-hash>
```

### 2. Wrong Commit Message
```bash
# Amend last commit
git commit --amend -m "New commit message"
```

### 3. Accidental Commits
```bash
# Undo last commit
git reset HEAD~1

# Discard changes
git checkout -- filename.txt
```

## Practice Exercises
1. Create and manage repositories
2. Work with branches
3. Handle merge conflicts
4. Collaborate with others

[Continue to Practice Exercises →](./git-basics-practice.md) 