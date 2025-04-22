# Shirini Sweets - Persian Cookie Business Website

A responsive and beautifully designed website for Shirini Sweets, a Persian cookie business. The website showcases traditional Persian cookies with elegant design elements and smooth animations.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Beautiful Persian-inspired design elements and color scheme
- Smooth animations and transitions
- Cookie display with descriptions and ingredients
- Contact form for order requests
- Mobile-friendly navigation

## Site Structure

The website consists of four main sections:

1. **Home** - Hero section with main call-to-action
2. **About** - The story behind Shirini Sweets
3. **Cookies** - Showcase of cookie varieties
4. **Contact** - Order form and contact information

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling with responsive design
- `script.js` - JavaScript functionality for animations and interactions
- Images folder - Contains all website images

## Getting Started

### Prerequisites

No special tools are required to edit this website. You'll need:

- A code editor (recommended: Visual Studio Code, which is free)
- A GitHub account

### Local Development

To work on this website locally:

1. Clone or download this repository to your computer
2. Open the files in your code editor
3. Preview changes by opening `index.html` in your web browser

## Deployment Instructions for GitHub Pages

### Step 1: Create a GitHub Account (if you don't have one)

1. Go to [GitHub](https://github.com/) and sign up for an account
2. Verify your email address

### Step 2: Create a New Repository

1. Click the "+" icon in the top right corner and select "New repository"
2. Name your repository `shirini-sweets` (or any name you prefer)
3. Make sure it's set to "Public"
4. Click "Create repository"

### Step 3: Upload Your Website Files

#### Option 1: Using the GitHub Website (Easiest for Beginners)

1. In your newly created repository, click "uploading an existing file"
2. Drag and drop all your website files and folders
3. Write a commit message like "Initial website upload"
4. Click "Commit changes"

#### Option 2: Using Git Command Line (Advanced)

1. Install [Git](https://git-scm.com/downloads) on your computer
2. Open a terminal or command prompt
3. Navigate to your website folder
4. Run the following commands:

```bash
git init
git add .
git commit -m "Initial website upload"
git remote add origin https://github.com/YOUR-USERNAME/shirini-sweets.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, go to "Settings"
2. Scroll down to the "GitHub Pages" section
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for your site to deploy
6. GitHub will provide you with a URL (usually https://YOUR-USERNAME.github.io/shirini-sweets)

### Step 5: Using a Custom Domain (Optional)

If you purchase a custom domain (like shirinisweets.com):

1. In your repository, go to "Settings" > "Pages"
2. Under "Custom domain", enter your domain name
3. Click "Save"
4. Follow your domain registrar's instructions to point your domain to GitHub Pages

## Making Updates

To update your website:

1. Make changes to the files locally
2. Upload the changed files following the same steps as above
3. Your site will automatically update

## Adding Images

1. Create an "images" folder in your repository (if not already there)
2. Upload your image files to this folder
3. Reference them in your HTML using: `<img src="images/your-image.jpg">`

## Tips for Customization

### Changing Content

- Edit the text in `index.html` to change what appears on the website
- To add a new cookie, copy an existing cookie-card div and modify its content

### Changing Colors

The Persian color scheme is defined in CSS variables at the top of the `styles.css` file:

```css
:root {
    --primary-color: #c45c5b;      /* Persian red/coral */
    --secondary-color: #255957;    /* Deep teal green */
    --accent-color: #e4a062;       /* Saffron gold */
    --light-accent: #f9efe6;       /* Light cream */
    --dark-color: #362d27;         /* Deep brown */
    /* ... more variables ... */
}
```

Change these values to update the color scheme throughout the entire site.

### Images

For best results:
- Cookie images should be square or slightly rectangular
- Save images in JPG or PNG format
- Compress images for web to keep the site loading fast

## Support and Questions

If you need help with your website, feel free to:
- Check GitHub's documentation on GitHub Pages
- Search for solutions on web development forums
- Hire a web developer for complex customizations

## License

This website template is for your personal use for your business.

---

Good luck with your Persian cookie business! 🍪