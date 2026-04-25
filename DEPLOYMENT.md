# 🚀 Deployment Guide - Niyanksha Cottage Website

## Step-by-Step Deployment to GitHub Pages (EASIEST)

### Prerequisites
- GitHub account
- Git installed on your computer
- This website repository

### Step 1: Push to GitHub
```bash
# Check current status
git status

# Add all files
git add .

# Commit changes
git commit -m "Add complete website with gallery and booking links"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository: https://github.com/Bharathds12/Niyanksha-cottage
2. Click on **"Settings"** (top navigation)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**:
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **"Save"**
6. Wait 2-3 minutes

### Step 3: Access Your Website
Your website will be available at:
```
https://bharathds12.github.io/Niyanksha-cottage/
```

### Step 4: Add Custom Domain (Optional)
If you have a custom domain (e.g., niyankshacottage.com):

1. In GitHub Pages settings, enter your domain in "Custom domain"
2. Add these DNS records in your domain registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: bharathds12.github.io
   ```
3. Check "Enforce HTTPS" in GitHub Pages settings

---

## Alternative: Deploy to Netlify (More Features)

### Why Netlify?
- Faster deployments
- Better custom domain support
- Form handling
- Free SSL
- Continuous deployment

### Steps:
1. Go to https://www.netlify.com/
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub" and authorize
5. Select repository: `Niyanksha-cottage`
6. Click "Deploy site"
7. Your site will be live at: `random-name-123.netlify.app`
8. Change site name in Settings → Site details → Change site name

### Custom Domain on Netlify:
1. Go to Domain settings
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS configuration instructions
5. SSL will be automatically configured

---

## Alternative: Deploy to Vercel

### Steps:
1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click "New Project"
4. Import `Niyanksha-cottage` repository
5. Click "Deploy"
6. Site live at: `niyanksha-cottage.vercel.app`

---

## Updating Your Website

### After Making Changes:
```bash
# Save your changes
git add .
git commit -m "Update property information"
git push origin main
```

Your website will automatically update!

---

## Before Going Live Checklist

### Content
- [ ] Add real property photos to `images/` folder
- [ ] Update property description in `index.html`
- [ ] Add Airbnb listing URL (replace all "#" placeholders)
- [ ] Verify Booking.com link works
- [ ] Update location/address information
- [ ] Check all amenities are accurate
- [ ] Add contact information if needed

### Technical
- [ ] Test website on mobile phone
- [ ] Test website on tablet
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Check all images load correctly
- [ ] Verify all links work
- [ ] Test gallery modal functionality
- [ ] Check mobile menu works

### SEO & Marketing
- [ ] Update meta description in `index.html`
- [ ] Add website link to Booking.com profile
- [ ] Add website link to Airbnb profile
- [ ] Share on social media
- [ ] Add to Google My Business

---

## Adding Real Property Photos

### Best Practices:
1. **Image Sizes**: 1200px - 1920px width
2. **File Size**: Compress to under 500KB per image
3. **Format**: JPG for photos, PNG for logos
4. **Names**: Use exact names from `images/README.md`

### Required Photos:
```
images/
├── cottage-exterior.jpg    (main exterior view)
├── exterior-1.jpg          (another angle)
├── living-room.jpg         (living area)
├── bedroom.jpg             (bedroom)
├── kitchen.jpg             (kitchen)
├── bathroom.jpg            (bathroom)
├── garden.jpg              (garden/outdoor)
├── outdoor-seating.jpg     (patio/deck)
└── view.jpg                (scenic view)
```

### Image Compression Tools:
- **TinyPNG**: https://tinypng.com/ (drag & drop)
- **ImageOptim**: https://imageoptim.com/ (Mac app)
- **Squoosh**: https://squoosh.app/ (web-based)

---

## Troubleshooting

### Website Not Loading After Deployment
1. Wait 5-10 minutes (first deployment takes time)
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check if repository is public
4. Verify GitHub Pages is enabled

### Images Not Showing
1. Check image file names match exactly
2. Ensure images are in `images/` folder
3. File names are case-sensitive
4. Push images to GitHub: `git add images/ && git commit -m "Add photos" && git push`

### Mobile Menu Not Working
1. Clear browser cache
2. Check JavaScript is enabled
3. Test in incognito/private mode

### Changes Not Appearing
1. Push changes to GitHub
2. Wait 1-2 minutes
3. Hard refresh browser (Ctrl+Shift+R)
4. Check GitHub Actions completed successfully

---

## Performance Tips

### After Adding Real Photos:
1. Compress all images before uploading
2. Use WebP format for better compression (optional)
3. Enable lazy loading (already implemented)

### Speed Test:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

---

## Getting Help

### Common Questions:
**Q: How do I get my Airbnb link?**
A: Go to your Airbnb listing → Share → Copy link

**Q: Can I use my own domain?**
A: Yes! Follow the custom domain instructions above

**Q: Is it really free?**
A: Yes! GitHub Pages, Netlify, and Vercel all have free tiers

**Q: How do I update the website?**
A: Edit files, commit, and push to GitHub. It updates automatically!

---

## Need More Help?
- GitHub Pages Docs: https://docs.github.com/pages
- Netlify Docs: https://docs.netlify.com/
- Contact: Create an issue in the GitHub repository

---

**Ready to Deploy? Start with Step 1 above! 🚀**
