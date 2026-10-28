/* ------------------------------------------------------------------
 * ALL SITE TEXT LIVES HERE.
 * Edit this file to update the portfolio. main.js only renders it.
 * Every key exists in both `en` and `it`, so the language toggle
 * can swap one object for the other.
 * Source of truth: Faiz_Hussain_Resume_AI_MLOps.pdf (Oct 2026).
 * ------------------------------------------------------------------ */

const GH = 'https://github.com/Faiz-Hussain650';

export const links = {
  email: 'faizhussain325@gmail.com',
  // Shown in Contact. Set to null to hide it from the public site.
  phone: '+39 339 844 2844',
  github: GH,
  linkedin: 'https://www.linkedin.com/in/faiz-hussain',
  // Put your latest CV PDF in /public with exactly this file name.
  cv: '/Faiz_Hussain_CV.pdf',
};

/* Shared, language-independent project data (links, tags). */
const projectBase = {
  trustgate: {
    repo: `${GH}/Evaluation-Lab-TrustGate`,
    live: null,
    tags: ['Python', 'GitHub Actions', 'Non-inferiority test', 'Prediction-powered inference', 'Confidence intervals'],
  },
  rag: {
    repo: `${GH}/Multi-Tenant-AI-Customer-Support-Agent-Platform`,
    live: 'https://support-agent-mjo2.onrender.com/docs',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  logs: {
    repo: `${GH}/Kubes-Log-Anomaly-Detection-MLOps-pipeline_Project`,
    live: null,
    tags: ['Python', 'scikit-learn', 'MLflow', 'GitHub Actions'],
  },
  thesis: {
    repo: null,
    live: null,
    tags: ['Python', 'Pandas', 'Llama-3.2', 'Mistral-7B', 'Qwen2.5', '4-bit LLMs'],
  },
  eks: {
    repo: `${GH}/EKS-Terraform-GitHub-Actions`,
    live: null,
    tags: ['Terraform', 'Amazon EKS', 'IRSA / OIDC', 'GitHub Actions', 'Jenkins'],
  },
};

const skillTags = {
  cloud: ['EC2', 'EKS', 'ECS', 'S3', 'Lambda', 'VPC', 'ECR', 'SageMaker', 'IAM'],
  mlops: ['MLflow', 'Kubeflow', 'SageMaker Pipelines', 'DVC', 'FastAPI'],
  llm: ['RAG', 'PostgreSQL vector search', 'OWASP LLM Top 10', 'LLM evaluation', 'Statistical testing', '4-bit local LLMs'],
  iac: ['Terraform', 'Helm', 'Ansible'],
  k8s: ['Docker', 'Kubernetes', 'EKS'],
  cicd: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'AWS CodePipeline'],
  obs: ['Prometheus', 'Grafana', 'CloudWatch'],
  code: ['Python', 'SQL', 'scikit-learn', 'PyTorch', 'Pandas', 'Apache Spark', 'PostgreSQL'],
};

/* Hero terminal: an illustrative pipeline run (not real output). */
const LOG = [
  '$ terraform apply -var-file=prod.tfvars',
  '  module.eks: creation complete',
  '$ mlflow run . --experiment-name rag-support',
  '  run logged: params, metrics, model  ✓',
  '$ trustgate check --baseline main',
  '  non-inferiority: PASS → ship',
  '$ argocd app sync rag-api',
  '  rollout healthy · 3/3 pods ready',
  '  grafana: latency, errors, drift → watching',
];

