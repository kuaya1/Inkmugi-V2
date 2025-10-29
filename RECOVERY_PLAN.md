# Project Recovery Plan: Inkmugi Website

## Objective
To upgrade the Version 1.0 source code to be an exact, functional, and readable match of the live Version 2.0 website.

---

## Key Assets

### 1. Source (Version 1.0)
The outdated but human-readable source code currently in this repository. This is what we will be modifying.

### 2. Target (Version 2.0)
The final, deployed build from Netlify. This is our "blueprint" and definitive guide for what the finished product should look, feel, and function like.

---

## Recovery Process Checklist
1.  [ ] **Update `index.html`:** Migrate all SEO, metadata, schema, and link tags from the Target `index.html` to the Source `index.html`.
2.  [ ] **Analyze Router (`App.jsx`):** Identify any new pages/routes present in the v2.0 site.
3.  [ ] **Update Shared Components:** Rebuild `Navbar.jsx` and `Footer.jsx` to match the Target.
4.  [ ] **Update Page Components:** Systematically update each page (`Home.jsx`, `Services.jsx`, etc.) to match the Target's content, layout, and structure.
5.  [ ] **Replicate Styling:** Analyze the Target's CSS and write clean, corresponding styles in the Source project.
6.  [ ] **Migrate Assets:** Copy all new images and other assets from the Target build into the Source `public` or `assets` folder and update the code to use them.

---

## File Contents Reference

### Target: v2.0 `index.html` (from Netlify build)
```htmlc:\Users\12244\Downloads\Netifly recovery md
