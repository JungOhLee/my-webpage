// All site content lives here — edit this file to update the website.

export const profile = {
  shortName: "Jung-Oh Lee",
  // Korean name, shown once next to the English name (hero + footer) and fed to
  // structured data so Korean-name searches (이정오) resolve to this site.
  koreanName: "이정오",
  degrees: "MD, MSc",
  title: "Clinical Assistant Professor of Radiology, NYU Langone Health",
  headline: "Advancing radiology AI for real clinical impact.",
  intro:
    "Board-certified radiologist and AI researcher developing clinically grounded AI for medical imaging, with a focus on 3D imaging, foundation models, agentic systems, and rigorous clinical evaluation.",
  keywords: ["3D Medical Imaging", "Foundation Models", "Agentic Systems", "Clinical Evaluation"],
  email: "JungOh.Lee@nyulangone.org",
  scholar: "https://scholar.google.com/citations?user=VIYFz_MAAAAJ&hl=en",
  github: "https://github.com/JungOhLee",
  linkedin: "https://www.linkedin.com/in/jolee-the-md/",
};

// Social links shown in the hero row, next to the primary buttons.
export const socials = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Google Scholar", href: profile.scholar },
  { label: "GitHub", href: profile.github },
];

// Forward-looking research agenda, shown right under the hero.
export const futureDirections = [
  {
    title: "Agentic Data Curation",
    description:
      "AI agents that autonomously curate and annotate large-scale imaging archives — turning raw clinical data into scalable, high-quality training sets.",
  },
  {
    title: "Real-World Radiology Benchmarks",
    description:
      "International, multicenter benchmarks grounded in real clinical practice — spanning cancer detection and differential diagnosis.",
  },
  {
    title: "3D Foundation Models & Agents",
    description:
      "Foundation models and agentic systems that reason across entire 3D studies and longitudinal exams, not isolated slices.",
  },
];

export const projects = [
  {
    title: "Bone Metastasis Detection on CT",
    description:
      "An expert-comparable 3D model, validated across multiple centers against CT, MRI, and PET/CT reference standards — and released publicly with open model weights.",
    badges: ["Radiology: AI 2026", "Multicenter development", "Open-source"],
    links: [
      {
        label: "Paper",
        href: "https://scholar.google.com/scholar?q=Bone+metastasis+detection+at+CT+with+deep+learning+models+trained+using+multicenter+multimodal+reference+standards",
      },
      {
        label: "GitHub",
        href: "https://github.com/JungOhLee/BoneMet-CT",
      },
      {
        label: "Model (Zenodo)",
        href: "https://zenodo.org/records/14872632",
      },
    ],
  },
  {
    title: "Multimodal Generative AI for 3D Imaging",
    description:
      "A perspective on how generative models should interpret volumetric scans and clinical videos — laying out the core capabilities, opportunities, and open challenges for 3D and video-based medical AI.",
    badges: ["npj Digital Medicine 2025", "Perspective", "Vision-language models"],
    links: [
      {
        label: "Paper",
        href: "https://scholar.google.com/scholar?q=Multimodal+generative+AI+for+interpreting+3D+medical+images+and+videos",
      },
    ],
  },
  {
    title: "Evaluation Systems for Radiology AI",
    description:
      "Benchmarks and frameworks for evaluating the reliability of radiology AI models — spanning visual question answering, entity-level clinical safety, structured diagnostic reasoning, and LLM-based systematic analysis.",
    badges: ["MICCAI 2025", "PSB 2026", "Benchmarks · Reasoning"],
    links: [
      {
        label: "ReXVQA",
        href: "https://scholar.google.com/scholar?q=Rexvqa+large-scale+visual+question+answering+benchmark+chest+x-ray",
      },
      {
        label: "SPEC-CXR",
        href: "https://scholar.google.com/scholar?q=SPEC-CXR+Advancing+Clinical+Safety+Through+Entity-Level+Performance+Evaluation",
      },
      {
        label: "CXReasonBench",
        href: "https://scholar.google.com/scholar?q=CXReasonBench+Benchmark+Evaluating+Structured+Diagnostic+Reasoning+Chest+X-rays",
      },
      {
        label: "Lunguage",
        href: "https://scholar.google.com/scholar?q=Lunguage+benchmark+structured+sequential+chest+x-ray+interpretation",
      },
    ],
  },
  {
    title: "AI for Cancer Imaging & Prognosis",
    description:
      "A 3D deep learning model that extracts prognostic features from preoperative brain MRI, adding prognostic value on top of established clinical and molecular markers in adult-type diffuse glioma.",
    badges: ["Neuro-Oncology 2024", "MRI", "Completed"],
    links: [
      {
        label: "Paper",
        href: "https://scholar.google.com/scholar?q=Added+prognostic+value+of+3D+deep+learning-derived+features+from+preoperative+MRI+for+adult-type+diffuse+gliomas",
      },
    ],
  },
];

