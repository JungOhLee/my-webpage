# jolee.me — Jung-Oh Lee, MD, MSc

Source for my personal academic homepage, live at **[jolee.me](https://jolee.me)**.

## About me

I'm **Jung-Oh Lee**, a board-certified radiologist and AI researcher, and a Clinical
Assistant Professor of Radiology at NYU Langone Health. I develop clinically grounded
AI for medical imaging — with a focus on 3D imaging, foundation models, agentic
systems, and rigorous clinical evaluation.

My work starts from real clinical problems, builds and validates models against expert
standards, and releases them openly. Recent projects include an externally validated 3D
model for **bone metastasis detection on CT**, a perspective on **multimodal generative
AI for 3D imaging**, **benchmarks that test whether radiology AI reasons soundly**
(ReXVQA, SPEC-CXR, CXReasonBench, Lunguage), and **deep learning for glioma prognosis
on MRI**.

- Google Scholar: https://scholar.google.com/citations?user=VIYFz_MAAAAJ&hl=en
- LinkedIn: https://www.linkedin.com/in/jolee-the-md/
- GitHub: https://github.com/JungOhLee
- Email: JungOh.Lee@nyulangone.org

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Deployed on [Vercel](https://vercel.com)

## Editing the site

All copy and data live in **[`data/content.ts`](data/content.ts)** — profile, future
directions, projects, publications, vision, and collaboration details. Edit that one file
to update the site; the layout in `app/page.tsx` renders from it.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deployment

Hosted on Vercel; pushes to `main` deploy automatically. The production domain is
**jolee.me**.
