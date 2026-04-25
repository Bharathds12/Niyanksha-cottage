# Niyanksha Cottage - Property Website

A modern, responsive website for Niyanksha Cottage vacation rental property near Hessarghatta, Bangalore. Features direct booking links to Booking.com and Airbnb.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Photo Gallery** - Interactive image gallery with modal view
- **Direct Booking Links** - Quick access to Booking.com and Airbnb listings
- **SEO Optimized** - Meta tags and structured content for better search visibility
- **Fast Loading** - Optimized images and code for quick page loads
- **Accessibility** - Keyboard navigation and screen reader friendly

## 📁 Project Structure

```
Niyanksha-cottage/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── images/             # Property photos directory
│   └── README.md       # Image guidelines
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Open Locally
1. Download or clone this repository
2. Open `index.html` in your web browser
3. That's it! The website will load with placeholder images

### Option 2: Add Your Images
1. Add your property photos to the `images/` folder with these names:
   - `cottage-exterior.jpg`
   - `exterior-1.jpg`
   - `living-room.jpg`
   - `bedroom.jpg`
   - `kitchen.jpg`
   - `bathroom.jpg`
   - `garden.jpg`
   - `outdoor-seating.jpg`
   - `view.jpg`

2. The website will automatically use your images

## 🌐 Deployment Options

### Option 1: GitHub Pages (FREE & RECOMMENDED)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. Your site will be live at: `https://yourusername.github.io/Niyanksha-cottage`

**Detailed Steps:**
```bash
# From your project directory
git add .
git commit -m "Initial website setup"
git push origin main
```

Then in GitHub:
- Navigate to your repository
- Click "Settings" → "Pages"
- Under "Source", select "main" branch
- Click "Save"
- Your website will be live in a few minutes!

### Option 2: Netlify (FREE)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Click "Deploy site"
6. Your site will be live with a custom URL!

**Bonus**: Netlify provides:
- Automatic deployments on git push
- Free SSL certificate
- Custom domain support
- Form handling

### Option 3: Vercel (FREE)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live

### Option 4: Traditional Web Hosting
If you have traditional web hosting (cPanel, etc.):
1. Upload all files via FTP
2. Ensure `index.html` is in the public_html or www directory
3. Access your domain

## ✏️ Customization

### Update Property Information
Edit `index.html` and update:
- Property name and description
- Amenities list
- Location details
- Contact information

### Update Booking Links
Replace the Booking.com and Airbnb URLs in:
- Hero section buttons (line ~50-60)
- Contact section buttons (line ~280-300)
- Footer links (line ~320-340)

### Change Colors
Edit `styles.css` root variables (line 13-24):
```css
:root {
    --primary-color: #2c5f2d;      /* Main green color */
    --secondary-color: #97bc62;    /* Light green */
    --accent-color: #ff6b35;       /* Orange accent */
    /* ... other colors ... */
}
```

### Modify Google Maps Location
In `index.html`, update the iframe src (line ~260) with your coordinates:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"></iframe>
```

To get your embed code:
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code

## 📝 Content Updates

### Add Airbnb Link
Currently the Airbnb link is set to "#". Update it in three places:
1. Hero section button (line ~56 in index.html)
2. Contact section card (line ~295 in index.html)
3. Footer link (line ~330 in index.html)

### Add More Amenities
In `index.html`, find the amenities grid section and add:
```html
<div class="amenity-card">
    <div class="amenity-icon">🎯</div>
    <h3>Your Amenity</h3>
    <p>Description here</p>
</div>
```

### Add More Gallery Images
In `index.html`, add more gallery items:
```html
<div class="gallery-item">
    <img src="images/your-image.jpg" alt="Description">
    <div class="gallery-overlay">
        <span>Image Title</span>
    </div>
</div>
```

## 🎨 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks needed
- **Google Fonts** - Playfair Display & Poppins

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Lazy loading images
- Optimized animations
- Minimal JavaScript
- No external dependencies

## 📱 Mobile Responsive
The website automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔍 SEO Features
- Meta tags for description and keywords
- Open Graph tags (can be added)
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 📞 Support & Maintenance

### Common Issues

**Images not showing?**
- Check file names match exactly
- Ensure images are in the `images/` folder
- Verify image file extensions (.jpg, .png)

**Links not working?**
- Update Airbnb URL from "#" to actual listing
- Verify Booking.com URL is complete

**Website not loading on hosting?**
- Ensure `index.html` is in root/public_html
- Check file permissions (644 for files, 755 for directories)
- Clear browser cache

## 🎯 Next Steps

1. ✅ Replace placeholder images with real property photos
2. ✅ Add your Airbnb listing URL
3. ✅ Update property description and amenities
4. ✅ Test on mobile devices
5. ✅ Deploy to GitHub Pages/Netlify/Vercel
6. ✅ Share your website URL on social media
7. ✅ Add website link to your Booking.com and Airbnb profiles

## 📄 License
This website template is provided as-is for Niyanksha Cottage.

## 🤝 Contributing
This is a private property website. For issues or improvements, please contact the repository owner.

---

**Built with ❤️ for Niyanksha Cottage**

*Need help? Check GitHub Issues or contact support.*