export const publications = [
  {
    title:
      "Bone metastasis detection at CT with deep learning models trained using multicenter, multimodal reference standards: development and evaluation",
    venue: "Radiology: Artificial Intelligence",
    year: 2026,
    contribution:
      "A multicenter, externally validated 3D AI model for detecting bone metastases on CT, evaluated against expert radiologists and released publicly.",
    href: "https://scholar.google.com/scholar?q=Bone+metastasis+detection+at+CT+with+deep+learning+models+trained+using+multicenter+multimodal+reference+standards",
    selected: true,
  },
  {
    title: "Multimodal generative AI for interpreting 3D medical images and videos",
    venue: "npj Digital Medicine",
    year: 2025,
    contribution:
      "A perspective on generative models for interpreting volumetric medical images and clinical videos — capabilities, opportunities, and open challenges.",
    href: "https://scholar.google.com/scholar?q=Multimodal+generative+AI+for+interpreting+3D+medical+images+and+videos",
    selected: true,
  },
  {
    title:
      "Added prognostic value of 3D deep learning-derived features from preoperative MRI for adult-type diffuse gliomas",
    venue: "Neuro-Oncology",
    year: 2024,
    contribution:
      "3D deep learning features from preoperative MRI add independent prognostic value beyond clinical and molecular markers in diffuse glioma.",
    href: "https://scholar.google.com/scholar?q=Added+prognostic+value+of+3D+deep+learning-derived+features+from+preoperative+MRI+for+adult-type+diffuse+gliomas",
    selected: true,
  },
  {
    title:
      "SPEC-CXR: Advancing clinical safety through entity-level performance evaluation of chest X-ray report generation",
    venue: "MICCAI",
    year: 2025,
    contribution:
      "An entity-level evaluation framework for chest X-ray report generation focused on clinical safety rather than text overlap.",
    href: "https://scholar.google.com/scholar?q=SPEC-CXR+Advancing+Clinical+Safety+Through+Entity-Level+Performance+Evaluation",
    selected: true,
  },
  {
    title:
      "CXReasonBench: A benchmark for evaluating structured diagnostic reasoning in chest X-rays",
    venue: "NeurIPS (PhysioNet)",
    year: 2025,
    contribution:
      "A benchmark evaluating whether AI models follow clinically valid diagnostic reasoning steps on chest X-rays.",
    href: "https://scholar.google.com/scholar?q=CXReasonBench+Benchmark+Evaluating+Structured+Diagnostic+Reasoning+Chest+X-rays",
    selected: true,
  },
  {
    title: "Lunguage: A benchmark for structured and sequential chest X-ray interpretation",
    venue: "arXiv preprint",
    year: 2025,
    contribution:
      "A benchmark for structured, sequential interpretation of chest X-rays, modeling how radiologists actually read over time.",
    href: "https://scholar.google.com/scholar?q=Lunguage+benchmark+structured+sequential+chest+x-ray+interpretation",
    selected: false,
  },
  {
    title:
      "ReXVQA: A large-scale visual question answering benchmark for generalist chest X-ray understanding",
    venue: "Pacific Symposium on Biocomputing",
    year: 2026,
    contribution:
      "A large-scale VQA benchmark probing generalist chest X-ray understanding in vision-language models.",
    href: "https://scholar.google.com/scholar?q=Rexvqa+large-scale+visual+question+answering+benchmark+chest+x-ray",
    selected: false,
  },
];

export const vision = {
  quote: "AI is the new electricity.",
  quoteAuthor: "Andrew Ng",
  body: "I believe this — and radiology is where that current reaches patients. I am always looking to meet people who believe it too, so we can advance radiology AI together.",
};

export const collaboration = {
  lead: "Let's build clinically impactful AI together. Whether you bring a sharp clinical question, high-quality imaging data, or a bold idea, I'd love to hear from you.",
  interests: [
    "Multimodal AI for CT, MRI & PET/CT",
    "3D imaging foundation models",
    "Cancer detection & prognosis",
    "Clinical evaluation of radiology AI",
    "Open-source models & benchmarks",
  ],
};

// Absolute site URL, used for canonical/OG/sitemap/structured data.
export const siteUrl = "https://jolee.me";

// schema.org Person JSON-LD — alternateName pairs the English and Korean names
// so searches in either language resolve to this site.
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.shortName,
    // Spelling variants people actually search for, plus the Korean name.
    alternateName: [
      profile.koreanName,
      "JungOh Lee",
      "Jung Oh Lee",
      `${profile.shortName}, ${profile.degrees}`,
    ],
    honorificSuffix: profile.degrees,
    jobTitle: "Clinical Assistant Professor of Radiology",
    worksFor: {
      "@type": "Organization",
      name: "NYU Langone Health",
      url: "https://nyulangone.org",
    },
    description: profile.intro,
    knowsAbout: profile.keywords,
    url: siteUrl,
    sameAs: [profile.linkedin, profile.scholar, profile.github],
  };
}
