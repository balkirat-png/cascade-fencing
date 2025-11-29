# Website Corrections - Fix Location-Specific Headers and Form Fields

## Overview

Multiple issues need to be corrected across the site related to overly location-specific headings, form field requirements, and one image orientation issue. These changes will make the site more welcoming to visitors from all service areas, not just Sumner.

---

## Issue 1: Remove "in Sumner, WA" from Service Page Headings

**Problem:** 
Service pages and fence type pages currently have location-specific headings like "Professional Wood Fence Installation in Sumner, Pierce County" or "Cedar Privacy Fence Installation in Sumner, WA." This can discourage visitors from other cities (Bonney Lake, Puyallup, etc.) from thinking you serve them.

**Fix Required:**

### Main Service Pages:

**Wood Fence Installation Page:**
- Current H1: "Professional Wood Fence Installation in Sumner, Pierce County"
- **Change to:** "Expert Wood Fence Installation"
- Remove "in Sumner, Pierce County" entirely from the hero heading
- You can still mention Sumner in the body content/introduction, but the main H1 should be general

**Wood Fence Repair Page:**
- Current H1: "Wood Fence Repair in Sumner, WA" (or similar)
- **Change to:** "Wood Fence Repair Services"
- Remove location specificity from the main heading

### Fence Type Pages (All 6 Pages):

Update the H1 headings on these pages to remove "in Sumner, WA":

**Cedar Privacy Fence Page:**
- **Change to:** "Cedar Privacy Fence Installation"
- Remove "in Sumner, WA"

**Solid Board Fence Page:**
- **Change to:** "Solid Board Fence Installation"
- Remove "in Sumner, WA"

**Picture Frame Fence Page:**
- **Change to:** "Picture Frame Fence Installation"
- Remove "in Sumner, WA"

**Horizontal Fence Page:**
- **Change to:** "Horizontal Fence Installation"
- Remove "in Sumner, WA"

**Hog Wire Fence Page:**
- **Change to:** "Hog Wire Fence Installation"
- Remove "in Sumner, WA"

**Custom Fence Page:**
- **Change to:** "Custom Fence Installation"
- Remove "in Sumner, WA"

**Important Note:**
- Only remove the location from H1 headings
- Keep Sumner and service areas mentioned in the introduction paragraphs and body content
- The SEO metadata (title tags, descriptions) can still include location keywords - just not the visible main heading

---

## Issue 2: Fix Service Cards on City Pages

**Problem:**
On city-specific pages (like Bonney Lake), there are service cards for "Wood Fence Installation" and "Wood Fence Repair." When clicked, these cards navigate to the main service pages which say "in Sumner, Pierce County" in the heading, creating a mismatch.

**Solution:**
This issue should be automatically resolved once Issue 1 is fixed. After you remove "in Sumner" from the main service page headings, the links from city pages will navigate to general headings that work for all locations.

**Verify After Fix:**
- Click into a city page (e.g., Bonney Lake)
- Click the "Wood Fence Installation" service card
- Confirm the destination page heading is now general ("Expert Wood Fence Installation") not location-specific
- Repeat for "Wood Fence Repair" card

---

## Issue 3: Update Contact Form Field Requirements

**Problem:**
The contact form currently has incorrect required/optional field settings.

**Fix Required:**

Update the form validation to match these requirements:

**Required Fields (must be filled out):**
1. **Name** - Required ✓ (already correct)
2. **Phone Number** - Change from optional to **Required**
3. **Service Type** - Required ✓ (already correct)

**Optional Fields (not required):**
1. **Project Description** - Change from required to **Optional**
2. **Attach Photos** - Optional ✓ (already correct)

**Implementation Details:**
- Update Zod validation schema to reflect these changes
- Remove "optional" text from Phone Number field
- Add "optional" text to Project Description field label or placeholder
- Update error messages accordingly
- Ensure validation works correctly - form should not submit without Name, Phone, and Service Type selected

**Form Field Labels Should Be:**
- Name * (required)
- Phone Number * (required)
- Service Type * (required)
- Project Description (optional)
- Attach Photos (optional)

---

## Issue 4: Fix Rotated Image in Cedar Privacy Fence Gallery

**Problem:**
On the Cedar Privacy Fence Installation page, in the "Our Cedar Privacy Fence Gallery" section, the last image is incorrectly rotated.

**How to Fix:**

**Step 1: Identify the Image**
- Navigate to the Cedar Privacy Fence page
- Scroll to the gallery section
- Identify which image file is appearing last and rotated
- It's likely one of the images from `/images/gallery/photo/`

**Step 2: Fix the Orientation**
You have two options:

**Option A - Rotate the source image file:**
- Use an image editing tool to rotate the actual image file to correct orientation
- Replace the file in `/images/gallery/photo/` with the corrected version
- Clear Next.js image cache if needed

**Option B - Apply CSS rotation:**
- If you can identify which specific image it is, apply a CSS transform to correct it
- For example: `transform: rotate(90deg)` or `rotate(-90deg)` or `rotate(180deg)` depending on what's needed
- This is a quick fix but Option A is more permanent

**Step 3: Verify**
- Check the gallery page after the fix
- Ensure the image displays in correct orientation
- Verify it looks good on mobile and desktop

**Note:**
The user mentioned checking with Playwright MCP if needed to identify the exact image, but you should be able to identify it by simply viewing the Cedar Privacy Fence page gallery and seeing which image is rotated incorrectly.

