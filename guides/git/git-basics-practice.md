# Git & GitHub Practice Exercises

## Exercise 1: Repository Setup and Basic Commands
Create a new repository and practice basic Git commands:

```bash
# 1. Create a new directory and initialize a Git repository
mkdir git-practice
cd git-practice
git init

# 2. Create a README.md file with some content
echo "# Git Practice Repository" > README.md

# 3. Stage and commit the README file
git add README.md
git commit -m "Add README file"

# 4. Create a new file and make changes
echo "console.log('Hello, Git!');" > script.js
git add script.js
git commit -m "Add initial JavaScript file"

# 5. Modify the script.js file and commit the changes
echo "console.log('Hello, Git!');" >> script.js
git add script.js
git commit -m "Add another console.log statement"
```

## Exercise 2: Working with Branches
Practice creating and managing branches:

```bash
# 1. Create a new branch called 'feature'
git checkout -b feature

# 2. Make some changes in the feature branch
echo "// New feature code" >> script.js
git add script.js
git commit -m "Add new feature code"

# 3. Switch back to main branch
git checkout main

# 4. Create another branch called 'bugfix'
git checkout -b bugfix

# 5. Make some changes in the bugfix branch
echo "// Bug fix code" >> script.js
git add script.js
git commit -m "Fix bug in script"

# 6. List all branches
git branch
```

## Exercise 3: Merge Conflicts
Practice resolving merge conflicts:

```bash
# 1. Switch to main branch
git checkout main

# 2. Make changes to script.js
echo "// Main branch changes" >> script.js
git add script.js
git commit -m "Update script in main branch"

# 3. Switch to feature branch
git checkout feature

# 4. Make changes to the same line in script.js
echo "// Feature branch changes" >> script.js
git add script.js
git commit -m "Update script in feature branch"

# 5. Try to merge main into feature
git merge main

# 6. Resolve the conflict in script.js
# Edit the file to resolve conflicts
git add script.js
git commit -m "Resolve merge conflicts"
```

## Exercise 4: Remote Repository Operations
Practice working with remote repositories:

```bash
# 1. Create a new repository on GitHub
# (Do this manually through GitHub's web interface)

# 2. Add the remote repository
git remote add origin https://github.com/yourusername/git-practice.git

# 3. Push your main branch to GitHub
git push -u origin main

# 4. Push your feature branch to GitHub
git checkout feature
git push -u origin feature

# 5. Pull changes from remote
git checkout main
git pull origin main
```

## Exercise 5: Advanced Git Operations
Practice more advanced Git operations:

```bash
# 1. View commit history
git log --oneline

# 2. Create a tag for a release
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0

# 3. Stash changes
echo "// Temporary changes" >> script.js
git stash save "Temporary changes"

# 4. Apply stashed changes
git stash pop

# 5. Reset to a previous commit
git reset --soft HEAD~1
```

## Exercise 6: Collaboration Workflow
Practice a typical collaboration workflow:

```bash
# 1. Fork a repository on GitHub
# (Do this manually through GitHub's web interface)

# 2. Clone your fork
git clone https://github.com/yourusername/forked-repo.git
cd forked-repo

# 3. Add the original repository as upstream
git remote add upstream https://github.com/original-owner/repo.git

# 4. Create a feature branch
git checkout -b feature/new-feature

# 5. Make changes and commit
echo "// New feature" >> script.js
git add script.js
git commit -m "Add new feature"

# 6. Push to your fork
git push origin feature/new-feature

# 7. Create a pull request
# (Do this manually through GitHub's web interface)
```

## Solutions

### Exercise 1 Solution
```bash
# 1. Create and initialize repository
mkdir git-practice
cd git-practice
git init

# 2. Create README
echo "# Git Practice Repository" > README.md

# 3. First commit
git add README.md
git commit -m "Add README file"

# 4. Create and commit script.js
echo "console.log('Hello, Git!');" > script.js
git add script.js
git commit -m "Add initial JavaScript file"

# 5. Modify and commit changes
echo "console.log('Hello, Git!');" >> script.js
git add script.js
git commit -m "Add another console.log statement"
```

### Exercise 2 Solution
```bash
# 1. Create feature branch
git checkout -b feature

# 2. Make changes in feature branch
echo "// New feature code" >> script.js
git add script.js
git commit -m "Add new feature code"

# 3. Switch to main
git checkout main

# 4. Create bugfix branch
git checkout -b bugfix

# 5. Make changes in bugfix branch
echo "// Bug fix code" >> script.js
git add script.js
git commit -m "Fix bug in script"

# 6. List branches
git branch
```

### Exercise 3 Solution
```bash
# 1. Switch to main
git checkout main

# 2. Make changes in main
echo "// Main branch changes" >> script.js
git add script.js
git commit -m "Update script in main branch"

# 3. Switch to feature
git checkout feature

# 4. Make changes in feature
echo "// Feature branch changes" >> script.js
git add script.js
git commit -m "Update script in feature branch"

# 5. Merge main into feature
git merge main

# 6. Resolve conflicts
# Edit script.js to resolve conflicts
git add script.js
git commit -m "Resolve merge conflicts"
```

### Exercise 4 Solution
```bash
# 1. Add remote
git remote add origin https://github.com/yourusername/git-practice.git

# 2. Push main branch
git push -u origin main

# 3. Push feature branch
git checkout feature
git push -u origin feature

# 4. Pull changes
git checkout main
git pull origin main
```

### Exercise 5 Solution
```bash
# 1. View history
git log --oneline

# 2. Create tag
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0

# 3. Stash changes
echo "// Temporary changes" >> script.js
git stash save "Temporary changes"

# 4. Apply stash
git stash pop

# 5. Reset
git reset --soft HEAD~1
```

### Exercise 6 Solution
```bash
# 1. Clone fork
git clone https://github.com/yourusername/forked-repo.git
cd forked-repo

# 2. Add upstream
git remote add upstream https://github.com/original-owner/repo.git

# 3. Create feature branch
git checkout -b feature/new-feature

# 4. Make changes
echo "// New feature" >> script.js
git add script.js
git commit -m "Add new feature"

# 5. Push to fork
git push origin feature/new-feature
```

[Return to Git Basics Guide →](./git-basics.md) 