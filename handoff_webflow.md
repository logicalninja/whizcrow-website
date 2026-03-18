# 🕊️ Webflow Handoff: Comprehensive Step-by-Step Guide

This guide is designed for the visual design team to continue the Whizcrow website modernization using Webflow while seamlessly integrating with the Next.js/Payload CMS backend.

## 🏗️ The Hybrid Approach
We are using **Webflow as a Visual Component Library** and **Next.js as the Intelligent Engine**. This allows designers to move fast in Webflow and developers to maintain high performance and SEO in Next.js.

---

## 🧭 Step 1: Initial Webflow Project Setup

1.  **Style Guide First**: Create a dedicated `/style-guide` page in Webflow.
    - Define all Typography (H1-H6, Body, Small).
    - Map all Brand Colors to **Webflow Variables** (Essential for consistency).
    - Synchronize these with the Tailwind configuration in `tailwind.config.mjs`.
2.  **Naming Convention**: Use **Client-First** or a similar BEM-like naming convention.
    - *Avoid*: `div-block-12`.
    - *Use*: `services-list_card`, `blog-post_header`.

---

## 🛠️ Step 2: Component Architecture (DevLink)

We recommend using **Webflow DevLink** to bridge the gap.

1.  **Identify Components**: Build these as discrete **Webflow Components**:
    - Navbar & Footer
    - Service Card
    - Case Study Preview
    - Testimonial Slider
2.  **Define Slots & Props**:
    - Inside Webflow, click your component and go to the **Settings** tab.
    - Define "Properties" for everything that needs CMS data (e.g., Image, Title, Price).
    - These properties will show up as TypeScript props in our Next.js code.

---

## 🔄 Step 3: Synchronizing Webflow with Next.js

1.  **Install the Webflow CLI**:
    ```bash
    npm install -g @webflow/devlink-cli
    ```
2.  **Configure DevLink**:
    - In the Next.js project root, create a `.webflowrc.js` file.
    - Link your Webflow project ID and API token.
3.  **Sync Components**:
    - Run `webflow devlink sync`.
    - Components from Webflow will appear in `src/components/webflow/`.

---

## 🔗 Step 4: Connecting Payload CMS Data

Once the components are synced, developers will map the Payload data to your Webflow designs.

**Example Implementation (`src/components/marketing/ServiceList.tsx`):**
```tsx
import { ServiceCard } from '../webflow/ServiceCard'; // The synced component

export const ServiceList = ({ services }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard 
          key={service.id}
          title={service.title} // This maps to the Prop you defined in Webflow
          image={service.heroImage.url}
          description={service.shortDescription}
        />
      ))}
    </div>
  );
};
```

---

## 🚀 Step 5: Final Deployment & Maintenance loop

1.  **Updating Design**: 
    - When a designer changes a button color or layout in Webflow, they simply **Publish** the Webflow site.
2.  **Updating Next.js**: 
    - Run `webflow devlink sync` again to get the latest CSS and JSX.
    - Commit and push to GitHub.
3.  **Live Site**: 
    - The Next.js site (hosted on Vercel) pulls the latest data from Payload CMS and renders it using your beautiful Webflow designs.

---

## ✅ Immediate Next Actions for Designers

1.  Open the Webflow project.
2.  Replicate the navigation and footer found in `src/app/(marketing)/layout.tsx`.
3.  Build the "Service Layout" in Webflow as a component with properties for Title, Content, and Image.
 Desktop H1 ideally at 4rem (64px).

### UI Elements
- **Border Radius**: `2rem` (32px) for cards and sections for a premium, rounded feel.
- **Borders**: `#e7e5e4` (1px solid).
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
