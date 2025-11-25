# Cascade Fencing Website - Claude Code Build Prompt

## Project Overview

Build a modern, SEO-optimized website for **Cascade Fencing & Repair**, a residential wood fencing company in Sumner, WA. The site must be built with **Next.js 16 + React 19 + TypeScript + Tailwind CSS** and deployed as a fully static site on Vercel.

---

## Technical Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel (fully static/SSG)

---

## Design System

### Color Palette
```javascript
// Add to tailwind.config.ts
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
  // Use white, black, and generate appropriate gray scale
}
```

### Typography
- **Headings:** Young Serif (Google Fonts)
- **Body/UI:** Poppins (Google Fonts)
- Load via `next/font/google` for optimal performance

### Visual Style Guidelines
- Clean, professional, modern contractor aesthetic
- Custom sleek icons from lucide-react
- Subtle animations (fade-ins, slide-ups on scroll)
- High-quality imagery showcasing wood fences
- Spacious layouts with clear visual hierarchy
- Professional but not flashy
- Mobile-first responsive design

---

## Site Structure

Create the following pages with URLs:

1. **Home** - `/`
2. **Wood Fence Installation** - `/services/wood-fence-installation`
3. **Wood Fence Repair** - `/services/wood-fence-repair`
4. **Specialty Fencing Styles** - `/services/specialty-fencing`
5. **Gallery** - `/gallery`
6. **Service Area Hub** - `/service-areas`
7. **City Pages** - `/service-areas/[city-name]`
   - bonney-lake
   - puyallup
   - lake-tapps
   - auburn
   - kent
   - federal-way
   - edgewood
   - buckley
   - enumclaw
   - south-hill
   - renton
   - bellevue
   - redmond
   - tacoma
8. **About** - `/about`
9. **Contact** - `/contact`

---

## SEO Requirements

### On-Page SEO
- Use Next.js Metadata API for all pages
- Semantic HTML with proper heading hierarchy (H1 → H2 → H3)
- Optimized images with next/image component
- Alt text on all images
- Internal linking strategy (specified below)
- Mobile-first responsive design
- Fast Core Web Vitals scores

### Technical SEO
- Generate `sitemap.xml`
- Generate `robots.txt`
- Schema.org structured data (LocalBusiness, Service)
- Open Graph meta tags
- Twitter Card meta tags
- Canonical URLs

### SEO Metadata Template
```typescript
export const metadata: Metadata = {
  title: "[Primary Keyword] | Cascade Fencing & Repair",
  description: "[Compelling 150-160 char description with keywords]",
  keywords: "[comma-separated keywords]",
  openGraph: {
    title: "[Title]",
    description: "[Description]",
    url: "[URL]",
    siteName: "Cascade Fencing & Repair",
    images: [
      {
        url: "[Featured image URL]",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Title]",
    description: "[Description]",
    images: ["[Featured image URL]"],
  },
}
```

---

## Homepage Design Specification

### 1. Hero Section

**H1 Tag:** "Professional Wood Fence Installation & Repair in Sumner, WA"

**Subheading (H2):** "20+ years of expert craftsmanship. Cedar privacy fences, custom designs, and reliable repairs throughout Pierce County and surrounding areas."

**CTAs:**
- Primary Button: "Get Free Estimate" (opens contact form modal)
- Secondary Button: "Call (253) 228-9101" (tel: link with icon)

**Visual Design:**
- Full-width hero section (min-height: 600px on desktop)
- High-quality background image of beautiful cedar fence installation
- Subtle dark overlay for text contrast (bg-black/40)
- Text content left-aligned or centered
- Subtle fade-in animation on load
- Optional: subtle parallax effect on background image

**Button Styling:**
- Primary: bg-primary text-white with hover effects
- Secondary: border-primary text-primary with hover fill

---

### 2. Trust Bar Section

Display 4 key differentiators in horizontal layout (stack on mobile):

- **Icon:** Award | **Text:** "20+ Years Experience"
- **Icon:** Star | **Text:** "60+ Five-Star Reviews"  
- **Icon:** TreePine | **Text:** "Cedar Specialists"
- **Icon:** Calculator | **Text:** "Free Estimates"

**Design:**
- Clean, minimal cards or just icon + text
- Subtle hover lift animation
- Icons from lucide-react with accent color
- Even spacing, responsive grid (4 cols → 2 cols → 1 col)

---

### 3. Services Overview Section

**H2:** "Our Wood Fence Services"

**Description paragraph:** "Cascade Fencing & Repair specializes exclusively in residential wood fencing. From new installations to repairs and custom designs, we bring over 20 years of expertise to every project."

**Three Service Cards:**

**Card 1: Wood Fence Installation**
- Icon: Hammer
- Heading: "Wood Fence Installation"
- Description: "Custom cedar privacy fences, horizontal designs, picture frame fences, and full installation with removal of old fence included."
- CTA: "Learn More" → `/services/wood-fence-installation`
- Image: Cedar fence installation photo

**Card 2: Wood Fence Repair**
- Icon: Wrench
- Heading: "Wood Fence Repair"
- Description: "Post replacements, rail repairs, leaning fence correction, board replacement, and storm damage fixes."
- CTA: "Learn More" → `/services/wood-fence-repair`
- Image: Fence repair or before/after photo

**Card 3: Specialty Fencing**
- Icon: Sparkles
- Heading: "Specialty Fencing & Custom Designs"
- Description: "Hog wire fences, board-on-board styles, horizontal cedar, and custom gate builds with heavy-duty hardware."
- CTA: "Learn More" → `/services/specialty-fencing`
- Image: Hog wire or horizontal fence photo

