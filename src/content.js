/* ------------------------------------------------------------------
 * ALL SITE TEXT LIVES HERE.
 * Edit this file to update the portfolio. main.js only renders it.
 * Every key exists in both `en` and `it`, so the language toggle
 * can swap one object for the other.
 * ------------------------------------------------------------------ */

const GH = 'https://github.com/Faiz-Hussain650';

export const links = {
  email: 'faizarfahussain@gmail.com',
  github: GH,
  linkedin: 'https://www.linkedin.com/in/faiz-hussain',
  // Put your latest CV PDF in /public with exactly this file name.
  cv: '/Faiz_Hussain_CV.pdf',
};

/* Shared, language-independent project data (repo links, tags). */
const projectBase = {
  logs: {
    repo: `${GH}/Kubes-Log-Anomaly-Detection-MLOps-pipeline_Project`,
    tags: ['Python', 'scikit-learn', 'MLflow', 'GitHub Actions', 'IsolationForest'],
  },
  eks: {
    repo: `${GH}/EKS-Terraform-GitHub-Actions`,
    tags: ['Terraform', 'Amazon EKS', 'IRSA / OIDC', 'GitHub Actions', 'Jenkins'],
  },
  thesis: {
    repo: `${GH}/Thesis`,
    tags: ['PyTorch', 'Hugging Face', 'Phi-3-mini', 'LLM security', 'Apple MPS'],
  },
  platform: {
    repo: null,
    tags: ['Terraform', 'EKS', 'MLflow', 'Airflow', 'Argo CD', 'GitHub Actions'],
  },
  serving: {
    repo: null,
    tags: ['FastAPI', 'Docker', 'Kubernetes HPA', 'Prometheus', 'Grafana', 'Evidently AI'],
  },
  llm: {
    repo: null,
    tags: ['vLLM', 'Kubernetes', 'Terraform', 'pgvector', 'GitHub Actions', 'Grafana'],
  },
};

const skillTags = {
  cloud: ['EC2', 'EKS', 'ECS', 'S3', 'Lambda', 'VPC', 'IAM', 'SageMaker'],
  iac: ['Terraform', 'Helm', 'Ansible', 'S3 + DynamoDB state'],
  k8s: ['Docker', 'Kubernetes', 'EKS', 'HPA', 'Spot nodes'],
  cicd: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CodePipeline', 'Argo CD'],
  mlops: ['MLflow', 'Kubeflow', 'SageMaker Pipelines', 'Airflow', 'DVC', 'FastAPI'],
  obs: ['Prometheus', 'Grafana', 'CloudWatch', 'Evidently AI'],
  code: ['Python', 'SQL', 'PyTorch', 'scikit-learn', 'Spark', 'Pandas', 'PostgreSQL'],
};

