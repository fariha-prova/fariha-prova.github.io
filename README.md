# Fariha Hossan Website

A professional, light navy publication portfolio built with Astro + Markdown and ready for GitHub Pages.

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Add a New Publication

1. Add the newspaper clipping image to:

```text
public/articles/
```

Use lowercase hyphenated names, for example:

```text
climate-awareness-bangladesh.jpg
```

2. Create a Markdown file inside:

```text
src/content/articles/
```

Use this format:

```md
---
title: "Your Article Title"
date: "2026-05-26"
category: "Climate"
country: "Bangladesh"
language: "English"
newspaper: "The Daily Observer"
publishedDate: "May 26, 2026"
summary: "Short 1-2 sentence summary."
clipping: "/articles/climate-awareness-bangladesh.jpg"
externalUrl: "https://example.com/original-article"
featured: true
---
```

Use `language: "Bangla"` for Bangla articles.

## Add Biography Later

Edit:

```text
src/pages/about.astro
```

The About page already has a placeholder for a fuller biography.