**Card Design:**
- White background with subtle shadow
- Hover: lift effect (transform: translateY(-4px))
- Image at top (aspect ratio 16:9)
- Content padded below
- Button at bottom

---

### 4. Why Choose Us Section

**H2:** "Why Homeowners Choose Cascade Fencing & Repair"

**Grid layout** (3 columns on desktop, 2 on tablet, 1 on mobile):

1. **Owner-Led Craftsmanship**
   - Icon: User
   - Text: "20 years of hands-on fence-building experience by owner Rubin Singh"

2. **Premium Cedar Materials**
   - Icon: TreePine
   - Text: "High-quality cedar for durability, beauty, and natural weather resistance"

3. **Full Service Included**
   - Icon: Trash2
   - Text: "Complete removal of old fence included with every installation"

4. **Heavy-Duty Gates**
   - Icon: Door
   - Text: "Custom gates with reinforced hinges and commercial-grade hardware"

5. **Transparent Pricing**
   - Icon: DollarSign
   - Text: "Honest, competitive estimates with no hidden fees or upselling"

6. **Local & Trusted**
   - Icon: MapPin
   - Text: "Small business rooted in the Sumner community with 60+ five-star reviews"

7. **Clean Job Sites**
   - Icon: Sparkles
   - Text: "Respect for your property with clean, organized work areas"

8. **Reliable Communication**
   - Icon: MessageCircle
   - Text: "Fast response times, punctual service, and clear project updates"

**Design:**
- Icon above text (accent color)
- Short heading + description
- Minimal card or just content on colored background
- Adequate spacing between items

---

### 5. Google Reviews Section

**H2:** "Trusted by Homeowners Across Pierce County"

**Intro text:** "Over 60 five-star reviews from satisfied customers. See what your neighbors are saying about our work."

**Embed Elfsight Widget:**
```html
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-702b6d20-2705-4078-9e86-60c2b239dcfb" data-elfsight-app-lazy></div>
```

**Implementation:**
- Create a `Script` component in Next.js for the Elfsight script
- Render the div in the component
- Full width container, light background (bg-gray-50)

---

### 6. Service Areas Section

**H2:** "Serving Sumner and Surrounding Communities"

**Intro paragraph:** "Cascade Fencing & Repair proudly serves homeowners throughout Pierce County and beyond. From Sumner to Bellevue, we bring expert wood fence installation and repair to your neighborhood."

**City Grid Display:**

Display cities in clean, organized grid (4 columns desktop, 3 tablet, 2 mobile):

**Core Service Areas (bold or highlighted):**
- Sumner
- Bonney Lake
- Lake Tapps
- Puyallup
- Auburn
- Kent
- Edgewood
- South Hill

**Extended Service Areas:**
- Federal Way
- Buckley
- Enumclaw
- Renton
- Bellevue
- Redmond
- Tacoma

**Each city:**
- Clickable link to city page: `/service-areas/[city-slug]`
- Icon: MapPin
- Hover effect (color change to accent)
- Clean typography

---

### 7. Gallery Preview Section

**H2:** "View Our Work"

**Subheading:** "See the quality and craftsmanship that goes into every fence we build."

**Gallery Grid:**
- Display 6-8 thumbnail images
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Images: mix of cedar privacy fences, horizontal fences, custom gates, before/after
- Use next/image with:
  - Lazy loading
  - Blur placeholder
  - Aspect ratio maintained
  - Hover: slight zoom effect

**CTA Button (centered below):** "View Full Gallery" → `/gallery`

---

### 8. Final CTA Section

**H2:** "Ready to Get Started?"

**Description:** "Get your free estimate today. Call us or fill out our quick form and we'll get back to you within 24 hours."

**Two CTA Buttons (side by side):**
- "Call (253) 228-9101" (with phone icon)
- "Get Free Estimate" (opens contact form modal)

**Background:**
- Subtle gradient or fence image overlay with dark overlay
- White text for contrast
- Centered content
- Generous padding (py-16)

---

## Navigation Header

### Desktop Header Layout

**Left Side:**
- Logo/Company Name: "Cascade Fencing & Repair" (text-based or simple logo)
- Use Young Serif font for logo

**Center/Right:**
- Navigation Links:
  - **Services** (dropdown menu)
    - Wood Fence Installation
    - Wood Fence Repair
    - Specialty Fencing
  - **Gallery**
  - **Service Areas**
  - **About**
  - **Contact**

**Far Right:**
- Phone Number: "(253) 228-9101" (clickable tel: link with Phone icon)
- "Get Free Estimate" button (primary style)

### Header Behavior
- Sticky on scroll (fixed position)
- Background becomes slightly opaque/solid on scroll
- Smooth transitions
- Shadow appears on scroll

### Mobile Header
- Hamburger menu (Menu icon from lucide-react)
- Overlay/slide-in mobile menu
- Logo + hamburger only visible on mobile
- Phone and CTA in mobile menu

### Dropdown Menu (Services)
- Appears on hover (desktop) or click (mobile)
- Clean white background with shadow
- Links with hover states

---

## Footer

### Footer Layout (4 columns on desktop, stack on mobile)

**Column 1: Company Info**
- Company name: "Cascade Fencing & Repair"
- Tagline: "Expert wood fence installation and repair in Sumner, WA"
- Phone: (253) 228-9101 (clickable)
- Email: cascadefencing3@gmail.com (clickable)

