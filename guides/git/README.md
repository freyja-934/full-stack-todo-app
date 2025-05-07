# Git & GitHub Learning Guide

## Learning Path

This guide is designed to take you from Git basics to practical usage in a structured way:

### 1. Git Basics
- Understanding version control
- Basic Git commands
- Working with repositories
- Making and managing commits

### 2. Branching & Collaboration
- Creating and managing branches
- Working with remote repositories
- Resolving merge conflicts
- Collaboration workflows

### 3. Advanced Operations
- Stashing changes
- Tagging releases
- Resetting and reverting
- Advanced Git workflows

## Guide Structure

### 1. [Git Basics](./git-basics.md)
- Introduction to Git and GitHub
- Setting up your environment
- Basic commands and concepts
- Working with repositories
- Best practices

### 2. [Git Practice](./git-basics-practice.md)
- Repository setup exercises
- Branch management practice
- Merge conflict resolution
- Remote repository operations
- Collaboration workflows

## Getting Started

### Prerequisites
- A computer with Git installed
- A GitHub account
- Basic command line knowledge

### First Steps
1. Install Git from [git-scm.com](https://git-scm.com)
2. Configure your Git identity
3. Create a GitHub account
4. Start with the basics guide

## Essential Concepts

### 1. Version Control
- Track changes in your code
- Maintain project history
- Collaborate with others
- Revert to previous versions

### 2. Repository Management
- Local repositories
- Remote repositories
- Cloning and forking
- Pushing and pulling

### 3. Branching Strategy
- Feature branches
- Bug fix branches
- Release branches
- Main/master branch

## Best Practices

### 1. Commit Messages
- Be descriptive and concise
- Use present tense
- Start with a capital letter
- Limit to 50 characters for the first line

### 2. Branching
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

## Next Steps

After completing these guides, you should:
1. Be comfortable with basic Git commands
2. Understand branching and merging
3. Know how to collaborate using GitHub
4. Be ready to use Git in your projects

[Start with Git Basics](./git-basics.md) 