/* =========================== ENGLISH =========================== */
const en = {
  meta: {
    title: 'Faiz Hussain · AI & MLOps Engineer',
    description:
      'AI and MLOps engineer in Milan. LLM and RAG systems, MLflow, FastAPI, Kubernetes and Terraform on AWS. 2+ years at NTT DATA, MSc Data Science (Federico II), 3× AWS certified.',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    status: 'Available now · Milan, Italy',
    first: 'Faiz',
    last: 'Hussain',
    role: 'AI Engineer · MLOps Engineer',
    pitch:
      'I build and run ML and LLM systems end to end: experiment tracking in MLflow, serving with FastAPI and Docker, and deployment on Kubernetes with Terraform and CI/CD.',
    ctaPrimary: 'See my work',
    ctaCv: 'Download CV',
    portraitAlt: 'Faiz Hussain on graduation day at the University of Naples Federico II, wearing a laurel wreath and holding his MSc thesis',
    portraitCaption: 'MSc Data Science · Federico II · 2026',
    portraitBadge: 'Open to work',
    terminalTitle: 'pipeline.log',
    stages: ['infra', 'train', 'eval', 'deploy', 'monitor'],
    log: LOG,
  },
  stats: [
    { value: '2+', label: 'years of production DevOps on AWS at NTT DATA' },
    { value: '45%', label: 'faster deployments after automating provisioning with Terraform' },
    { value: '4', label: 'open-source LLMs tested in my MSc research on LLM security' },
    { value: '3×', label: 'AWS certified, including DevOps Engineer Professional' },
  ],
  about: {
    kicker: '01 — About',
    title: 'AI engineer who started in production infrastructure.',
    body: [
      'I build and run ML and LLM systems end to end: experiment tracking in MLflow, serving with FastAPI and Docker, and deployment on Kubernetes with Terraform and CI/CD.',
      'Before that I spent two years as a DevOps engineer at NTT DATA in Bangalore, running production AWS infrastructure. I then moved to Italy for an MSc in Data Science at the University of Naples Federico II. My thesis tested proactive defences against LLM agents on four open-source models.',
      'My recent work is multi-tenant RAG and release gating for model quality. I care about a system working the second time, not only the first: pinned versions, metrics I can defend, and a README that says what is still broken.',
    ],
    facts: [
      { k: 'Based in', v: 'Milan, Italy' },
      { k: 'Work authorisation', v: 'EU' },
      { k: 'Languages', v: 'English C1 · Italian A2' },
      { k: 'Open to', v: 'Italy · Netherlands · Germany · remote EU' },
    ],
  },
  skills: {
    kicker: '02 — Skills',
    title: 'What I work with.',
    items: [
      { key: 'cloud', icon: 'cloud', title: 'Cloud · AWS', text: 'Production workloads on EC2, ECS and EKS behind VPCs with load balancing and auto-scaling. Least-privilege IAM, images in ECR, SageMaker for ML.', tags: skillTags.cloud },
      { key: 'mlops', icon: 'brain', title: 'MLOps', text: 'Experiment tracking and model versioning in MLflow, pipelines in Kubeflow and SageMaker, data versioning with DVC, and models served behind FastAPI.', tags: skillTags.mlops, wide: true },
      { key: 'llm', icon: 'spark', title: 'LLM & RAG systems', text: 'RAG with tenant isolation enforced in SQL, confidence gating that hands uncertain answers to a human, and statistical evaluation that blocks a release when quality drops.', tags: skillTags.llm },
      { key: 'iac', icon: 'layers', title: 'Infrastructure as Code', text: 'Every environment in Terraform with remote state. Helm for Kubernetes workloads, Ansible for configuration.', tags: skillTags.iac },
      { key: 'k8s', icon: 'box', title: 'Containers & Orchestration', text: 'Small multi-stage Docker images and containerised microservices on Amazon EKS.', tags: skillTags.k8s },
      { key: 'cicd', icon: 'git', title: 'CI/CD', text: 'Pipelines that test, build and ship on every push, including quality gates that fail a pull request when a model gets worse.', tags: skillTags.cicd },
      { key: 'obs', icon: 'activity', title: 'Monitoring', text: 'Metrics, logs, dashboards and alerts so problems show up before users report them.', tags: skillTags.obs },
      { key: 'code', icon: 'code', title: 'Programming, ML & Data', text: 'Python and SQL every day. scikit-learn and PyTorch for models, Pandas and Spark for data.', tags: skillTags.code },
    ],
  },
  projects: {
    kicker: '03 — Projects',
    title: 'Selected work.',
    intro: 'Every number below comes from the project itself and is reported with how it was measured.',
    repoLabel: 'Code',
    liveLabel: 'Live API',
    noRepoLabel: 'Walkthrough on request',
    moreLabel: 'More on GitHub',
    items: [
      {
        id: 'trustgate', featured: true,
        status: 'Open source · Aug 2026',
        title: 'TrustGate: LLM Evaluation and Release Gating',
        role: 'LLM evaluation · statistics · CI',
        summary:
          'An evaluation pipeline that scores LLM, RAG and agent systems, puts confidence intervals on quality, and returns ship, investigate or block through a statistical non-inferiority test. It runs as a GitHub Action and fails the pull request when quality regresses.',
        metrics: [
          { value: '~50%', label: 'fewer human labels for the same precision' },
          { value: '51', label: 'tests' },
          { value: '3', label: 'verdicts: ship / investigate / block' },
        ],
        note: 'Label saving from prediction-powered inference, measured in a 2,000-item simulation.',
      },
      {
        id: 'rag', featured: true,
        status: 'Live · Jul 2026',
        title: 'Multi-Tenant RAG Customer-Support Agent',
        role: 'RAG · multi-tenant SaaS · LLM security',
        summary:
          'A SaaS support agent that answers each tenant only from its own documents. Isolation is enforced in SQL on every vector query (OWASP LLM08), and answers below a confidence threshold are escalated to a human instead of guessed.',
        metrics: [
          { value: '0', label: 'cross-tenant leaks' },
          { value: '52.6', label: 'requests per second' },
          { value: '90', label: 'concurrent requests, 3 tenants' },
        ],
        note: 'From a concurrent load test with 3 tenants and 90 requests.',
      },
      {
        id: 'logs', featured: true,
        status: 'Open source · Jan 2026',
        title: 'Kubernetes Log Anomaly Detection: MLOps Pipeline',
        role: 'MLOps · train → score → monitor',
        summary:
          'A train, score and monitor pipeline that ranks 11,000 Kubernetes log lines so on-call engineers review the top 50. Every run, parameter and artifact is tracked in MLflow. CI runs unit tests, an end-to-end smoke test and the full pipeline on every push.',
        metrics: [
          { value: '0.88', label: 'ROC-AUC' },
          { value: '1.00', label: 'precision@50' },
          { value: '11k', label: 'log lines ranked' },
        ],
        note: 'Synthetic data, scored in-sample. The README says so.',
      },
      {
        id: 'thesis', featured: false,
        status: 'MSc thesis · 2026',
        title: 'Proactive Defences Against LLM Agents',
        role: 'Research · USENIX Security 2025 reproduction',
        summary:
          'Reproduced the Cloak, Honey, Trap defences and extended them to four locally hosted 4-bit LLMs: Llama-3.2 1B and 3B, Mistral-7B and Qwen2.5-1.5B. Honeytokens caught every model; Cloak and Trap weakened as models grew; stacking both was super-additive.',
        metrics: [
          { value: '100%', label: 'honeytoken detection, every model' },
          { value: '23.4% → 3.9%', label: 'Trap DSR, Llama-3.2-1B vs Mistral-7B' },
          { value: '285', label: 'MMLU questions, 57 subjects' },
        ],
        note: null,
      },
      {
        id: 'eks', featured: false,
        status: 'Open source',
        title: 'Private EKS Cluster with Terraform',
        role: 'Infrastructure · adapted and extended',
        summary:
          'A private Amazon EKS cluster across three availability zones, with on-demand nodes for system pods and Spot nodes across nine instance types for burst load. S3 + DynamoDB remote state; fmt, validate and plan on every push.',
        metrics: [
          { value: '3', label: 'availability zones' },
          { value: '9', label: 'Spot instance types' },
        ],
        note: null,
      },
    ],
  },
  journey: {
    kicker: '04 — Experience & Education',
    title: 'Where I have been.',
    items: [
      {
        period: 'Jan 2026 – Sep 2026',
        role: 'MSc Thesis Researcher · LLM Security',
        org: 'University of Naples Federico II',
        place: 'Naples',
        points: [
          'Reproduced the Cloak, Honey, Trap proactive defences against LLM agents (USENIX Security 2025) and extended them to 4 locally hosted 4-bit LLMs (Llama-3.2 1B and 3B, Mistral-7B, Qwen2.5-1.5B). Supervised by Prof. Giancarlo Sperli.',
          'Built a reproducible evaluation pipeline in Python and Pandas on 285 MMLU questions across 57 subjects, measuring defence success rate per model, per subject and per injection count (1 to 15).',
          'Showed honeytoken detection at 100% on every model, while Cloak and Trap weakened as models grew (23.4% Trap DSR on Llama-3.2-1B vs 3.9% on Mistral-7B). Stacking both defences was super-additive.',
        ],
      },
      {
        period: '2023 – 2026',
        role: 'MSc in Data Science',
        org: 'University of Naples Federico II',
        place: 'Italy',
        points: [],
      },
      {
        period: 'Sep 2021 – Aug 2023',
        role: 'DevOps Engineer · Senior Associate, IT',
        org: 'NTT DATA',
        place: 'Bangalore',
        points: [
          'Built and managed production AWS infrastructure (EC2, ECS, VPC, S3) with load balancing and auto-scaling.',
          'Automated infrastructure provisioning with Terraform, increasing deployment speed by 45%.',
          'Developed CI/CD pipelines in Jenkins and AWS CodePipeline, cutting release time from hours to minutes.',
          'Deployed and maintained containerised microservices on Kubernetes (EKS) using Docker and Helm.',
          'Configured CloudWatch monitoring, logging and alerting; reduced AWS infrastructure costs by 20% through right-sizing.',
        ],
      },
      {
        period: '2017 – 2021',
        role: 'BTech in Engineering',
        org: 'Dayananda Sagar University',
        place: 'India',
        points: [],
      },
    ],
  },
  certs: {
    kicker: '05 — Certifications',
    title: 'AWS certified.',
    items: [
      { name: 'AWS Certified DevOps Engineer', level: 'Professional', verify: null },
      { name: 'AWS Certified Solutions Architect', level: 'Associate', verify: null },
      { name: 'AWS Certified Cloud Practitioner', level: 'Foundational', verify: null },
    ],
    verifyLabel: 'Verify',
  },
  contact: {
    kicker: '06 — Contact',
    title: 'Building ML or LLM systems that have to hold up in production?',
    text: 'I am looking for AI engineering, MLOps and platform roles in Italy, the Netherlands, Germany or remote in the EU. Email is the fastest way to reach me.',
    copy: 'Copy email',
    copied: 'Copied',
    phoneLabel: 'Phone',
  },
  footer: 'Built with Vite, hosted on Vercel.',
  a11y: { menuOpen: 'Open menu', menuClose: 'Close menu', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
};

/* =========================== ITALIANO =========================== */
const it = {
  meta: {
    title: 'Faiz Hussain · AI & MLOps Engineer',
    description:
      'AI e MLOps engineer a Milano. Sistemi LLM e RAG, MLflow, FastAPI, Kubernetes e Terraform su AWS. Oltre 2 anni in NTT DATA, laurea magistrale in Data Science (Federico II), 3 certificazioni AWS.',
  },
  nav: [
    { id: 'about', label: 'Chi sono' },
    { id: 'skills', label: 'Competenze' },
    { id: 'projects', label: 'Progetti' },
    { id: 'journey', label: 'Percorso' },
    { id: 'contact', label: 'Contatti' },
  ],
  hero: {
    status: 'Disponibile da subito · Milano',
    first: 'Faiz',
    last: 'Hussain',
    role: 'AI Engineer · MLOps Engineer',
    pitch:
      "Progetto e gestisco sistemi di ML e LLM dall'inizio alla fine: tracciamento degli esperimenti con MLflow, serving con FastAPI e Docker, deployment su Kubernetes con Terraform e CI/CD.",
    ctaPrimary: 'Guarda i progetti',
    ctaCv: 'Scarica il CV',
    portraitAlt: "Faiz Hussain il giorno della laurea all'Università di Napoli Federico II, con la corona d'alloro e la tesi magistrale in mano",
    portraitCaption: 'LM Data Science · Federico II · 2026',
    portraitBadge: 'Disponibile',
    terminalTitle: 'pipeline.log',
    stages: ['infra', 'training', 'eval', 'deploy', 'monitor'],
    log: LOG,
  },
  stats: [
    { value: '2+', label: 'anni di DevOps in produzione su AWS in NTT DATA' },
    { value: '45%', label: 'deployment più veloci automatizzando il provisioning con Terraform' },
    { value: '4', label: 'LLM open source testati nella mia ricerca magistrale sulla sicurezza degli LLM' },
    { value: '3×', label: 'certificato AWS, incluso DevOps Engineer Professional' },
  ],
  about: {
    kicker: '01 — Chi sono',
    title: "Un AI engineer che viene dall'infrastruttura di produzione.",
    body: [
      "Progetto e gestisco sistemi di ML e LLM dall'inizio alla fine: tracciamento degli esperimenti con MLflow, serving con FastAPI e Docker, deployment su Kubernetes con Terraform e CI/CD.",
      "Prima ho lavorato due anni come DevOps engineer in NTT DATA a Bangalore, gestendo infrastruttura AWS di produzione. Poi mi sono trasferito in Italia per la laurea magistrale in Data Science all'Università di Napoli Federico II. La mia tesi ha valutato difese proattive contro gli agenti LLM su quattro modelli open source.",
      'I miei lavori recenti riguardano RAG multi-tenant e il gating dei rilasci in base alla qualità dei modelli. Mi interessa che un sistema funzioni anche la seconda volta, non solo la prima: versioni bloccate, metriche che so difendere e un README che dice cosa non funziona ancora.',
    ],
    facts: [
      { k: 'Sede', v: 'Milano' },
      { k: 'Permesso di lavoro', v: 'UE' },
      { k: 'Lingue', v: 'Inglese C1 · Italiano A2' },
      { k: 'Disponibile per', v: 'Italia · Paesi Bassi · Germania · remoto UE' },
    ],
  },
  skills: {
    kicker: '02 — Competenze',
    title: 'Con cosa lavoro.',
    items: [
      { key: 'cloud', icon: 'cloud', title: 'Cloud · AWS', text: 'Workload di produzione su EC2, ECS ed EKS dentro VPC con load balancing e auto-scaling. IAM con privilegi minimi, immagini su ECR, SageMaker per il ML.', tags: skillTags.cloud },
      { key: 'mlops', icon: 'brain', title: 'MLOps', text: 'Tracciamento degli esperimenti e versioning dei modelli con MLflow, pipeline con Kubeflow e SageMaker, versioning dei dati con DVC e modelli serviti tramite FastAPI.', tags: skillTags.mlops, wide: true },
      { key: 'llm', icon: 'spark', title: 'Sistemi LLM e RAG', text: 'RAG con isolamento dei tenant applicato in SQL, gating sulla confidenza che passa le risposte incerte a un operatore e valutazione statistica che blocca un rilascio quando la qualità scende.', tags: skillTags.llm },
      { key: 'iac', icon: 'layers', title: 'Infrastructure as Code', text: 'Ogni ambiente in Terraform con stato remoto. Helm per i workload Kubernetes, Ansible per la configurazione.', tags: skillTags.iac },
      { key: 'k8s', icon: 'box', title: 'Container e orchestrazione', text: 'Immagini Docker multi-stage leggere e microservizi containerizzati su Amazon EKS.', tags: skillTags.k8s },
      { key: 'cicd', icon: 'git', title: 'CI/CD', text: 'Pipeline che testano, compilano e rilasciano a ogni push, con controlli di qualità che bloccano una pull request quando un modello peggiora.', tags: skillTags.cicd },
      { key: 'obs', icon: 'activity', title: 'Monitoraggio', text: 'Metriche, log, dashboard e alert per vedere i problemi prima che li segnalino gli utenti.', tags: skillTags.obs },
      { key: 'code', icon: 'code', title: 'Programmazione, ML e dati', text: 'Python e SQL ogni giorno. scikit-learn e PyTorch per i modelli, Pandas e Spark per i dati.', tags: skillTags.code },
    ],
  },
  projects: {
    kicker: '03 — Progetti',
    title: 'Lavori selezionati.',
    intro: 'Ogni numero qui sotto viene dal progetto stesso ed è riportato insieme a come è stato misurato.',
    repoLabel: 'Codice',
    liveLabel: 'API live',
    noRepoLabel: 'Demo su richiesta',
    moreLabel: 'Altro su GitHub',
    items: [
      {
        id: 'trustgate', featured: true,
        status: 'Open source · ago 2026',
        title: 'TrustGate: valutazione degli LLM e gating dei rilasci',
        role: 'Valutazione LLM · statistica · CI',
        summary:
          'Una pipeline di valutazione che assegna un punteggio a sistemi LLM, RAG e ad agenti, stima la qualità con intervalli di confidenza e restituisce ship, investigate o block tramite un test statistico di non inferiorità. Gira come GitHub Action e fa fallire la pull request quando la qualità peggiora.',
        metrics: [
          { value: '~50%', label: 'etichette umane in meno, stessa precisione' },
          { value: '51', label: 'test' },
          { value: '3', label: 'esiti: ship / investigate / block' },
        ],
        note: 'Risparmio di etichette con prediction-powered inference, misurato in una simulazione su 2.000 elementi.',
      },
      {
        id: 'rag', featured: true,
        status: 'Live · lug 2026',
        title: 'Agente RAG multi-tenant per il customer support',
        role: 'RAG · SaaS multi-tenant · sicurezza LLM',
        summary:
          "Un agente di supporto SaaS che risponde a ogni tenant solo con i suoi documenti. L'isolamento è applicato in SQL su ogni query vettoriale (OWASP LLM08) e le risposte sotto una soglia di confidenza passano a un operatore invece di essere tirate a indovinare.",
        metrics: [
          { value: '0', label: 'fughe di dati tra tenant' },
          { value: '52,6', label: 'richieste al secondo' },
          { value: '90', label: 'richieste concorrenti, 3 tenant' },
        ],
        note: 'Da un test di carico concorrente con 3 tenant e 90 richieste.',
      },
      {
        id: 'logs', featured: true,
        status: 'Open source · gen 2026',
        title: 'Rilevamento anomalie nei log Kubernetes: pipeline MLOps',
        role: 'MLOps · train → score → monitor',
        summary:
          "Una pipeline di training, scoring e monitoraggio che ordina 11.000 righe di log Kubernetes, così chi è di turno legge solo le prime 50. Ogni esecuzione, parametro e artefatto è tracciato in MLflow. La CI esegue unit test, uno smoke test end-to-end e l'intera pipeline a ogni push.",
        metrics: [
          { value: '0.88', label: 'ROC-AUC' },
          { value: '1.00', label: 'precision@50' },
          { value: '11k', label: 'righe di log ordinate' },
        ],
        note: 'Dati sintetici, valutati sullo stesso set. Il README lo dichiara.',
      },
      {
        id: 'thesis', featured: false,
        status: 'Tesi magistrale · 2026',
        title: 'Difese proattive contro gli agenti LLM',
        role: 'Ricerca · riproduzione USENIX Security 2025',
        summary:
          'Ho riprodotto le difese Cloak, Honey, Trap e le ho estese a quattro LLM a 4 bit eseguiti in locale: Llama-3.2 1B e 3B, Mistral-7B e Qwen2.5-1.5B. Gli honeytoken hanno funzionato su tutti i modelli; Cloak e Trap si indeboliscono con modelli più grandi; combinarle dà un effetto super-additivo.',
        metrics: [
          { value: '100%', label: 'rilevamento honeytoken, tutti i modelli' },
          { value: '23,4% → 3,9%', label: 'DSR Trap, Llama-3.2-1B vs Mistral-7B' },
          { value: '285', label: 'domande MMLU, 57 materie' },
        ],
        note: null,
      },
      {
        id: 'eks', featured: false,
        status: 'Open source',
        title: 'Cluster EKS privato con Terraform',
        role: 'Infrastruttura · adattato ed esteso',
        summary:
          'Un cluster Amazon EKS privato su tre availability zone, con nodi on-demand per i pod di sistema e nodi Spot su nove tipi di istanza per i picchi. Stato remoto su S3 + DynamoDB; fmt, validate e plan a ogni push.',
        metrics: [
          { value: '3', label: 'availability zone' },
          { value: '9', label: 'tipi di istanza Spot' },
        ],
        note: null,
      },
    ],
  },
  journey: {
    kicker: '04 — Esperienza e formazione',
    title: 'Da dove vengo.',
    items: [
      {
        period: 'gen 2026 – set 2026',
        role: 'Tesista magistrale · Sicurezza degli LLM',
        org: 'Università di Napoli Federico II',
        place: 'Napoli',
        points: [
          'Ho riprodotto le difese proattive Cloak, Honey, Trap contro gli agenti LLM (USENIX Security 2025) e le ho estese a 4 LLM a 4 bit eseguiti in locale (Llama-3.2 1B e 3B, Mistral-7B, Qwen2.5-1.5B). Relatore: Prof. Giancarlo Sperli.',
          'Ho costruito una pipeline di valutazione riproducibile in Python e Pandas su 285 domande MMLU di 57 materie, misurando il tasso di successo delle difese per modello, per materia e per numero di iniezioni (da 1 a 15).',
          'Ho mostrato un rilevamento degli honeytoken del 100% su tutti i modelli, mentre Cloak e Trap si indeboliscono con modelli più grandi (DSR Trap del 23,4% su Llama-3.2-1B contro il 3,9% su Mistral-7B). Combinare le due difese dà un effetto super-additivo.',
        ],
      },
      {
        period: '2023 – 2026',
        role: 'Laurea magistrale in Data Science',
        org: 'Università di Napoli Federico II',
        place: 'Italia',
        points: [],
      },
      {
        period: 'set 2021 – ago 2023',
        role: 'DevOps Engineer · Senior Associate, IT',
        org: 'NTT DATA',
        place: 'Bangalore',
        points: [
          'Ho costruito e gestito infrastruttura AWS di produzione (EC2, ECS, VPC, S3) con load balancing e auto-scaling.',
          'Ho automatizzato il provisioning con Terraform, rendendo i deployment più veloci del 45%.',
          'Ho sviluppato pipeline CI/CD con Jenkins e AWS CodePipeline, riducendo i tempi di rilascio da ore a minuti.',
          'Ho rilasciato e mantenuto microservizi containerizzati su Kubernetes (EKS) con Docker e Helm.',
          'Ho configurato monitoraggio, logging e alert su CloudWatch e ridotto del 20% i costi AWS con il right-sizing.',
        ],
      },
      {
        period: '2017 – 2021',
        role: 'BTech in Ingegneria',
        org: 'Dayananda Sagar University',
        place: 'India',
        points: [],
      },
    ],
  },
  certs: {
    kicker: '05 — Certificazioni',
    title: 'Certificato AWS.',
    items: en.certs.items,
    verifyLabel: 'Verifica',
  },
  contact: {
    kicker: '06 — Contatti',
    title: 'Sistemi ML o LLM che devono reggere in produzione?',
    text: "Cerco ruoli in AI engineering, MLOps e platform engineering in Italia, Paesi Bassi, Germania o da remoto nell'UE. L'email è il modo più rapido per contattarmi.",
    copy: "Copia l'email",
    copied: 'Copiata',
    phoneLabel: 'Telefono',
  },
  footer: 'Realizzato con Vite, ospitato su Vercel.',
  a11y: { menuOpen: 'Apri il menu', menuClose: 'Chiudi il menu', toLight: 'Passa al tema chiaro', toDark: 'Passa al tema scuro' },
};

/* Merge the shared project data (links, tags) into each language. */
for (const lang of [en, it]) {
  lang.projects.items = lang.projects.items.map((p) => ({ ...p, ...projectBase[p.id] }));
}

export const content = { en, it };