**Column 2: Quick Links**
- Wood Fence Installation
- Wood Fence Repair
- Specialty Fencing
- Gallery
- Service Areas
- About
- Contact

**Column 3: Top Service Areas**
- Sumner
- Bonney Lake
- Puyallup
- Lake Tapps
- Auburn
- Kent
- Federal Way
- Edgewood

**Column 4: Business Hours & Social**
- "Monday - Saturday: 7am - 6pm"
- "Sunday: Closed"
- "Free Estimates Available"
- Social media icons:
  - Instagram: https://www.instagram.com/cascade_fencing/
  - Facebook: https://www.facebook.com/share/1CXdLhrpdc/?mibextid=wwXIfr

### Footer Bottom Bar
- Copyright: "© 2025 Cascade Fencing & Repair. All rights reserved."
- Links: Privacy Policy | Terms of Service
- "Built in Sumner, WA"

### Footer Design
- Dark background (bg-primary or bg-gray-900)
- Light text (text-gray-300)
- Headings in white or accent color
- Adequate padding and spacing
- Links with hover effects

---

## Contact Form Specifications

### Form Fields

1. **Name** (required)
   - Type: text input
   - Placeholder: "Your Name"
   - Validation: Required, min 2 characters

2. **Phone Number** (optional)
   - Type: tel input
   - Placeholder: "(253) 555-0100"
   - Format: Auto-format as (XXX) XXX-XXXX
   - Validation: Valid phone format if provided

3. **Service Type** (required)
   - Type: Radio buttons or Select dropdown
   - Options:
     - Wood Fence Installation
     - Wood Fence Repair
     - Fence Removal
     - Other
   - Validation: Required

4. **Brief Description** (required)
   - Type: textarea
   - Rows: 4
   - Placeholder: "Tell us about your project..."
   - Validation: Required, min 10 characters

5. **Attach Files** (optional)
   - Type: file upload
   - Accept: images (jpg, jpeg, png, heic)
   - Multiple: true
   - Max size: 5MB per file
   - Note below: "You can attach photos of your current fence or project area"

### Form Implementation

**Technology:**
- React Hook Form for state management
- Zod for validation schema
- Use Formspree, Web3Forms, or Basin for form submission (static site friendly)
- Include honeypot field for spam protection

**Form Design:**
- Clean, spacious layout
- Clear labels above each field
- Input styling:
  - Border: border-gray-300
  - Focus: border-primary with ring
  - Error: border-red-500
- Error messages below fields in red
- Submit button: primary style, full width on mobile
- Loading state on submit (spinner icon)
- Success message after submission

**Submit Button:**
- Text: "Get Your Free Estimate"
- Icon: Send
- Disabled state while submitting
- Success state after submission

**Success Message:**
"Thank you! We've received your request and will contact you within 24 hours."

### Form Modal (for "Get Free Estimate" buttons)
- Overlay with backdrop blur
- Centered modal on desktop, full-screen on mobile
- Close button (X icon)
- Smooth fade-in animation
- Click outside to close

---

## Service Pages Structure

### Wood Fence Installation Page (`/services/wood-fence-installation`)

**SEO Keywords (from provided structure):**
- Primary: "wood fence installation near me"
- Secondary: wood fence builder near me, cedar fence installation, privacy fence installation, backyard fence installation, etc.

**Page Structure:**

1. **Hero Section**
   - H1: "Professional Wood Fence Installation in Sumner & Pierce County"
   - Subheading with benefits
   - Two CTAs: Call + Get Estimate
   - Background image

2. **Introduction Section**
   - Describe installation services
   - 20+ years experience
   - Types of fences offered

3. **Types of Fences We Install**
   - Cedar Privacy Fences (6ft, 8ft options)
   - Picture Frame Fences
   - Horizontal Cedar Fences
   - Solid Board Fences
   - Each with photo, description, and "View Gallery" link

4. **Our Installation Process**
   - Step 1: Free Estimate & Consultation
   - Step 2: Material Selection & Design
   - Step 3: Full Removal of Old Fence
   - Step 4: Professional Installation
   - Step 5: Final Walkthrough & Cleanup
   - Use numbered cards with icons

5. **Why Choose Our Installation Service**
   - Premium cedar materials
   - Full removal included
   - Heavy-duty gate hardware
   - Clean, straight lines
   - Structural integrity

6. **Service Areas List**
   - "We install wood fences throughout [list cities with links]"

7. **Gallery Section**
   - 6-8 installation photos
   - Link to full gallery

8. **FAQ Section**
   - How long does installation take?
   - Do you remove the old fence?
   - What type of wood do you use?
   - How deep are fence posts set?
   - Do you offer warranties?

9. **Final CTA**
   - "Ready for Your New Fence?"
   - Call + Estimate buttons

---

### Wood Fence Repair Page (`/services/wood-fence-repair`)

**SEO Keywords:**
- Primary: "wood fence repair near me"
- Secondary: fence repair company near me, cedar fence repair, leaning fence repair, fence post repair near me, etc.

**Page Structure:**

1. **Hero Section**
   - H1: "Wood Fence Repair Services in Sumner, WA"
   - Subheading about repair expertise
   - CTAs

2. **Introduction**
   - Why repairs are important
   - Extend fence life
   - Cost-effective solution

3. **Repair Services We Offer**
   - Fence Post Replacement
   - Rail Repairs
   - Board Replacement
   - Leaning Fence Correction
   - Gate Repairs & Rebuilds
   - Storm Damage Repairs
   - Full Section Replacement
   - Each with icon, description, and before/after possibility

