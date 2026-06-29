export const personal = {
  name: "Ridhanya S",
  role: "Machine Learning Engineer",
  tagline: "I take models from experiment to production.",
  subTagline: "Fine-tuning LLMs, designing Multi-Agent systems, building RAG pipelines - with the evaluation frameworks to prove they work.",
  location: "Coimbatore, India",
  email: "ridhanya03@gmail.com",
  github: "https://github.com/Ridhanya-S",
  linkedin: "https://www.linkedin.com/in/ridhanya-s",
  huggingface: "https://huggingface.co/Ridhanya-S",
  resume: "/resume.pdf",
  bio: [
    "Machine Learning Engineer with 2.5 years of experience designing and delivering end-to-end AI systems across Generative AI, LLM fine-tuning, Multi-Agent architectures, RAG pipelines, NLP, and speech-to-text integration.",
    "Proficient in Python-based AI/ML pipeline development using LangChain, LangGraph, and Hugging Face Transformers, with experience on integrating AWS and Azure services. I bring a structured, experiment-driven approach to model evaluation and prompt engineering with a track record of translating complex AI capabilities into reliable, production-grade solutions.",
  ],
};

export const experience = [
  {
    company: "OptiSol Business Solutions Pvt. Ltd.",
    role: "Machine Learning Engineer I",
    period: "2024 – Present",
    location: "India",
    awards: ["2× Spot Award - Technical Excellence & Consistent Delivery", "4E Fulfillment Award"],
    bullets: [
      "Architected an end-to-end AI pipeline with audio capture, Whisper STT, LLM summarisation, and structured report generation integrated with Azure Cognitive Services.",
      "Designed stateful Multi-Agent systems using LangGraph, enabling controlled LLM reasoning and context-aware enterprise workflow processing.",
      "Fine-tuned open-source LLMs (LLaMA, Mistral, T5, LSTM) for domain-specific use cases; evaluated with BLEU, ROUGE, and BERTScore.",
      "Built OCR and Vision-LLM pipelines for document and seal verification using Azure Computer Vision and AWS Textract, improving accuracy for low-quality inputs.",
      "Engineered prompt strategies, evaluation frameworks, and Pydantic-based schema validation to ensure structured, token-efficient model outputs.",
      "Built and maintained production-grade REST APIs using FastAPI with AWS/Azure integrations, asynchronous processing, and WebSocket support.",
      "Automated meeting-insight extraction and task lifecycle management by integrating Microsoft Graph API and third-party platforms within LangChain agentic workflows.",
      "Upheld engineering standards through CI/CD maintenance, Pytest-based test coverage, SonarQube/Ruff code quality reviews, and structured observability logging.",
    ],
  },
];

export const education = [
  {
    institution: "Coimbatore Institute of Technology (CIT)",
    degree: "M.Sc. Artificial Intelligence and Machine Learning",
    location: "Coimbatore",
  },
];

export const projects = [
  {
    title: "Intelligent Meeting Insights & Action Management System",
    description:
      "Automated system to extract and manage meeting insights from audio recordings using OpenAI Whisper for STT. Implements a multi-layer validation pipeline (LLM, regex, schema, business rules) to extract structured outputs with action items, owners, and deadlines. Integrated Trello and Confluence APIs for real-time task creation and lifecycle management.",
    metrics: [
      { label: "Validation Layers", value: "4" },
      { label: "LLM Providers", value: "3" },
      { label: "Integrations", value: "5 APIs" },
    ],
    stack: ["Python", "FastAPI", "OpenAI Whisper", "Azure OpenAI", "LangChain", "Microsoft Graph API", "Trello API", "Confluence API"],
    github: "",
    live: "",
  },
  {
    title: "Automated Signature & Seal Verification System",
    description:
      "AI-powered document authenticity verification system for detecting signatures and seals on scanned invoices. Benchmarked multi-provider models (Azure OpenAI Vision, Gemini, AWS Rekognition) and established a provider-comparative evaluation framework. Engineered iterative prompt strategies for faint, faded, or obscured stamps.",
    metrics: [
      { label: "Providers Benchmarked", value: "3" },
      { label: "Manual Verification", value: "Eliminated" },
      { label: "Input Quality", value: "Low → Reliable" },
    ],
    stack: ["Python", "Azure OpenAI Vision", "Google Gemini", "Azure Computer Vision", "AWS Textract", "AWS Rekognition"],
    github: "",
    live: "",
  },
  {
    title: "Test Case Generation & Evaluation API",
    description:
      "FastAPI-based system to automate generation and evaluation of BDD-style test cases from requirement documents. Exposes unified REST endpoints for multi-model inference (T5, LSTM, GPT) with structured schemas and CI/CD integration. Implements evaluation endpoints using BLEU, ROUGE, METEOR, and BERTScore for systematic model performance comparison.",
    metrics: [
      { label: "Eval Metrics", value: "4" },
      { label: "Models Supported", value: "3+" },
      { label: "Integration", value: "CI/CD" },
    ],
    stack: ["Python", "FastAPI", "T5", "LSTM", "OpenAI", "Hugging Face", "TensorFlow / Keras", "LangChain"],
    github: "",
    live: "",
  },
];

export const skills = {
  "LLMs & GenAI": [
    "OpenAI", "Claude", "Gemini", "LLaMA", "Mistral",
    "Hugging Face", "Fine-tuning", "Prompt Engineering", "RAG",
  ],
  "Frameworks & Agents": [
    "LangChain", "LangGraph", "Multi-Agent Orchestration", "MCP",
    "TensorFlow / Keras", "Scikit-learn", "PyTorch", "Pydantic",
  ],
  "NLP, Speech & ML Libs": [
    "NLTK", "spaCy", "OpenAI Whisper",
    "NumPy", "Pandas", "OpenCV",
  ],
  "Cloud & APIs": [
    "Azure OpenAI", "Azure Computer Vision", "Azure Cognitive Services",
    "Azure Blob Storage", "Azure Functions",
    "AWS S3", "AWS DynamoDB", "AWS Textract",
    "FastAPI", "Flask", "Streamlit", "Gradio", "WebSockets", "Zapier",
    "Microsoft Graph API", "Trello API", "Confluence API",
  ],
  "Databases & Vector DBs": [
    "MySQL", "PostgreSQL", "MongoDB", "DynamoDB",
    "Pinecone", "ChromaDB",
  ],
  "Languages, Eval & Tools": [
    "Python", "JavaScript",
    "BLEU", "ROUGE", "BERTScore", "METEOR", "A/B Testing",
    "Pytest", "SonarQube", "Ruff", "GitHub", "Unity3D",
  ],
};

export const publications = [
  {
    title: "Integrated Q-Learning with Firefly Algorithm for Transportation Problems",
    venue: "International Conference on Intelligent Computing and Next Generation Wireless Networks",
    short: "ICNGWN 2023",
    type: "Published",
  },
  {
    title: "Voice Identification Using Classification Methods",
    venue: "8th International Conference on Business Analytics and Intelligence",
    short: "ICBAI 2021",
    type: "Presented",
  },
];

export const stats = [
  { value: "2.5+", label: "Years Engineering AI" },
  { value: "2×", label: "Spot Awards" },
  { value: "2", label: "Papers Published" },
  { value: "5+", label: "AI Domains" },
];
