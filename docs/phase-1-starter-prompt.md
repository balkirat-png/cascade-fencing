# Phase 1: Cascade Fencing - Homepage Build

## Quick Start Instructions

Initialize a **Next.js 16 + React 19 + TypeScript + Tailwind CSS** project for Cascade Fencing & Repair, a wood fencing company in Sumner, WA. Deploy as a fully static site on Vercel.

---

## Initial Setup

### 1. Create Project & Install Dependencies
```bash
npx create-next-app@latest cascade-fencing --typescript --tailwind --app
cd cascade-fencing
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers
```

### 2. Configure Fonts (next/font/google)
- **Headings:** Young Serif
- **Body/UI:** Poppins

### 3. Tailwind Config Colors
```javascript
colors: {
  primary: {
    DEFAULT: '#35513B',  // Forest Green
    light: '#4a6b50',
    dark: '#2a4030',
  },
  accent: {
    DEFAULT: '#A18956',  // Gold
    light: '#b59d6d',
    dark: '#8a7347',
  },
}
```

---

## Build the Homepage

### Page Structure (Top to Bottom)

#### 1. Header (Sticky Navigation)
**Left Side:**
- Logo: Use `/images/logo.png`
- Company name: "Cascade Fencing & Repair" (Young Serif font)

**Center/Right Navigation:**
- Services (dropdown): Installation | Repair | Specialty
- Gallery
- Service Areas
- About
- Contact

**Far Right:**
- Phone: "(253) 228-9101" (clickable tel: link with Phone icon)
- Button: "Get Free Estimate" (primary color, opens modal)

**Mobile:** Hamburger menu, logo only

**Sticky behavior:** Background becomes opaque on scroll, add shadow

---

#### 2. Hero Section
**H1:** "Professional Wood Fence Installation & Repair in Sumner, WA"

**Subheading:** "20+ years of expert craftsmanship. Cedar privacy fences, custom designs, and reliable repairs throughout Pierce County and surrounding areas."

**Two CTA Buttons:**
- Primary: "Get Free Estimate" (opens modal)
- Secondary: "Call (253) 228-9101" (tel: link)

**Background:**
- Full-width hero image from `/images/gallery/photo/` (pick a beautiful cedar fence photo)
- Dark overlay for text contrast (bg-black/40)
- Fade-in animation on page load

---

#### 3. Trust Bar
Horizontal layout (4 items, icons from lucide-react):

| Icon | Text |
|------|------|
| Award | "20+ Years Experience" |
| Star | "60+ Five-Star Reviews" |
| TreePine | "Cedar Specialists" |
| DollarSign | "Free Estimates" |

**Design:** Clean cards, subtle hover lift, accent color icons

---

#### 4. Services Overview Section
**H2:** "Our Wood Fence Services"

**Three Service Cards (with images from `/images/gallery/photo/`):**

**Card 1: Wood Fence Installation**
- Icon: Hammer
- Image: Use a cedar privacy fence photo
- Description: "Custom cedar privacy fences, horizontal designs, picture frame fences, and full installation with removal of old fence included."
- Button: "Learn More" → `/services/wood-fence-installation`

**Card 2: Wood Fence Repair**
- Icon: Wrench
- Image: Use a fence repair or general fence photo
- Description: "Post replacements, rail repairs, leaning fence correction, board replacement, and storm damage fixes."
- Button: "Learn More" → `/services/wood-fence-repair`

**Card 3: Specialty Fencing**
- Icon: Sparkles
- Image: Use horizontal or custom fence photo
- Description: "Hog wire fences, board-on-board styles, horizontal cedar, and custom gate builds with heavy-duty hardware."
- Button: "Learn More" → `/services/specialty-fencing`

**Card Design:** White bg, shadow, hover lift effect, image at top (16:9 ratio)

---

#### 5. Why Choose Us Section
**H2:** "Why Homeowners Choose Cascade Fencing & Repair"

**Grid (3 cols desktop, 2 tablet, 1 mobile) with icons + text:**

1. **Owner-Led Craftsmanship** (Icon: User)
   - "20 years of hands-on experience by owner Rubin Singh"