4. **Signs You Need Fence Repair**
   - Leaning or sagging fence
   - Rotten or damaged posts
   - Broken or missing boards
   - Loose or broken rails
   - Gate won't close properly
   - Storm damage

5. **Repair Process**
   - Inspection & Assessment
   - Detailed Estimate
   - Quality Repairs
   - Structural Reinforcement
   - Final Check

6. **Service Areas**
   - Cities list with links

7. **Repair Gallery**
   - Before/after photos if available
   - Link to full gallery

8. **FAQ**
   - How much does repair cost?
   - Can you match existing fence?
   - How long do repairs last?
   - Do you repair all fence types?

9. **CTA Section**

---

### Specialty Fencing Page (`/services/specialty-fencing`)

**SEO Keywords:**
- Primary: "custom cedar fence installation"
- Secondary: horizontal wood fence installation, board on board fence installation, hog wire fence installation, custom fence gate

**Page Structure:**

1. **Hero**
   - H1: "Custom & Specialty Wood Fence Designs"
   - Subheading about unique styles
   - CTAs

2. **Introduction**
   - Beyond standard privacy fences
   - Custom designs for unique properties

3. **Specialty Styles We Offer**

   **Horizontal Cedar Fences**
   - Modern, contemporary look
   - Clean lines
   - Description + image
   - "View in Gallery" link

   **Board-on-Board Fences**
   - Overlapping boards
   - No gaps, complete privacy
   - Description + image

   **Hog Wire Fences**
   - Rustic, modern aesthetic
   - Maintains views
   - Description + image

   **Custom Fence Gates**
   - Heavy-duty hardware
   - Reinforced construction
   - Custom sizes and styles
   - Description + image

4. **Design Process**
   - Consultation
   - Custom design options
   - Material selection
   - Professional installation

5. **Gallery**
   - Showcase specialty projects

6. **Service Areas**

7. **CTA**

---

## Gallery Page (`/gallery`)

**SEO Keywords:**
- Primary: "wood fence gallery"
- Secondary: cedar fence gallery, wood fence photos, privacy fence photos, horizontal wood fence pictures, fence installation before and after

**Page Structure:**

1. **Hero/Header**
   - H1: "Our Wood Fence Gallery"
   - Subheading: "Browse hundreds of completed projects throughout Pierce County"
   - CTA: "Get Free Estimate"

2. **Filter/Category Navigation**
   - All Projects
   - Cedar Privacy Fences
   - Horizontal Fences
   - Hog Wire Fences
   - Custom Gates
   - Before & After
   - By City (dropdown)

3. **Gallery Grid**
   - Masonry or standard grid layout
   - Lightbox/modal on click for full-size view
   - Image captions with project details (optional)
   - Lazy loading
   - Load more button or infinite scroll

4. **Category Sections (Alternative Layout)**
   - Organized by fence type
   - Each section has:
     - H2 heading (e.g., "Cedar Privacy Fences")
     - Short description paragraph (100-150 words)
     - Photo grid for that category
     - Link to relevant service page

5. **Internal Links**
   - Link to Wood Fence Installation page
   - Link to Specialty Fencing page
   - Links to city pages ("See fences in Bonney Lake")

6. **Bottom CTA**
   - "Ready to Start Your Project?"
   - Call + Estimate buttons

**Gallery Implementation:**
- Use next/image for all photos
- Implement lightbox (framer-motion for modal animation)
- Optimize images (WebP format)
- Alt text: "Cedar privacy fence installation in [City]"

---

## Service Area Hub Page (`/service-areas`)

**SEO Keywords:**
- Primary: "fence installation Sumner and surrounding areas"
- Secondary: fence installation near Sumner WA, wood fence installation near Sumner WA, fence contractor near Sumner WA

**Page Structure:**

1. **Hero**
   - H1: "Wood Fence Installation & Repair Service Areas"
   - Subheading: "Proudly serving Sumner, Pierce County, and surrounding communities"
   - Background: Map graphic or fence photo

2. **Introduction**
   - Paragraph about service radius
   - "From Sumner to Bellevue, we bring expert craftsmanship to your neighborhood"
   - 20+ years serving the area

3. **Interactive City Grid**
   - Large, prominent cards for each city
   - City name
   - Link to city page
   - Optional: small icon or photo
   - Organized by priority:
     - **Core Areas** (larger cards or highlighted)
     - **Extended Areas**

4. **Service Area Map (Optional)**
   - Embedded Google Map or static map image
   - Service radius highlighted

5. **Why We're Trusted in Your Area**
   - Local business benefits
   - Know the area
   - Fast response times
   - Community reputation

6. **CTA**

---

## City Pages Template (`/service-areas/[city-name]`)

**Each city page should follow this structure:**

**URL Examples:**
- `/service-areas/bonney-lake`
- `/service-areas/puyallup`
- `/service-areas/lake-tapps`

**Page Structure:**

1. **Hero**
   - H1: "Wood Fence Installation in [City Name], WA" (use primary keyword from SEO map)
   - Subheading: "Professional fence installation and repair serving [City] homeowners"
   - CTAs

2. **Introduction**
   - "Cascade Fencing & Repair is proud to serve homeowners in [City Name] with expert wood fence installation and repair services."
   - Mention proximity to Sumner
   - 20+ years experience

3. **Services in [City]**
   - Two columns:
     - **Wood Fence Installation**
       - Types offered
       - Link to installation page
     - **Wood Fence Repair**
       - Repair services
       - Link to repair page

