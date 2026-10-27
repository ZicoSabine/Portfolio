export type Project = {
  id: string
  number: string
  title: string
  shortTitle: string
  focus: string
  summary: string
  objective: string
  image: string
  imageAlt: string
  accent: string
  metrics: { value: string; label: string }[]
  methods: string[]
  findings: string[]
  limitations: string[]
  tools: string[]
  repository: string
}

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`

export const projects: Project[] = [
  {
    id: 'car-market',
    number: '01',
    title: 'UAE Car Market Intelligence',
    shortTitle: 'Car Market Intelligence',
    focus: 'Pricing intelligence · dashboard development',
    summary:
      'A dealer-focused analytical system for comparing advertised UAE vehicle inventory, pricing, and market position.',
    objective:
      'Investigate how used-car sellers position their advertised inventory and prices, then turn listing-level comparisons into practical dealer and vehicle views.',
    image: asset('projects/car-dashboard.png'),
    imageAlt: 'Exploratory dashboard showing UAE car market inventory analysis',
    accent: 'ochre',
    metrics: [
      { value: '2 views', label: 'Dealer and vehicle comparison' },
      { value: '1 day', label: 'Clearly bounded data sample' },
      { value: 'PostgreSQL', label: 'Structured listing store' },
    ],
    methods: [
      'Collected public marketplace listings through a private Selenium workflow.',
      'Standardised make, model, trim, year, dealer, and advertised-price fields in PostgreSQL.',
      'Built interactive Plotly Dash views for dealer-to-dealer and vehicle-to-market comparison.',
    ],
    findings: [
      'Advertised inventory presence varied considerably between dealers.',
      'Comparable vehicle configurations appeared at different price points across sellers.',
      'Pricing position varied by vehicle rather than following one consistent dealer-wide premium or discount.',
    ],
    limitations: [
      'Listing volume is not evidence of sales, revenue, conversion, or demand.',
      'A one-day sample cannot establish long-term market behaviour.',
      'Stronger comparisons require mileage, condition, regional specification, service history, and other vehicle attributes.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Dash', 'SQLAlchemy', 'PostgreSQL', 'Selenium'],
    repository: 'https://github.com/ZicoSabine/Car-MI-Analysis',
  },
  {
    id: 'anime-recommender',
    number: '02',
    title: 'Anime Recommendation Website',
    shortTitle: 'Anime Recommender',
    focus: 'Machine learning · full-stack prototype',
    summary:
      'An end-to-end recommendation prototype built to examine choice overload, from model training through API and interface testing.',
    objective:
      'Explore whether a recommendation experience could make “what should I watch next?” easier while measuring the gap between a working model and a trustworthy product.',
    image: asset('ducks/duck-projects.webp'),
    imageAlt: 'Warm hand-drawn duck used as the portfolio project mascot',
    accent: 'sun',
    metrics: [
      { value: '28,393', label: 'Anime titles collected' },
      { value: '83,184', label: 'User reviews collected' },
      { value: '0.20', label: 'Held-out HR@10' },
    ],
    methods: [
      'Collected catalogue and review data through the Jikan API and converted positive reviews into implicit interactions.',
      'Combined GMF, MLP, and pooled review-text branches in an adjusted Neural Matrix Factorisation model.',
      'Connected a FastAPI backend to a React/Vite catalogue, recommendation flow, and feedback system.',
    ],
    findings: [
      'The complete recommendation pipeline functioned, but ranking quality was not production-ready.',
      'Held-out performance reached HR@10 of 0.20 and NDCG@10 of 0.09.',
      'User testing averaged 3.15 out of 5 and highlighted readability, navigation, explanation, and visual-polish needs.',
    ],
    limitations: [
      'Sparse positive interactions limited reliable personalised embeddings.',
      'Evaluation used one positive item against 99 sampled alternatives rather than the full catalogue.',
      'The public experience is primarily item-to-item, with heuristic reranking, rather than fully personalised.',
    ],
    tools: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'FastAPI', 'Pydantic', 'React', 'React Router', 'Vite'],
    repository: 'https://github.com/ZicoSabine/Anime-Recommendation-Website',
  },
  {
    id: 'online-retail',
    number: '03',
    title: 'Online Retail Customer Analysis',
    shortTitle: 'Online Retail EDA',
    focus: 'Customer analytics · commercial insight',
    summary:
      'A commercial exploration of transaction quality, retention, revenue, customer value, and product affinity.',
    objective:
      'Turn a large UK retail transaction dataset into a defensible view of customer activity, sales trends, product performance, and bundle opportunities.',
    image: asset('projects/retail-segments.png'),
    imageAlt: 'RFM customer segmentation chart for the online retail analysis',
    accent: 'sage',
    metrics: [
      { value: '520,612', label: 'Clean transaction lines' },
      { value: '4,339', label: 'Identified customers' },
      { value: '£1.50m', label: 'November 2011 revenue' },
    ],
    methods: [
      'Removed duplicates, cancelled invoices, adjustments, negative quantities, write-offs, and unusable descriptions.',
      'Analysed weekly, monthly, quarterly, country, product, and customer patterns.',
      'Applied RFM segmentation and Apriori market-basket analysis.',
    ],
    findings: [
      'Repeat purchasing formed a meaningful part of the business, averaging roughly 4.64 invoices per identified customer.',
      'The “About to Sleep” and “Lost Customer” segments exposed retention risk despite prior purchasing activity.',
      'French and UK transaction rules suggested bundle candidates, suitable for testing rather than assumed motivation.',
    ],
    limitations: [
      'Invoice count alone does not prove long-term loyalty.',
      'Extreme quantities can distort demand signals and should be reviewed separately.',
      'December was incomplete and should not be compared directly with full months.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'HoloViews', 'Mlxtend', 'Apriori', 'RFM'],
    repository: 'https://github.com/ZicoSabine/Data-Analysis',
  },
  {
    id: 'nata-supermarket',
    number: '04',
    title: 'Nata Supermarket Business Analysis',
    shortTitle: 'Supermarket Analysis',
    focus: 'Business intelligence · behavioural analysis',
    summary:
      'A customer and channel study covering demographics, household behaviour, product spending, and experimental forecasting.',
    objective:
      'Examine how a supermarket could improve customer understanding and modernise its use of data across store, web, and catalogue activity.',
    image: asset('projects/supermarket-households.png'),
    imageAlt: 'Household demographic analysis chart for the supermarket project',
    accent: 'rust',
    metrics: [
      { value: '2,240', label: 'Customer records' },
      { value: '21', label: 'Recorded complaints' },
      { value: '6', label: 'Forecast categories tested' },
    ],
    methods: [
      'Profiled demographics, income bands, households, product categories, and purchase channels.',
      'Reshaped category-spending data for association-rule analysis by household type.',
      'Tested Prophet forecasting on an 80/20 split as a technical experiment.',
    ],
    findings: [
      'Lower-middle-income households formed the largest exploratory segment.',
      'Wine and meat were the largest recorded spending categories, while stores remained the leading purchase channel.',
      'Many apparent association rules had lift near 1 and were driven by prevalent meat purchases rather than unusual affinity.',
    ],
    limitations: [
      'The dataset contains cumulative customer spending, not transaction-level history.',
      'Customer enrolment date is not a valid substitute for purchase date in demand forecasting.',
      'Income labels were manually constructed and are not externally validated.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Seaborn', 'Prophet', 'Mlxtend', 'Apriori'],
    repository: 'https://github.com/ZicoSabine/Data-Analysis',
  },
  {
    id: 'news-popularity',
    number: '05',
    title: 'Online News Popularity Analysis',
    shortTitle: 'News Popularity',
    focus: 'Predictive modelling · honest evaluation',
    summary:
      'An analysis of article characteristics, sharing activity, and the limits of predicting popularity from available features.',
    objective:
      'Identify article characteristics associated with sharing and test whether linear, ridge, or Random Forest models could meaningfully predict article popularity.',
    image: asset('projects/news-weekday.png'),
    imageAlt: 'Average article shares by publication weekday',
    accent: 'clay',
    metrics: [
      { value: '35,103', label: 'Modelled articles' },
      { value: '53', label: 'Predictor features' },
      { value: '0.110', label: 'Best test R²' },
    ],
    methods: [
      'Cleaned feature names, removed non-modelling fields, and reduced extreme share-count outliers.',
      'Explored publication day, content channel, keyword, structure, sentiment, and subjectivity signals.',
      'Compared linear regression, Random Forest, and ridge regression using R² and mean-squared error.',
    ],
    findings: [
      'Wednesday articles had the highest average shares; weekends were also associated with stronger averages.',
      'Social Media content had the highest average shares among labelled channels.',
      'Random Forest strongly overfit, while ridge was the most stable model but explained only about 11% of test variance.',
    ],
    limitations: [
      'The dataset supports association, not causation.',
      'Share counts are heavily skewed and influenced by viral outliers.',
      'Distribution, audience size, platform amplification, and current events were not available to the models.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Scikit-learn', 'Linear Regression', 'Ridge', 'Random Forest'],
    repository: 'https://github.com/ZicoSabine/Data-Analysis',
  },
]

export const experience = [
  {
    period: 'Sep 2026 — Present',
    role: 'Data Application Developer',
    organisation: 'Freelance Client Project',
    location: 'Client engagement',
    description:
      'Created a client-commissioned web application by integrating live data with a triage workflow and translating specified needs into a functional review process.',
  },
  {
    period: 'Apr 2026 — Jun 2026',
    role: 'Remote Data Engineer & Data Entry Intern',
    organisation: 'Zwipe Marketplace',
    location: 'Sharjah, UAE',
    description:
      'Automated repetitive marketplace collection with Python and Selenium, validated records, corrected discrepancies, and prepared consistent data for analysis.',
  },
  {
    period: 'Feb 2026',
    role: 'Remote Business Analyst Intern & Team Coordinator',
    organisation: 'AperioHub',
    location: 'Singapore',
    description:
      'Led customer-demand analysis and financial-feasibility work while coordinating assignments and updates across a four-analyst remote team.',
  },
  {
    period: 'Jun 2024 — Dec 2024',
    role: 'Remote Data Analyst & Creatives Intern',
    organisation: 'House of Putobao',
    location: 'Pasig, Philippines',
    description:
      'Built an automated Excel tracker with VBA, Power Pivot, and XLOOKUP; analysed 500+ sales records; and supported organised creative workflows.',
  },
]

export const education = [
  {
    period: 'Mar 2025 — Jun 2026',
    qualification: 'BSc (Hons) Business Computing and Information Systems',
    institution: 'University of Lancashire',
    detail: 'Upper Second Class Honours',
  },
  {
    period: 'Jun 2022 — May 2024',
    qualification: 'Pearson BTEC Level 5 in Computing (Data Analytics)',
    institution: 'Southville International School affiliated with Foreign Universities',
    detail: 'GPA 3.6067 · Dean’s Lister, 2022–2024 · The Digital Alliance Secretary',
  },
]

export const skillGroups = [
  {
    title: 'Analysis & insight',
    skills: ['Data cleaning', 'Customer segmentation', 'RFM analysis', 'Market-basket analysis', 'Quality assurance', 'Research synthesis'],
  },
  {
    title: 'Data & modelling',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'PostgreSQL', 'MySQL', 'PyTorch', 'Scikit-learn'],
  },
  {
    title: 'Applications & automation',
    skills: ['React', 'Vite', 'FastAPI', 'Dash', 'Plotly', 'Selenium', 'SQLAlchemy', 'Excel VBA'],
  },
  {
    title: 'Delivery & coordination',
    skills: ['Advanced Excel', 'Power Pivot', 'Google Workspace', 'Slack', 'Notion', 'Workflow tracking', 'Stakeholder updates'],
  },
]