2. **Premium Cedar Materials** (Icon: TreePine)
   - "High-quality cedar for durability and natural weather resistance"

3. **Full Service Included** (Icon: Trash2)
   - "Complete removal of old fence included with every installation"

4. **Heavy-Duty Gates** (Icon: DoorOpen)
   - "Custom gates with reinforced hinges and commercial-grade hardware"

5. **Transparent Pricing** (Icon: DollarSign)
   - "Honest, competitive estimates with no hidden fees"

6. **Local & Trusted** (Icon: MapPin)
   - "Sumner small business with 60+ five-star reviews"

7. **Clean Job Sites** (Icon: Sparkles)
   - "Respect for your property with organized work areas"

8. **Reliable Communication** (Icon: MessageCircle)
   - "Fast response times and clear project updates"

---

#### 6. Reviews Section
**H2:** "Trusted by Homeowners Across Pierce County"

**Text:** "Over 60 five-star reviews from satisfied customers."

**Embed Elfsight Widget:**
```html
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-702b6d20-2705-4078-9e86-60c2b239dcfb" data-elfsight-app-lazy></div>
```

Use Next.js `<Script>` component with `strategy="lazyOnload"`

---

#### 7. Service Areas Section
**H2:** "Serving Sumner and Surrounding Communities"

**Intro:** "Cascade Fencing & Repair proudly serves homeowners throughout Pierce County and beyond."

**City Grid (4 cols desktop → 2 mobile):**

**Core Areas (highlighted):**
- Sumner
- Bonney Lake
- Lake Tapps
- Puyallup
- Auburn
- Kent
- Edgewood
- South Hill

**Extended Areas:**
- Federal Way
- Buckley
- Enumclaw
- Renton
- Bellevue
- Redmond
- Tacoma

Each city: MapPin icon, link to `/service-areas/[city-slug]` (create these later)

---

#### 8. Gallery Preview
**H2:** "View Our Work"

**Subheading:** "See the quality and craftsmanship in every fence we build."

**Photo Grid:**
- Display 8 images from `/images/gallery/photo/`
- Mix: privacy fences, horizontal, custom gates
- Grid: 3 cols desktop, 2 tablet, 1 mobile
- Use next/image: lazy load, blur placeholder
- Hover: slight zoom effect

**Button:** "View Full Gallery" → `/gallery`

---

#### 9. Final CTA Section
**H2:** "Ready to Get Started?"

**Text:** "Get your free estimate today. Call us or fill out our quick form."

**Two Buttons:**
- "Call (253) 228-9101"
- "Get Free Estimate"

**Background:** Gradient or fence image with dark overlay, white text, centered, py-16

---

#### 10. Footer

**4 Columns (stack on mobile):**

**Column 1: Company**
- "Cascade Fencing & Repair"
- "Expert wood fence installation and repair in Sumner, WA"
- Phone: (253) 228-9101
- Email: cascadefencing3@gmail.com

**Column 2: Quick Links**
- Wood Fence Installation
- Wood Fence Repair
- Specialty Fencing
- Gallery
- Service Areas
- About
- Contact

**Column 3: Service Areas**
- Sumner
- Bonney Lake
- Puyallup
- Lake Tapps
- Auburn
- Kent
- Federal Way
- Edgewood

**Column 4: Business & Social**
- Hours: Mon-Sat 7am-6pm, Sun Closed
- Social icons:
  - Instagram: https://www.instagram.com/cascade_fencing/
  - Facebook: https://www.facebook.com/share/1CXdLhrpdc/?mibextid=wwXIfr

**Bottom Bar:**
- "© 2025 Cascade Fencing & Repair. All rights reserved."

**Design:** Dark bg (primary or gray-900), light text

---

## Contact Form Modal

**Triggered by:** "Get Free Estimate" buttons

**Modal Design:**
- Overlay with backdrop blur
- Centered on desktop, full-screen on mobile
- Close button (X icon)
- Smooth fade-in animation

**Form Fields:**

1. **Name** (required)
   - Text input
   - Placeholder: "Your Name"
   - Validation: min 2 characters