4. **Why [City] Homeowners Choose Us**
   - Local service
   - Free estimates
   - Quality materials
   - Experienced craftsmanship

5. **Types of Fences We Install in [City]**
   - Cedar Privacy Fences
   - Horizontal Fences
   - Custom Designs
   - Brief descriptions
   - Links to gallery or service pages

6. **Neighborhoods We Serve in [City]** (if applicable)
   - List specific neighborhoods or areas
   - Shows local expertise

7. **Gallery**
   - "Fences We've Built in [City]"
   - 4-6 photos (if available, otherwise general gallery photos)
   - Link to full gallery

8. **Service Area Context**
   - "We also serve nearby communities:"
   - List 5-6 nearby cities with links

9. **FAQ for [City]**
   - Do you serve all of [City]?
   - How quickly can you provide an estimate?
   - What's the typical timeline for installation?

10. **CTA**
    - "Ready to transform your [City] property?"
    - Call + Estimate buttons

**SEO Implementation:**
- Use city-specific keywords from SEO map for each page
- Unique meta descriptions mentioning the city
- Schema.org LocalBusiness with `areaServed` property
- Internal links to service pages and nearby city pages

**City-Specific Content:**
- Each page should have unique content
- Avoid duplicate content across city pages
- Mention city name naturally throughout copy (don't over-optimize)

---

## About Page (`/about`)

**SEO Keywords:**
- Primary: "local fence contractor in Sumner WA"
- Secondary: experienced wood fence contractor, residential fence company in Pierce County

**Page Structure:**

1. **Hero**
   - H1: "About Cascade Fencing & Repair"
   - Subheading: "20+ years of expert craftsmanship and trusted service"
   - Photo of owner or team at work

2. **Owner Story**
   - H2: "Meet Rubin Singh, Owner & Lead Craftsman"
   - Photo of Rubin
   - Biography:
     - 20+ years hands-on experience
     - Started business with focus on quality over quantity
     - Passion for woodworking and cedar fences
     - Values: integrity, quality, customer service
     - Small business, owner-led approach
   - Personal touch (why he loves the work, community connection)

3. **Our Story**
   - How Cascade Fencing started
   - Growth in Sumner and Pierce County
   - Commitment to residential fencing only
   - Why wood/cedar specialty

4. **Our Values**
   - Quality Craftsmanship
   - Transparent Communication
   - Respect for Property
   - Fair, Competitive Pricing
   - Customer Satisfaction
   - Community Focus

5. **Why Choose a Local, Small Business**
   - Owner-led service
   - Personal accountability
   - Know the area
   - Community reputation matters
   - Direct communication

6. **Credentials/Recognition**
   - 60+ Five-Star Google Reviews
   - Years in business
   - Residential fencing specialist
   - Local business certifications (if any)

7. **Our Commitment**
   - Every fence built to last
   - Premium materials
   - Clean job sites
   - On-time service
   - Customer satisfaction guarantee

8. **Service Area**
   - Map or list of areas served
   - Link to service areas page

9. **CTA**
   - "Ready to work with a trusted local contractor?"
   - Call + Estimate buttons

---

## Contact Page (`/contact`)

**SEO Keywords:**
- Primary: "get a free fence estimate"
- Secondary: free wood fence quote, fence installation quote near me

**Page Structure:**

1. **Hero/Header**
   - H1: "Get Your Free Fence Estimate"
   - Subheading: "Contact us for a free estimate. We'll get back to you within 24 hours."

2. **Two-Column Layout**

   **Left Column: Contact Form**
   - Full contact form (as specified earlier)
   - All fields visible (not in modal)

   **Right Column: Contact Information**
   - **Phone**
     - Large, prominent display
     - "(253) 228-9101"
     - "Call for immediate assistance"
     - Click-to-call button
   
   - **Business Hours**
     - Monday - Saturday: 7am - 6pm
     - Sunday: Closed
   
   - **Service Areas**
     - "Proudly serving Sumner and surrounding communities"
     - Link to service areas page
   
   - **What to Expect**
     - "Free, no-obligation estimates"
     - "24-hour response time"
     - "Transparent pricing"
     - "Professional consultation"

3. **Alternative Contact Methods (if applicable)**
   - Email address
   - Social media links

4. **Service Area Map (Optional)**
   - Visual representation of coverage area

5. **FAQ Section**
   - How quickly will you respond?
   - Do you charge for estimates?
   - What information do you need for a quote?
   - Can you provide estimates over the phone?

---

## Internal Linking Strategy

Implement strategic internal linking as specified in SEO structure document:

### From Home Page
Link to:
- Wood Fence Installation page
- Wood Fence Repair page
- Service Area Hub
- Gallery page
- About page
- Top city pages (Bonney Lake, Puyallup, Lake Tapps)

### From Wood Fence Installation Page
Link to:
- Gallery page
- Specialty Fencing page
- Top city pages (contextual: "We install fences in Bonney Lake, Puyallup...")
- Wood Fence Repair page (footer or sidebar)

### From Wood Fence Repair Page
Link to:
- Gallery page (before/after repairs)
- Service Area Hub
- Wood Fence Installation page

### From Gallery Page
Link to:
- Wood Fence Installation page (main CTA)
- Wood Fence Repair page (if showing repairs)
- Specialty Fencing page
- Relevant city pages ("See fences in Bonney Lake", etc.)

### From Service Area Hub
Link to:
- All city pages
- Service pages (Installation, Repair)

### From City Pages
Link back to:
- Wood Fence Installation page
- Wood Fence Repair page
- Gallery page
- Service Area Hub
- Nearby city pages (3-5 links)

### Contextual Linking Best Practices
- Use natural anchor text (not "click here")
- Link relevant keywords to appropriate pages
- Don't over-link (1-2 relevant links per paragraph max)
- Make links obvious (underline or color differentiation)

---

## Structured Data (Schema.org)

### LocalBusiness Schema
Add to layout.tsx or home page:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cascade Fencing & Repair",
  "image": "[Logo or featured image URL]",
  "description": "Professional wood fence installation and repair serving Sumner, WA and Pierce County. 20+ years of experience with cedar fences, privacy fences, and custom designs.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Sumner",
    "addressRegion": "WA",
    "postalCode": "98390",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.2032,
    "longitude": -122.2401
  },
  "telephone": "+1-253-228-9101",
  "url": "https://cascadefencing.com",
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-18:00",
  "areaServed": [
    {
      "@type": "City",
      "name": "Sumner",
      "addressRegion": "WA"
    },
    {
      "@type": "City",
      "name": "Bonney Lake",
      "addressRegion": "WA"
    },
    // Add more cities
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "60"
  }
}
```

### Service Schema (for service pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Wood Fence Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Cascade Fencing & Repair"
  },
  "areaServed": {
    "@type": "State",
    "name": "Washington"
  },
  "description": "Professional wood fence installation services including cedar privacy fences, horizontal fences, and custom designs."
}
```