---

## Testing Checklist After Fixes

**Test Service Page Headings:**
- [ ] Visit Wood Fence Installation page - verify H1 is "Expert Wood Fence Installation"
- [ ] Visit Wood Fence Repair page - verify H1 is "Wood Fence Repair Services"
- [ ] Visit all 6 fence type pages - verify "in Sumner, WA" is removed from H1s

**Test Navigation Flow:**
- [ ] Navigate to a city page (Bonney Lake, Puyallup, etc.)
- [ ] Click the service cards on that city page
- [ ] Verify the destination page headings are now general, not Sumner-specific

**Test Contact Form:**
- [ ] Try to submit form with only Name - should require Phone and Service Type
- [ ] Try to submit with Name + Phone + Service Type but no description - should succeed
- [ ] Verify "optional" labels are correct
- [ ] Test form on homepage modal and contact page

**Test Gallery Image:**
- [ ] View Cedar Privacy Fence page gallery
- [ ] Scroll to last image
- [ ] Verify it's in correct orientation on desktop
- [ ] Verify it's in correct orientation on mobile

---

## Issue 5: Implement Form Backend with Formspree

**Problem:**
The contact form currently only logs submissions to the console. It doesn't actually send emails or store submissions anywhere. Forms need to be connected to Formspree so submissions are emailed to cascadefencing3@gmail.com.

**Formspree Details:**
- Form endpoint: `https://formspree.io/f/xdkrbang`
- Already configured with spam protection (Formshield/honeypot)
- Email notifications enabled to cascadefencing3@gmail.com
- Supports file uploads

**Fix Required:**

Update `/components/ContactForm.tsx` - replace the simulated form submission in the `onSubmit` function with actual Formspree integration.

**Implementation:**

Replace the current onSubmit function (around lines 57-76) with:

```typescript
const onSubmit = async (data: FormData) => {
  // Honeypot check
  if (data.honeypot) {
    console.log("Honeypot triggered");
    return;
  }

  setIsSubmitting(true);
  
  try {
    // Create FormData object for file uploads
    const formData = new FormData();
    
    // Add form fields
    formData.append('name', data.name);
    formData.append('phone', data.phone || 'Not provided');
    formData.append('serviceType', data.serviceType);
    formData.append('description', data.description);
    
    // Add files if any
    files.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });
    
    // Send to Formspree
    const response = await fetch('https://formspree.io/f/xdkrbang', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setSuccessMessage(
        "Thank you! We've received your request and will contact you within 24 hours."
      );
      reset();
      setFiles([]);

      // Close modal after 2 seconds
      setTimeout(() => {
        onSuccess?.();
        setSuccessMessage("");
      }, 2000);
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("There was an error submitting your form. Please try calling us directly at (253) 228-9101.");
  } finally {
    setIsSubmitting(false);
  }
};
```

**What This Does:**
1. Creates FormData object to handle file uploads properly
2. Appends all form fields (name, phone, service type, description)
3. Appends any uploaded files
4. POSTs to Formspree endpoint with proper headers
5. Shows success message on successful submission
6. Resets form and closes modal after 2 seconds
7. Shows helpful error message with phone number if submission fails

**Testing After Implementation:**
1. Fill out the contact form on the website
2. Include a test file upload
3. Submit the form
4. Check cascadefencing3@gmail.com for the email (arrives in 1-2 minutes)
5. Verify all fields and attachments came through
6. Test on both homepage modal and /contact page (both use same component)

---

## Summary of Changes

**What's Changing:**
1. Remove location specificity ("in Sumner, WA") from 8 page headings (2 main service pages + 6 fence type pages)
2. Make Phone Number **required** in contact form (currently optional)
3. Make Project Description **optional** in contact form (currently required)
4. **Implement Formspree backend** - form will actually send emails to cascadefencing3@gmail.com
5. Fix rotated image in Cedar Privacy Fence gallery

**What's NOT Changing:**
- City-specific pages (Bonney Lake, Puyallup, etc.) should KEEP their location-specific headings - those are correct
- Body content mentioning Sumner and service areas - that's fine to keep
- SEO metadata (title tags, descriptions) - can still include location keywords
- Any other images or page content
- Form UI/UX or validation behavior - only backend submission logic changes

**Impact:**
These changes make the site more inclusive to visitors from all service areas while maintaining local SEO value. The form will now be fully functional and you'll receive every submission via email. The site will feel welcoming whether someone is from Sumner, Bonney Lake, Bellevue, or any other city you serve.

---

## Priority

These are relatively quick fixes that improve user experience and functionality:
1. **Critical Priority:** Form backend implementation (Issue 5) - enables actual lead capture
2. **Highest Priority:** Service page heading changes (Issue 1) - improves user experience
3. **High Priority:** Form field requirement updates (Issue 3) - fixes validation logic
4. **Medium Priority:** Image rotation fix (Issue 4) - visual polish
5. **Auto-resolved:** City page navigation issue (Issue 2) - fixed by Issue 1

**Recommended implementation order:**
1. Fix form field requirements (Issue 3) - quick validation changes
2. Implement Formspree backend (Issue 5) - critical for lead capture
3. Remove location-specific headings (Issue 1) - UX improvement
4. Fix rotated image (Issue 4) - polish

This order ensures your form is fully functional first, then improves the overall user experience.
