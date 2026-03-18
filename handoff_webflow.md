# Webflow Handoff Documentation

This document provides all the technical specifications required to rebuild the WhizCrow website in Webflow. It includes the design system, CMS architecture, page structures, and integration requirements.

## 1. Design System (Webflow Style Panel)

Set these global styles in your Webflow project to maintain brand consistency.

### Colors
- **Background (Off-White)**: `#F9FAFB`
- **Background (Warm Beige)**: `#FAF9F6`
- **Foreground (Text)**: `#1c1917`
- **Primary (Lime)**: `#98e600` (Success/Action)
- **Secondary (Teal)**: `#14b8a6` (Intelligence/Trust)
- **Accent (Orange)**: `#F97316` (CTAs only)
- **Onyx (Premium Dark)**: `#121212` / `#1E1E1E` (Footers/Sections)

### Typography
- **Headings & Body**: Inter (Google Font)
- **Mono (Utility)**: JetBrains Mono
- **Sizing**: Use a 4px grid system. Desktop H1 ideally at 4rem (64px).

### UI Elements
- **Border Radius**: `2rem` (32px) for cards and sections for a premium, rounded feel.
- **Borders**: `#e7e5e4` (1px solid).
- **Focus States**: Use the Primary Lime (`#98e600`).

---

## 2. CMS Collections Specification

The following collections should be created in the Webflow CMS.

### Collection: Articles (Blog)
- **Name**: String
- **Slug**: Slug
- **Summary**: Plain Text
- **Category**: Option Field (e.g., AI Operations, Strategy, Data)
- **Main Image**: Image
- **Content**: Rich Text
- **Author**: Reference (Collection: Authors)
- **Published Date**: Date/Time

### Collection: Services
- **Name**: String
- **Slug**: Slug
- **Tagline**: Plain Text
- **Icon**: Image/SVG
- **Description**: Rich Text
- **Feature Points**: Multi-line Text
- **Order**: Number

### Collection: Authors
- **Name**: String
- **Position**: Plain Text
- **Avatar**: Image
- **Bio**: Multi-line Text

---

## 3. Page Architecture

### Core Marketing Pages
1. **Home**: Hero with Primary Lime CTA, "Whizbram" curve sections, and Service grid.
2. **Services (Index)**: High-level overview of all offerings.
3. **Insights (Blog)**: Dynamic list of Articles with filtering.
4. **Resources**: Whitepapers, guides, and downloadables.
5. **Contact**: Multi-step form for lead capture.

### Reusable Components (Symbols/Components)
- **Navbar**: Mega-menu for Services, light/dark transition support.
- **Footer**: Deep Onyx (`#121212`) background with logo and multi-column links.
- **Newsletter Block**: Simple email capture.
- **CTA Section**: High-contrast block using Accent Orange (`#F97316`).

---

## 4. Interactions & Animations

- **Scroll Reveal**: Sections should fade and slide up slightly as they enter the viewport.
- **Hover Transitions**: `200ms ease-in-out` on all buttons and links.
- **Floating Assets**: Subtle Y-axis movement for hero images to create depth.
- **World-Class Radius Transitions**: Ensure hover states on cards maintain the `2rem` radius.

---

## 5. Integrations & SEO

- **Form Handling**: Connect Webflow forms to **GoHighLevel (GHL)** or Zapier for lead management.
- **Analytics**: Install **PostHog** and Google Tag Manager snippet in the project settings.
- **SEO Settings**:
  - Global Page Title: `WhizCrow | Intelligence. Accelerated.`
  - Meta Description: `Leveraging AI to unlock business intelligence and operational excellence.`
  - OpenGraph Image: Custom branded image using Onyx and Lime colors.

---

## 6. Next Steps for Development

1. Import the **Inter** font family.
2. Setup the Global Class for the **2rem** radius (`.radius-premium`).
3. Build the **Services Mega Menu** as a custom Webflow component.
4. map the CMS fields according to the specification in Section 2.