---

## Animation Guidelines

### Page Load Animations
- Hero section: fade in with slide up (duration: 0.6s)
- Sections: fade in on scroll with stagger effect
- Use Framer Motion's `motion` components

### Scroll Animations
- Trigger animations when element enters viewport
- Use `IntersectionObserver` or Framer Motion's `whileInView`
- Fade in + slide up (translateY: 20px → 0)

### Hover Animations
- Buttons: slight scale (1.05) + shadow increase
- Cards: lift effect (translateY: -4px) + shadow increase
- Links: color transition
- Images: subtle zoom (scale: 1.05)

### Transitions
- Use smooth transitions (0.3s ease-in-out)
- Page transitions: fade between routes (optional)

### Animation Best Practices
- Keep animations subtle and professional
- Don't animate everything (choose key elements)
- Respect `prefers-reduced-motion` media query
- Ensure animations don't hurt performance

**Example Framer Motion Usage:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

---

## Responsive Design Guidelines

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Approach
- Design for mobile first
- Add complexity for larger screens
- Test on multiple devices

### Common Responsive Patterns

**Navigation:**
- Desktop: horizontal nav with dropdown
- Mobile: hamburger menu, full-screen overlay

**Grid Layouts:**
- 3-4 columns on desktop → 2 on tablet → 1 on mobile
- Use responsive Tailwind classes: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

**Typography:**
- H1: `text-3xl md:text-4xl lg:text-5xl`
- H2: `text-2xl md:text-3xl lg:text-4xl`
- Body: `text-base md:text-lg`

**Spacing:**
- Padding/margin: smaller on mobile, larger on desktop
- Example: `py-8 md:py-12 lg:py-16`

**Images:**
- Full width on mobile, contained on desktop
- Hero images: different aspect ratios for mobile vs desktop (optional)

**Forms:**
- Full width inputs on mobile
- Buttons: full width on mobile, auto width on desktop

**CTAs:**
- Stack vertically on mobile
- Side by side on desktop

---

## Image Optimization

### Image Handling
- Use Next.js `<Image>` component for all images
- Images are already available in your project at: `/public/images/`
- **Logo:** `/images/logo.png`
- **Gallery photos:** `/images/gallery/photo/` (30+ photos of various fence styles)

### Your Actual Image Organization
```
/public/images/
  logo.png (company logo)
  /gallery/
    /photo/
      [30+ fence photos including:]
      - Picture frame fence designs
      - Solid board fence designs
      - Custom fence designs
      - Horizontal fence designs
      - Various cedar privacy fences
```

**Note:** Use these actual images throughout the site instead of placeholders. All gallery photos are production-ready.

### Image Specifications
- Format: WebP with JPG fallback
- Hero images: 1920x1080px minimum
- Gallery images: 1200x800px minimum
- Thumbnail images: 600x400px minimum
- Optimize file sizes (under 500KB for hero, under 200KB for others)

### Alt Text Best Practices
- Descriptive and keyword-rich
- Example: "Cedar privacy fence installation in Bonney Lake, WA"
- Example: "Horizontal wood fence with custom gate in Puyallup"

### Image Implementation
```tsx
<Image
  src="/images/fences/cedar-privacy-1.jpg"
  alt="Cedar privacy fence installation in Bonney Lake, WA"
  width={1200}
  height={800}
  quality={85}
  placeholder="blur"
  blurDataURL="..." // Generate blur placeholder
  className="..."
/>
```

---

## Accessibility Requirements

### Semantic HTML
- Use proper heading hierarchy (H1 → H2 → H3)
- Use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use `<button>` for buttons, `<a>` for links

### ARIA Labels
- Add `aria-label` to icon-only buttons
- Use `aria-expanded` for dropdown menus
- Add `aria-hidden="true"` to decorative icons

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators
- Logical tab order
- Escape key to close modals

### Color Contrast
- Ensure WCAG AA compliance (4.5:1 for normal text)
- Test with color contrast checker
- Don't rely on color alone to convey information