/* =========================== ENGLISH =========================== */
const en = {
  meta: {
    title: 'Faiz Hussain · MLOps & DevOps Engineer',
    description:
      'MLOps and DevOps engineer in Milan. Terraform, Kubernetes, CI/CD and ML pipelines on AWS. 2+ years at NTT DATA, MSc Data Science, 3× AWS certified.',
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
    role: 'MLOps & DevOps Engineer',
    pitch:
      'I build the infrastructure that gets machine learning models out of notebooks and keeps them running: Terraform, Kubernetes, CI/CD and monitoring on AWS.',
    ctaPrimary: 'See my work',
    ctaCv: 'Download CV',
    portraitAlt: 'Faiz Hussain on graduation day at the University of Naples Federico II, wearing a laurel wreath and holding his MSc thesis',
    portraitCaption: 'MSc Data Science · Federico II · 2026',
    portraitBadge: 'Open to work',
    terminalTitle: 'pipeline.log',
    stages: ['data', 'train', 'registry', 'deploy', 'monitor'],
    log: [
      '$ terraform apply -var-file=prod.tfvars',
      '  eks_cluster.main: creation complete',
      '$ airflow dags trigger train_pipeline',
      '  validate → features → train → eval  ✓',
      '$ mlflow models transition --stage Production',
      '$ argocd app sync model-api',
      '  rollout healthy · 3/3 pods ready',
      '  p95 latency 84 ms · drift: none',
    ],
  },
  stats: [
    { value: '2+', label: 'years running AWS production infrastructure at NTT DATA' },
    { value: '−20%', label: 'AWS spend after right-sizing and cleanup' },
    { value: '45%', label: 'faster environment provisioning with Terraform' },
    { value: '3×', label: 'AWS certified, including DevOps Engineer Professional' },
  ],
  about: {
    kicker: '01 — About',
    title: 'Infrastructure engineer who learned the ML side properly.',
    body: [
      'For two years I was a DevOps engineer at NTT DATA in Bangalore. I wrote the Terraform, built the Jenkins and CodePipeline release flows, kept microservices healthy on EKS and answered the CloudWatch alarms.',
      'Then I moved to Italy for an MSc in Data Science at the University of Naples Federico II, with a thesis on proactive defences against LLM agents. Now I join the two halves: ML systems that are reproducible, observable and cheap to run.',
      'I care about a pipeline working the second time, not only the first. That means pinned versions, metrics I can defend, and a README that says what is still broken.',
    ],
    facts: [
      { k: 'Based in', v: 'Milan, Italy' },
      { k: 'Work authorisation', v: 'EU' },
      { k: 'Languages', v: 'English C1 · Italian A2 (improving)' },
      { k: 'Open to', v: 'Italy · Netherlands · Germany · remote EU' },
    ],
  },
  skills: {
    kicker: '02 — Skills',
    title: 'What I work with every day.',
    items: [
      { key: 'cloud', icon: 'cloud', title: 'AWS', text: 'EC2, EKS, ECS and Lambda behind well-designed VPCs and least-privilege IAM. High-availability setups with load balancing and auto-scaling.', tags: skillTags.cloud },
      { key: 'mlops', icon: 'brain', title: 'MLOps', text: 'Experiment tracking, model registry, training pipelines and serving APIs, connected so any model in production can be traced back to the data and code that made it.', tags: skillTags.mlops, wide: true },
      { key: 'iac', icon: 'layers', title: 'Infrastructure as Code', text: 'Every environment in Terraform with remote state and locking. Helm for workloads, Ansible for configuration.', tags: skillTags.iac },
      { key: 'k8s', icon: 'box', title: 'Containers & Kubernetes', text: 'Small multi-stage images. EKS clusters with on-demand and Spot node groups and horizontal pod autoscaling.', tags: skillTags.k8s },
      { key: 'cicd', icon: 'git', title: 'CI/CD & GitOps', text: 'Pipelines that test, build and ship on every push. Argo CD to promote services and models between environments.', tags: skillTags.cicd },
      { key: 'obs', icon: 'activity', title: 'Observability', text: 'Dashboards and alerts for latency, error rate, cost per request and data drift.', tags: skillTags.obs },
      { key: 'code', icon: 'code', title: 'Code & Data', text: 'Python and SQL daily. PyTorch and scikit-learn for models, Spark and Pandas for data.', tags: skillTags.code, wide: true },
    ],
  },
  projects: {
    kicker: '03 — Projects',
    title: 'Selected work.',
    intro: 'Featured projects have public code. Numbers come from the repos and are reported with their limits.',
    repoLabel: 'View code',
    noRepoLabel: 'Walkthrough on request',
    moreLabel: 'More on GitHub',
    items: [
      {
        id: 'logs', featured: true,
        status: 'Open source',
        title: 'Kubernetes Log Anomaly Detection',
        role: 'MLOps pipeline · design, build, CI',
        summary:
          'Ranks Kubernetes event and component logs by how unusual they are, so on-call reads the top 50 lines instead of 11,000. TF-IDF and an IsolationForest, every run tracked in MLflow, and the full train → score → monitor loop smoke-tested in GitHub Actions.',
        metrics: [
          { value: '0.88', label: 'ROC-AUC' },
          { value: '1.00', label: 'Precision@50' },
          { value: '~6 s', label: 'train, 11k lines, CPU' },
        ],
        note: 'Synthetic data, scored in-sample. The README states this.',
      },
      {
        id: 'eks', featured: true,
        status: 'Open source',
        title: 'Private EKS Cluster with Terraform',
        role: 'Infrastructure · adapted and extended',
        summary:
          'A private Amazon EKS cluster across three availability zones. One on-demand node keeps system pods stable while Spot nodes across nine instance types absorb burst load. IRSA via OIDC, S3 + DynamoDB remote state, and fmt / validate / plan on every push.',
        metrics: [
          { value: '3', label: 'availability zones' },
          { value: '9', label: 'Spot instance types' },
          { value: 'Private', label: 'API endpoint only' },
        ],
        note: 'Built on an Apache-2.0 base, credited in the README.',
      },
      {
        id: 'thesis', featured: true,
        status: 'MSc thesis · 2026',
        title: 'Proactive Defence Against LLM Agents',
        role: 'Research · implementation and evaluation',
        summary:
          'Implemented and evaluated the Cloak, Honey, Trap framework (USENIX Security 2025) on Phi-3-mini, then extended it to a multi-model comparison. My own addition: honeytokens built from banking credential formats such as SWIFT codes, IBANs, API keys, JWTs and private keys.',
        metrics: [
          { value: '100%', label: 'honeytoken detection, 5 formats' },
          { value: '297', label: 'MMLU questions per run' },
          { value: '4', label: 'models compared' },
        ],
        note: null,
      },
      {
        id: 'platform', featured: false,
        status: 'Platform build',
        title: 'End-to-End MLOps Platform on AWS',
        role: 'Terraform · Airflow · MLflow · Argo CD',
        summary:
          'EKS, an S3 artifact store, an RDS metadata database and IAM roles, all in Terraform. Airflow runs validation, features, training and evaluation; MLflow versions the models; Argo CD promotes approved models to staging and production.',
        metrics: [
          { value: '1 cmd', label: 'rollback' },
          { value: '0', label: 'manual steps, train → prod' },
        ],
        note: null,
      },
      {
        id: 'serving', featured: false,
        status: 'Serving',
        title: 'Real-Time Model Serving with Drift Monitoring',
        role: 'FastAPI · Kubernetes · Prometheus',
        summary:
          'A FastAPI prediction service in a slim multi-stage image, autoscaled on Kubernetes. Prometheus tracks latency, throughput, errors and prediction distribution; Evidently AI detects drift and a webhook triggers retraining.',
        metrics: [
          { value: '<100 ms', label: 'p95 latency' },
          { value: 'Auto', label: 'drift → retrain' },
        ],
        note: null,
      },
      {
        id: 'llm', featured: false,
        status: 'LLM infra',
        title: 'Containerised LLM Application on Kubernetes',
        role: 'vLLM · pgvector · Terraform',
        summary:
          'An open-source LLM served with vLLM on Terraform-provisioned nodes, plus a RAG API backed by pgvector. Every component is built, tested and rolled out by GitHub Actions; Grafana shows tokens, latency and cost per request.',
        metrics: [
          { value: '€/req', label: 'cost tracked per request' },
          { value: 'HPA', label: 'autoscaling' },
        ],
        note: null,
      },
    ],
  },
  journey: {
    kicker: '04 — Journey',
    title: 'Where I have been.',
    items: [
      {
        period: '2023 – 2026',
        role: 'MSc in Data Science',
        org: 'University of Naples Federico II',
        place: 'Naples, Italy',
        points: [
          'Machine learning, statistical modelling, big data with Spark, databases, cloud computing.',
          'Thesis: proactive defences against LLM agents, evaluated on Phi-3-mini and three other open models.',
        ],
      },
      {
        period: '2021 – 2023',
        role: 'DevOps Engineer · Senior Associate, IT',
        org: 'NTT DATA',
        place: 'Bangalore, India',
        points: [
          'Provisioned production AWS infrastructure (EC2, ECS, VPC, S3) with Terraform; deployments got 45% faster.',
          'Built Jenkins and AWS CodePipeline releases that took release time from hours to minutes.',
          'Ran containerised microservices on EKS with Docker and Helm; set up CloudWatch monitoring and alerting.',
          'Cut AWS costs by 20% through right-sizing and removing idle resources.',
        ],
      },
      {
        period: '2017 – 2021',
        role: 'BTech in Engineering',
        org: 'Dayananda Sagar University',
        place: 'Bangalore, India',
        points: [],
      },
    ],
  },
  certs: {
    kicker: '05 — Certifications',
    title: 'Certified on AWS.',
    items: [
      { name: 'AWS Certified DevOps Engineer', level: 'Professional', verify: null },
      { name: 'AWS Certified Solutions Architect', level: 'Associate', verify: null },
      { name: 'AWS Certified Cloud Practitioner', level: 'Foundational', verify: null },
    ],
    verifyLabel: 'Verify',
  },
  contact: {
    kicker: '06 — Contact',
    title: 'Need someone to run your ML infrastructure?',
    text: 'I am looking for MLOps, DevOps and platform engineering roles. Email is the fastest way to reach me.',
    copy: 'Copy email',
    copied: 'Copied',
  },
  footer: 'Built with Vite, hosted on Vercel.',
  a11y: { menuOpen: 'Open menu', menuClose: 'Close menu', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
};

/* =========================== ITALIANO =========================== */
const it = {
  meta: {
    title: 'Faiz Hussain · MLOps & DevOps Engineer',
    description:
      'MLOps e DevOps engineer a Milano. Terraform, Kubernetes, CI/CD e pipeline di machine learning su AWS. Oltre 2 anni in NTT DATA, laurea magistrale in Data Science, 3 certificazioni AWS.',
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
    role: 'MLOps & DevOps Engineer',
    pitch:
      "Costruisco l'infrastruttura che porta i modelli di machine learning fuori dai notebook e li tiene in produzione: Terraform, Kubernetes, CI/CD e monitoraggio su AWS.",
    ctaPrimary: 'Guarda i progetti',
    ctaCv: 'Scarica il CV',
    portraitAlt: "Faiz Hussain il giorno della laurea all'Università di Napoli Federico II, con la corona d'alloro e la tesi magistrale in mano",
    portraitCaption: 'LM Data Science · Federico II · 2026',
    portraitBadge: 'Disponibile',
    terminalTitle: 'pipeline.log',
    stages: ['dati', 'training', 'registry', 'deploy', 'monitor'],
    log: en.hero.log,
  },
  stats: [
    { value: '2+', label: 'anni di infrastruttura AWS in produzione in NTT DATA' },
    { value: '−20%', label: 'di costi AWS dopo right-sizing e pulizia delle risorse' },
    { value: '45%', label: 'più veloce il provisioning degli ambienti con Terraform' },
    { value: '3×', label: 'certificato AWS, incluso DevOps Engineer Professional' },
  ],
  about: {
    kicker: '01 — Chi sono',
    title: 'Un ingegnere di infrastruttura che ha imparato davvero il lato ML.',
    body: [
      'Per due anni sono stato DevOps engineer in NTT DATA a Bangalore. Scrivevo il codice Terraform, costruivo i rilasci con Jenkins e CodePipeline, tenevo in salute i microservizi su EKS e rispondevo agli allarmi di CloudWatch.',
      "Poi mi sono trasferito in Italia per la laurea magistrale in Data Science all'Università di Napoli Federico II, con una tesi sulle difese proattive contro gli agenti LLM. Oggi unisco le due parti: sistemi di ML riproducibili, osservabili ed economici da gestire.",
      'Mi interessa che una pipeline funzioni anche la seconda volta, non solo la prima. Questo significa versioni bloccate, metriche che so difendere e un README che dice cosa non funziona ancora.',
    ],
    facts: [
      { k: 'Sede', v: 'Milano' },
      { k: 'Permesso di lavoro', v: 'UE' },
      { k: 'Lingue', v: 'Inglese C1 · Italiano A2 (in miglioramento)' },
      { k: 'Disponibile per', v: 'Italia · Paesi Bassi · Germania · remoto UE' },
    ],
  },
  skills: {
    kicker: '02 — Competenze',
    title: 'Gli strumenti che uso ogni giorno.',
    items: [
      { key: 'cloud', icon: 'cloud', title: 'AWS', text: 'EC2, EKS, ECS e Lambda dentro VPC ben progettate e IAM con privilegi minimi. Architetture ad alta disponibilità con load balancing e auto-scaling.', tags: skillTags.cloud },
      { key: 'mlops', icon: 'brain', title: 'MLOps', text: 'Tracciamento degli esperimenti, model registry, pipeline di training e API di serving, collegati in modo che ogni modello in produzione si possa ricondurre ai dati e al codice che lo hanno generato.', tags: skillTags.mlops, wide: true },
      { key: 'iac', icon: 'layers', title: 'Infrastructure as Code', text: 'Ogni ambiente in Terraform con stato remoto e locking. Helm per i workload, Ansible per la configurazione.', tags: skillTags.iac },
      { key: 'k8s', icon: 'box', title: 'Container e Kubernetes', text: 'Immagini multi-stage leggere. Cluster EKS con node group on-demand e Spot e autoscaling orizzontale dei pod.', tags: skillTags.k8s },
      { key: 'cicd', icon: 'git', title: 'CI/CD e GitOps', text: 'Pipeline che testano, compilano e rilasciano a ogni push. Argo CD per promuovere servizi e modelli tra gli ambienti.', tags: skillTags.cicd },
      { key: 'obs', icon: 'activity', title: 'Osservabilità', text: 'Dashboard e alert su latenza, tasso di errore, costo per richiesta e data drift.', tags: skillTags.obs },
      { key: 'code', icon: 'code', title: 'Codice e dati', text: 'Python e SQL ogni giorno. PyTorch e scikit-learn per i modelli, Spark e Pandas per i dati.', tags: skillTags.code, wide: true },
    ],
  },
  projects: {
    kicker: '03 — Progetti',
    title: 'Lavori selezionati.',
    intro: 'I progetti in evidenza hanno codice pubblico. I numeri vengono dai repository e sono riportati con i loro limiti.',
    repoLabel: 'Vedi il codice',
    noRepoLabel: 'Demo su richiesta',
    moreLabel: 'Altro su GitHub',
    items: [
      {
        id: 'logs', featured: true,
        status: 'Open source',
        title: 'Rilevamento anomalie nei log Kubernetes',
        role: 'Pipeline MLOps · progettazione, sviluppo, CI',
        summary:
          "Ordina i log di eventi e componenti Kubernetes in base a quanto sono insoliti, così chi è di turno legge le prime 50 righe invece di 11.000. TF-IDF e IsolationForest, ogni esecuzione tracciata in MLflow e l'intero ciclo train → score → monitor testato in GitHub Actions.",
        metrics: [
          { value: '0.88', label: 'ROC-AUC' },
          { value: '1.00', label: 'Precision@50' },
          { value: '~6 s', label: 'training, 11k righe, CPU' },
        ],
        note: 'Dati sintetici, valutati sullo stesso set. Il README lo dichiara.',
      },
      {
        id: 'eks', featured: true,
        status: 'Open source',
        title: 'Cluster EKS privato con Terraform',
        role: 'Infrastruttura · adattato ed esteso',
        summary:
          'Un cluster Amazon EKS privato su tre availability zone. Un nodo on-demand tiene stabili i pod di sistema, mentre nodi Spot su nove tipi di istanza assorbono i picchi. IRSA tramite OIDC, stato remoto su S3 + DynamoDB e fmt / validate / plan a ogni push.',
        metrics: [
          { value: '3', label: 'availability zone' },
          { value: '9', label: 'tipi di istanza Spot' },
          { value: 'Privato', label: 'solo endpoint API privato' },
        ],
        note: 'Basato su un progetto Apache-2.0, citato nel README.',
      },
      {
        id: 'thesis', featured: true,
        status: 'Tesi magistrale · 2026',
        title: 'Difesa proattiva contro gli agenti LLM',
        role: 'Ricerca · implementazione e valutazione',
        summary:
          "Ho implementato e valutato il framework Cloak, Honey, Trap (USENIX Security 2025) su Phi-3-mini, poi l'ho esteso a un confronto tra più modelli. Il mio contributo: honeytoken costruiti su formati di credenziali bancarie come codici SWIFT, IBAN, chiavi API, JWT e chiavi private.",
        metrics: [
          { value: '100%', label: 'rilevamento honeytoken, 5 formati' },
          { value: '297', label: 'domande MMLU per esecuzione' },
          { value: '4', label: 'modelli confrontati' },
        ],
        note: null,
      },
      {
        id: 'platform', featured: false,
        status: 'Piattaforma',
        title: 'Piattaforma MLOps end-to-end su AWS',
        role: 'Terraform · Airflow · MLflow · Argo CD',
        summary:
          'EKS, artifact store su S3, database di metadati su RDS e ruoli IAM, tutto in Terraform. Airflow gestisce validazione, feature, training e valutazione; MLflow versiona i modelli; Argo CD promuove i modelli approvati in staging e produzione.',
        metrics: [
          { value: '1 cmd', label: 'rollback' },
          { value: '0', label: 'passaggi manuali, training → prod' },
        ],
        note: null,
      },
      {
        id: 'serving', featured: false,
        status: 'Serving',
        title: 'Serving in tempo reale con monitoraggio del drift',
        role: 'FastAPI · Kubernetes · Prometheus',
        summary:
          "Un servizio di predizione FastAPI in un'immagine multi-stage leggera, con autoscaling su Kubernetes. Prometheus misura latenza, throughput, errori e distribuzione delle predizioni; Evidently AI rileva il drift e un webhook avvia il retraining.",
        metrics: [
          { value: '<100 ms', label: 'latenza p95' },
          { value: 'Auto', label: 'drift → retraining' },
        ],
        note: null,
      },
      {
        id: 'llm', featured: false,
        status: 'Infra LLM',
        title: 'Applicazione LLM containerizzata su Kubernetes',
        role: 'vLLM · pgvector · Terraform',
        summary:
          "Un LLM open source servito con vLLM su nodi creati con Terraform, più un'API RAG basata su pgvector. Ogni componente viene compilato, testato e rilasciato da GitHub Actions; Grafana mostra token, latenza e costo per richiesta.",
        metrics: [
          { value: '€/req', label: 'costo tracciato per richiesta' },
          { value: 'HPA', label: 'autoscaling' },
        ],
        note: null,
      },
    ],
  },
  journey: {
    kicker: '04 — Percorso',
    title: 'Da dove vengo.',
    items: [
      {
        period: '2023 – 2026',
        role: 'Laurea magistrale in Data Science',
        org: 'Università di Napoli Federico II',
        place: 'Napoli',
        points: [
          'Machine learning, modelli statistici, big data con Spark, database, cloud computing.',
          'Tesi: difese proattive contro gli agenti LLM, valutate su Phi-3-mini e altri tre modelli open.',
        ],
      },
      {
        period: '2021 – 2023',
        role: 'DevOps Engineer · Senior Associate, IT',
        org: 'NTT DATA',
        place: 'Bangalore, India',
        points: [
          'Provisioning di infrastruttura AWS di produzione (EC2, ECS, VPC, S3) con Terraform; deployment più veloci del 45%.',
          'Rilasci con Jenkins e AWS CodePipeline che hanno ridotto i tempi da ore a minuti.',
          'Microservizi containerizzati su EKS con Docker e Helm; monitoraggio e alert con CloudWatch.',
          'Costi AWS ridotti del 20% con right-sizing ed eliminazione delle risorse inattive.',
        ],
      },
      {
        period: '2017 – 2021',
        role: 'BTech in Ingegneria',
        org: 'Dayananda Sagar University',
        place: 'Bangalore, India',
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
    title: 'Cerchi qualcuno che gestisca la tua infrastruttura ML?',
    text: "Cerco ruoli in MLOps, DevOps e platform engineering. L'email è il modo più rapido per contattarmi.",
    copy: "Copia l'email",
    copied: 'Copiata',
  },
  footer: 'Realizzato con Vite, ospitato su Vercel.',
  a11y: { menuOpen: 'Apri il menu', menuClose: 'Chiudi il menu', toLight: 'Passa al tema chiaro', toDark: 'Passa al tema scuro' },
};

/* Merge the shared project data (repo, tags) into each language. */
for (const lang of [en, it]) {
  lang.projects.items = lang.projects.items.map((p) => ({ ...p, ...projectBase[p.id] }));
}

export const content = { en, it };
