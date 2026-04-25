# ⚡ Quick Start Guide

## 🎯 Get Your Website Live in 5 Minutes!

### Step 1: Add Your Photos (2 minutes)
1. Gather 9 good photos of your cottage
2. Rename them to match these exact names:
   - `cottage-exterior.jpg`
   - `exterior-1.jpg`
   - `living-room.jpg`
   - `bedroom.jpg`
   - `kitchen.jpg`
   - `bathroom.jpg`
   - `garden.jpg`
   - `outdoor-seating.jpg`
   - `view.jpg`
3. Copy them to the `images/` folder
4. (Optional) Compress them at https://tinypng.com/

### Step 2: Add Your Airbnb Link (30 seconds)
1. Open `index.html` in any text editor
2. Press Ctrl+F (or Cmd+F on Mac)
3. Search for: `href="#" target="_blank" class="btn btn-secondary"`
4. Replace the `#` with your Airbnb listing URL
5. Do this for all 3 occurrences (around lines 56, 295, 330)
6. Save the file

### Step 3: Deploy to GitHub Pages (2 minutes)
Run these commands in Terminal/Command Prompt:
```bash
git add .
git commit -m "Add photos and complete website"
git push origin main
```

Then:
1. Go to https://github.com/Bharathds12/Niyanksha-cottage/settings/pages
2. Under "Source", select "main" branch
3. Click "Save"
4. Wait 2-3 minutes
5. Visit: https://bharathds12.github.io/Niyanksha-cottage/

**🎉 Done! Your website is now live!**

---

## 📋 What You Have Now

✅ Modern, professional website  
✅ Mobile-responsive design  
✅ Interactive photo gallery  
✅ Direct booking links to Booking.com & Airbnb  
✅ Google Maps integration  
✅ Fast loading & SEO optimized  

---

## 🔄 Making Changes Later

### Update Text:
1. Edit `index.html`
2. Save
3. Run: `git add . && git commit -m "Update text" && git push`

### Add More Photos:
1. Add images to `images/` folder
2. Edit gallery section in `index.html`
3. Push to GitHub

---

## 🎨 Optional Customizations

### Change Colors:
Edit `styles.css` at the top (lines 13-24):
```css
--primary-color: #2c5f2d;      /* Change to your color */
--secondary-color: #97bc62;    /* Light version */
```

### Update Property Name:
Search and replace "Niyanksha Cottage" in `index.html`

### Add More Amenities:
Copy-paste an amenity card in `index.html` and edit

---

## 🆘 Need Help?

### Website Not Showing?
- Wait 5 minutes after first deployment
- Clear browser cache (Ctrl+Shift+R)
- Check https://github.com/Bharathds12/Niyanksha-cottage/settings/pages

### Images Not Loading?
- Check file names match exactly (case-sensitive!)
- Ensure images are in `images/` folder
- Push images: `git add images/ && git commit -m "Add images" && git push`

### Airbnb Link Not Working?
- Make sure you replaced ALL occurrences of `href="#"`
- Check the link works when you paste it in a browser

---

## 📱 Share Your Website

Once live, share your website:
- Add to your Booking.com property description
- Add to your Airbnb listing description
- Share on social media
- Add to Google My Business
- Print on business cards

Your website URL will be:
```
https://bharathds12.github.io/Niyanksha-cottage/
```

---

## 🚀 Pro Tips

1. **Test on Mobile**: Open website on your phone and test everything
2. **Ask for Feedback**: Share with friends before going public
3. **Update Regularly**: Add new photos as seasons change
4. **Monitor Performance**: Check Google PageSpeed Insights
5. **Track Visitors**: Add Google Analytics (optional)

---

## ✅ Pre-Launch Checklist

Before sharing your website publicly:

- [ ] All 9 photos added and loading correctly
- [ ] Airbnb link works (click to test)
- [ ] Booking.com link works
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Check in Chrome, Safari, and Firefox
- [ ] Read through all text for typos
- [ ] Verify contact information is correct
- [ ] Test gallery (click images)
- [ ] Test mobile menu
- [ ] Share with family for feedback

---

**Ready? Start with Step 1 above! You've got this! 💪**

Need the full deployment guide? Check [DEPLOYMENT.md](DEPLOYMENT.md)