2. **Phone Number** (optional)
   - Tel input
   - Placeholder: "(253) 555-0100"
   - Auto-format: (XXX) XXX-XXXX

3. **Service Type** (required)
   - Radio buttons or Select
   - Options: Wood Fence Installation | Wood Fence Repair | Fence Removal | Other

4. **Brief Description** (required)
   - Textarea (4 rows)
   - Placeholder: "Tell us about your project..."
   - Validation: min 10 characters

5. **Attach Files** (optional)
   - File upload (images only)
   - Multiple files
   - Note: "Attach photos of your current fence or project area"

**Submit Button:**
- Text: "Get Your Free Estimate"
- Icon: Send
- Primary color, full width on mobile
- Loading state (spinner) while submitting

**Form Handling:**
- Use React Hook Form + Zod validation
- For now: Just show success message on submit (console.log form data)
- Success message: "Thank you! We've received your request and will contact you within 24 hours."
- We'll connect to Formspree/Web3Forms later

**Include honeypot field** for spam protection (hidden field)

---

## Technical Requirements

### Images
- **Logo:** `/images/logo.png`
- **Gallery photos:** `/images/gallery/photo/[filename].jpg`
- Use Next.js `<Image>` component with:
  - Lazy loading
  - Blur placeholders
  - Proper sizing and alt text
  - Alt text format: "Cedar privacy fence installation in Sumner, WA"

### Animations (Framer Motion)
- Hero: fade in + slide up on load (0.6s)
- Sections: fade in on scroll (once only)
- Cards: hover lift effect (translateY: -4px)
- Buttons: scale on hover (1.05)
- Keep animations subtle and professional

### Responsive Design
- Mobile-first approach
- Breakpoints: sm(640), md(768), lg(1024), xl(1280)
- Stack columns on mobile
- Full-width buttons on mobile
- Hamburger menu on mobile

### SEO (Homepage)
```typescript
export const metadata: Metadata = {
  title: "Wood Fence Installation & Repair Sumner, WA | Cascade Fencing",
  description: "Professional wood fence installation and repair in Sumner, WA. 20+ years experience with cedar fences. Free estimates. Serving Pierce County and surrounding areas.",
  keywords: "wood fence installation Sumner, fence contractor Sumner WA, cedar fence installation, fence repair near me",
}
```

### Content Tone
- Professional but approachable
- Direct and clear (no flowery language)
- Avoid exclamation points
- Natural, human-sounding

---

## File Structure
```
/app
  /layout.tsx (with fonts config)
  /page.tsx (homepage)
/components
  /ui
    Button.tsx
    Modal.tsx
  Header.tsx
  Footer.tsx
  ContactForm.tsx
  /sections
    Hero.tsx
    TrustBar.tsx
    Services.tsx
    WhyChooseUs.tsx
    Reviews.tsx
    ServiceAreas.tsx
    GalleryPreview.tsx
    FinalCTA.tsx
/public
  /images
    logo.png
    /gallery
      /photo
        [30 fence photos]
```

---

## Checklist

After building, verify:
- [ ] Header sticky on scroll
- [ ] Mobile menu works
- [ ] Phone links work (tel:)
- [ ] Contact modal opens/closes
- [ ] Form validation works
- [ ] All images load with blur placeholders
- [ ] Animations trigger on scroll
- [ ] Responsive on mobile/tablet/desktop
- [ ] Footer links styled properly
- [ ] Social media icons link correctly

---

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Initial Cascade Fencing homepage"
# Push to GitHub
# Connect repo to Vercel
```

**Vercel Settings:**
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `.next`

---

## Next Steps (After Homepage Approval)

Phase 2: Build service pages
- /services/wood-fence-installation
- /services/wood-fence-repair
- /services/specialty-fencing

Phase 3: Gallery, About, Contact pages
Phase 4: Service Areas Hub + 14 city pages
Phase 5: SEO optimization, sitemap, structured data

---

**Focus on getting the homepage perfect first!** Get approval on design, animations, responsiveness before moving to other pages.