### Form Accessibility
- Labels associated with inputs (`htmlFor`)
- Error messages announced to screen readers
- Required fields clearly marked
- Clear focus states

### Images
- All images must have alt text
- Decorative images: `alt=""`
- Use `title` attributes sparingly

### Testing
- Test with keyboard only (no mouse)
- Test with screen reader (NVDA, JAWS, or VoiceOver)
- Use Lighthouse accessibility audit

---

## Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Strategies

**Images:**
- Use WebP format
- Lazy load images below the fold
- Use responsive images (`srcset`)
- Blur placeholders for better perceived performance

**Fonts:**
- Use `next/font/google` for optimal loading
- Preload critical fonts
- Font display: swap

**Code Splitting:**
- Dynamic imports for large components
- Lazy load modal components
- Split routes automatically with Next.js

**Static Generation:**
- Pre-render all pages at build time
- No server-side rendering needed
- Fast CDN delivery via Vercel

**Third-Party Scripts:**
- Load analytics and widgets asynchronously
- Use Next.js `<Script>` component with `strategy="lazyOnload"`

**Bundle Size:**
- Keep JavaScript bundle small
- Tree-shake unused code
- Minimize dependencies

---

## Content Tone & Writing Style

### Voice & Tone
- Professional but approachable
- Direct and clear
- Natural and human-sounding
- Avoid flowery or overly dramatic language
- No excessive enthusiasm
- Avoid exclamation points (use sparingly)
- Avoid dashes inside sentences
- Straightforward contractor tone but polished

### Writing Guidelines
- Use active voice
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Clear, benefit-driven language
- Focus on customer pain points and solutions
- Emphasize quality, experience, and reliability

### Avoid
- Marketing jargon
- Superlatives without backing (unless true: "20+ years")
- Excessive exclamation points
- All caps
- Overly casual language (no slang)
- Generic filler content

### Good Examples
✅ "We install high-quality cedar privacy fences built to last."
✅ "20 years of hands-on experience in every fence we build."
✅ "Get your free estimate today."

### Bad Examples
❌ "We're the BEST fence company EVER!"
❌ "Amazing, jaw-dropping fences that will blow your mind!"
❌ "Don't wait—act now for incredible savings!!!"

---

## Form Submission Setup

Since this is a static site, you'll use a third-party form service (to be connected later).

### For Phase 1: Build Form Structure Only
```tsx
// Build the form with React Hook Form + Zod validation
// For now: just console.log form data and show success message
// Owner will connect to Formspree/Web3Forms after deciding on service

const handleSubmit = async (data) => {
  // For Phase 1: log data and show success
  console.log("Form submitted:", data);
  
  // Show success message to user
  setSubmitSuccess(true);
  
  // Later (Phase 5): Connect to form service like this:
  // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
};
```

### Recommended Form Services (To Choose Later)

**Formspree (Recommended)**
- Easy setup: https://formspree.io
- Good free tier
- Spam protection included
- Email notifications to: cascadefencing3@gmail.com

**Formspree (Recommended)**
- Easy setup: https://formspree.io
- Good free tier
- Spam protection included
- Email notifications to: cascadefencing3@gmail.com

**Web3Forms**
- Simple API: https://web3forms.com
- No backend needed
- Free tier available

**Basin**
- Developer-friendly: https://usebasin.com
- Good for static sites
- Email notifications

### When Ready to Connect (Later)
1. Sign up for chosen service
2. Get form endpoint/API key
3. Update handleSubmit function with actual API call
4. Test form submissions
5. Verify emails arrive at cascadefencing3@gmail.com

### Spam Protection
- Include honeypot field (hidden from users)
- Use reCAPTCHA (optional, can hurt UX)
- Email validation
- Form rate limiting on backend service

---

## Deployment Configuration

### Vercel Deployment

**Setup:**
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Framework: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
3. Set environment variables (if needed for form service)

**Static Site Export:**
- Ensure all pages use `generateStaticParams` for dynamic routes
- No server-side rendering
- All pages pre-rendered at build time

**Custom Domain:**
- Add custom domain in Vercel dashboard
- Configure DNS records
- Automatic HTTPS with Vercel

**Performance:**
- Vercel Edge Network for fast global delivery
- Automatic image optimization
- Brotli compression

---

## Analytics Setup

### Google Analytics 4

Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Event Tracking
Track key conversions:
- Phone number clicks
- Form submissions
- "Get Free Estimate" button clicks
- Navigation to service pages

---

## Additional Files to Generate

### Sitemap (`sitemap.ts`)
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cascadefencing.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://cascadefencing.com/services/wood-fence-installation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Add all pages
  ]
}
```

### Robots.txt (`robots.ts`)
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cascadefencing.com/sitemap.xml',
  }
}
```

### 404 Page (`not-found.tsx`)
- Custom 404 page
- Link back to homepage
- List of main pages
- Search functionality (optional)

### Privacy Policy Page
- Basic privacy policy
- Data collection practices
- Contact information

---

## Testing Checklist

### Before Launch
- [ ] All pages render correctly
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Phone links work on mobile
- [ ] All internal links work
- [ ] Images load properly
- [ ] Mobile responsive on all pages
- [ ] Lighthouse score: 90+ on all metrics
- [ ] SEO meta tags on all pages
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Sitemap generates correctly
- [ ] Robots.txt is correct
- [ ] 404 page displays
- [ ] Accessibility audit passes
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Test on real devices (iOS, Android)

---

## Project Implementation Steps

