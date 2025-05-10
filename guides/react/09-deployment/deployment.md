# React Deployment

## Introduction
Deploying a React application involves building the app for production and hosting it on a server. This guide covers various deployment techniques and best practices.

## Building for Production

### Basic Build
Create a production build using Create React App:

```bash
npm run build
```

This creates a `build` directory with optimized files:
- Minified JavaScript
- Minified CSS
- Optimized assets
- Source maps (optional)

### Environment Variables
Configure environment variables for different environments:

```bash
# .env.development
REACT_APP_API_URL=http://localhost:3000

# .env.production
REACT_APP_API_URL=https://api.example.com
```

Use them in your code:

```jsx
const apiUrl = process.env.REACT_APP_API_URL;
```

## Deployment Options

### 1. Static Hosting
Deploy to static hosting services:

#### Netlify
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

#### Vercel
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### 2. Cloud Platforms
Deploy to cloud platforms:

#### AWS Amplify
1. Install Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Initialize and deploy:
```bash
amplify init
amplify push
```

#### Google Cloud Platform
1. Install Google Cloud SDK
2. Deploy to App Engine:
```bash
gcloud app deploy
```

### 3. Traditional Hosting
Deploy to traditional web servers:

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache Configuration
```apache
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/html

    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

## Build Optimization

### 1. Code Splitting
Implement code splitting for better performance:

```jsx
import React, { lazy, Suspense } from 'react';

const TodoList = lazy(() => import('./TodoList'));
const TodoForm = lazy(() => import('./TodoForm'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList />
      <TodoForm />
    </Suspense>
  );
}
```

### 2. Asset Optimization
Optimize images and other assets:

```jsx
// Use responsive images
<img
  srcSet="small.jpg 300w, medium.jpg 600w, large.jpg 900w"
  sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
  src="medium.jpg"
  alt="Responsive image"
/>

// Use WebP format with fallback
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Fallback image" />
</picture>
```

### 3. Caching
Implement caching strategies:

```nginx
# Nginx caching configuration
location /static/ {
    expires 1y;
    add_header Cache-Control "public, no-transform";
}

location / {
    expires -1;
    add_header Cache-Control "no-store, no-cache, must-revalidate";
}
```

## Deployment Best Practices

### 1. Environment Configuration
- Use environment variables
- Keep sensitive data secure
- Configure different environments

```jsx
// config.js
const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  environment: process.env.NODE_ENV,
  analytics: process.env.REACT_APP_ANALYTICS_ID
};

export default config;
```

### 2. Error Monitoring
- Set up error tracking
- Monitor performance
- Log important events

```jsx
// errorTracking.js
export function trackError(error, context) {
  // Send to error tracking service
  errorTrackingService.log({
    error,
    context,
    timestamp: new Date(),
    environment: process.env.NODE_ENV
  });
}
```

### 3. Security
- Enable HTTPS
- Set security headers
- Implement CSP

```nginx
# Nginx security headers
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" always;
```

## Common Issues and Solutions

### 1. Build Failures
If your build fails:
- Check for syntax errors
- Verify dependencies
- Check environment variables

### 2. Performance Issues
If your app is slow:
- Implement code splitting
- Optimize assets
- Use caching

### 3. Deployment Errors
If deployment fails:
- Check build logs
- Verify configuration
- Test locally first

## Next Steps
Now that you understand deployment, you can:
1. Set up CI/CD pipelines
2. Implement monitoring
3. Optimize performance
4. Move on to learning about [Advanced Topics](../10-advanced/advanced.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Deploy to a static host
2. Set up environment variables
3. Implement caching
4. Build a production-ready todo app

Check out the [practice file](./deployment-practice.js) for more exercises and examples. 