### Phase 1: Setup & Homepage (First Priority)
1. Initialize Next.js 16 project with TypeScript and Tailwind CSS
2. Configure fonts (Young Serif, Poppins)
3. Set up color palette in Tailwind config
4. Install dependencies:
   - framer-motion
   - lucide-react
   - react-hook-form
   - zod
5. Create base layout with header and footer components
6. Build homepage with all sections specified above
7. Implement contact form modal
8. Test responsiveness and animations

**Deliverable:** Fully functional homepage with navigation and footer

---

### Phase 2: Service Pages
9. Build Wood Fence Installation page with full content and SEO
10. Build Wood Fence Repair page
11. Build Specialty Fencing page
12. Add proper meta tags and structured data to each
13. Implement internal linking between service pages

**Deliverable:** Three main service pages with optimized content

---

### Phase 3: Supporting Pages
14. Build Gallery page with image grid and lightbox
15. Build Service Area Hub page
16. Build About page with owner story
17. Build Contact page with full-page form

**Deliverable:** All supporting pages completed

---

### Phase 4: City Pages
18. Create dynamic city page template (`[city-name]/page.tsx`)
19. Generate all 14 city pages with unique content
20. Implement city-specific SEO keywords from the keyword map
21. Add internal linking between city pages and service pages
22. Test all city page URLs

**Deliverable:** All city pages with unique, SEO-optimized content

---

### Phase 5: SEO & Optimization
23. Add Schema.org structured data (LocalBusiness, Service)
24. Generate sitemap.xml
25. Generate robots.txt
26. Add Open Graph and Twitter Card meta tags to all pages
27. Optimize images (convert to WebP, add blur placeholders)
28. Test Core Web Vitals and optimize as needed
29. Run Lighthouse audits on all pages
30. Fix any accessibility issues

**Deliverable:** Fully SEO-optimized site with excellent performance scores

---

### Phase 6: Testing & Deployment
31. Cross-browser testing
32. Mobile device testing
33. Form submission testing
34. Internal link verification
35. Fix any bugs or issues
36. Deploy to Vercel
37. Configure custom domain (if ready)
38. Set up Google Analytics
39. Submit sitemap to Google Search Console

**Deliverable:** Live, production-ready website

---

## Notes for Claude Code CLI

### Start with Homepage First
- Build the complete homepage before moving to other pages
- Get approval on design, layout, and functionality
- Ensure animations, responsiveness, and form work properly

### Placeholder Images
- Use high-quality placeholder images from Unsplash initially
- Keywords for Unsplash: "wood fence", "cedar fence", "residential fence", "privacy fence", "horizontal fence"
- Owner will replace with actual project photos later

### Component Structure
- Create reusable components:
  - Button
  - Card
  - Section (with consistent padding)
  - ContactForm
  - Modal
  - ImageWithPlaceholder
  - ServiceCard
  - CityCard
- Keep components clean and well-typed

### Code Quality
- Use TypeScript strict mode
- Proper typing for all props and components
- Clean, readable code with comments where needed
- Follow Next.js 16 App Router best practices
- Use server components where possible, client components only when needed (interactivity)

### File Organization
```
/app
  /layout.tsx
  /page.tsx
  /services
    /wood-fence-installation
      /page.tsx
    /wood-fence-repair
      /page.tsx
    /specialty-fencing
      /page.tsx
  /gallery
    /page.tsx
  /service-areas
    /page.tsx
    /[city]
      /page.tsx
  /about
    /page.tsx
  /contact
    /page.tsx
/components
  /ui
    Button.tsx
    Card.tsx
    Modal.tsx
  /sections
    Hero.tsx
    Services.tsx
    Reviews.tsx
  Header.tsx
  Footer.tsx
  ContactForm.tsx
/lib
  /constants.ts (cities, services, etc.)
  /utils.ts
/public
  /images
```

### Testing As You Build
- Test each page as you complete it
- Verify responsive design on multiple breakpoints
- Check all links and CTAs
- Ensure animations work smoothly
- Test form validation

---

## Contact Information

**Business Name:** Cascade Fencing & Repair

**Phone:** (253) 228-9101

**Email:** cascadefencing3@gmail.com

**Location:** Sumner, Washington

**Service Radius:** Sumner, Pierce County, and surrounding areas

**Business Hours:**
- Monday - Saturday: 7:00 AM - 6:00 PM
- Sunday: Closed

**Owner:** Rubin Singh (Rupinder Singh)

**Experience:** 20+ years

**Google Reviews:** 60+ five-star reviews

**Social Media:**
- Instagram: https://www.instagram.com/cascade_fencing/
- Facebook: https://www.facebook.com/share/1CXdLhrpdc/?mibextid=wwXIfr

---

## Success Criteria

The website is complete when:

1. ✅ All pages are built and functional
2. ✅ SEO optimization is fully implemented
3. ✅ Performance scores are excellent (Lighthouse 90+)
4. ✅ Mobile responsive on all pages
5. ✅ Contact form works and submits correctly
6. ✅ All internal links work properly
7. ✅ Images are optimized
8. ✅ Structured data is implemented and validates
9. ✅ Site is deployed to Vercel
10. ✅ Analytics is set up

---

## Final Reminders

- Keep design clean and professional
- Focus on user experience and conversions
- Prioritize page load speed
- Make CTAs prominent and clear
- Ensure mobile experience is excellent
- Test, test, test before final deployment

---

**Ready to start building! Begin with the homepage and proceed through the phases as outlined above.**
