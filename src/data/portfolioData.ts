import {
  ProjectItem,
  SkillItem,
  AchievementItem,
  EducationItem,
  ExperienceItem,
  GitHubTimelineEvent,
  LeetCodeTimelineEvent,
} from '../types';

export const PERSONAL_INFO = {
  name: "Vignesh K",
  title: "Software Developer",
  tagline: "Building the future, one commit at a time.",
  subtitles: [
    "Software Developer",
    "Problem Solver",
    "Computer Vision Enthusiast",
    "Machine Learning Builder"
  ],
  bio: "I'm a Computer Science / Information Technology undergrad who loves building things at the intersection of AI/ML and practical software engineering — from automated attendance systems to secure backend infrastructure.",
  quote: {
    japanese: "未来を予測する最善の方法は、それを創り出すことだ。",
    english: "The best way to predict the future is to create it.",
    author: "Alan Kay",
    romaji: "Mirai o yosoku suru saizen no hōhō wa, sore o tsukuridasu koto da."
  },
  consistencyQuote: {
    japanese: "継続は力なり。",
    english: "Consistency is power. Continuous effort yields strength.",
    romaji: "Keizoku wa chikara nari.",
    secondaryJp: "夢中になれることを見つけよう。",
    secondaryEn: "Find what you love and stay obsessed.",
    secondaryRomaji: "Muchū ni nareru koto o mitsukeyō."
  },
  location: "Chennai, India",
  collegeLocation: "Karur, Tamil Nadu",
  schoolLocation: "Dharapuram, Tamil Nadu",
  email: "vigneshk1845@gmail.com",
  phone: "+91 93618 67898",
  github: "https://github.com/vigneshk1845",
  linkedin: "https://linkedin.com",
  leetcode: "https://leetcode.com/u/M9iiQQLnVQ/",
  stats: {
    github: {
      username: "vigneshk1845",
      repos: "24+",
      commits: "580+",
      contributions: "580+ Contributions",
      pullRequests: "18+",
      currentStreak: 45,
      profileUrl: "https://github.com/vigneshk1845"
    },
    leetcode: {
      username: "M9iiQQLnVQ",
      profileUrl: "https://leetcode.com/u/M9iiQQLnVQ/",
      solved: "350+",
      contests: "50+",
      rating: "Top 12% (1,680+)",
      easy: 145,
      medium: 175,
      hard: 32,
      accuracy: "78.4%",
      acceptance: "78.4%",
      globalRank: "Top 12%"
    },
    rpgLevels: [
      { skill: "Coding & Logic", level: 88, max: 100 },
      { skill: "Problem Solving (DSA)", level: 86, max: 100 },
      { skill: "Computer Vision / AI", level: 84, max: 100 },
      { skill: "Full Stack Systems", level: 82, max: 100 }
    ]
  }
};

export const SKILLS: SkillItem[] = [
  {
    id: "python",
    name: "Python",
    category: "core",
    iconKey: "python",
    level: 92,
    growthStage: "blossom",
    growthDescription: "Advanced scripting, AI/ML pipelines, OpenCV, Flask & automation",
    experience: "3+ years",
    tags: ["OpenCV", "NumPy", "PyTorch", "Automation", "Flask"],
    color: "#4B8BBE"
  },
  {
    id: "java",
    name: "Java",
    category: "core",
    iconKey: "java",
    level: 88,
    growthStage: "blossom",
    growthDescription: "OOP mastery, robust Data Structures & Algorithms, NPTEL certified",
    experience: "2+ years",
    tags: ["Core Java", "OOP", "DSA", "Collections", "Multithreading"],
    color: "#E76F51"
  },
  {
    id: "dsa",
    name: "Data Structures",
    category: "core",
    iconKey: "dsa",
    level: 86,
    growthStage: "blossom",
    growthDescription: "350+ LeetCode problems solved, Trees, Graphs, Dynamic Programming",
    experience: "Daily Practice",
    tags: ["Trees", "Graphs", "DP", "Greedy", "Binary Search"],
    color: "#3B82F6"
  },
  {
    id: "cv",
    name: "Computer Vision",
    category: "ai",
    iconKey: "cv",
    level: 84,
    growthStage: "blossom",
    growthDescription: "Real-time face detection, object tracking, YOLO, FaceNet embeddings",
    experience: "1.5+ years",
    tags: ["OpenCV", "YOLOv8", "Face Recognition", "MediaPipe", "PyTorch"],
    color: "#E87898"
  },
  {
    id: "flask",
    name: "Flask",
    category: "web",
    iconKey: "flask",
    level: 82,
    growthStage: "sprout",
    growthDescription: "Lightweight REST APIs, AI model serving, microservices",
    experience: "2 years",
    tags: ["REST APIs", "SQLAlchemy", "JWT Auth", "Blueprint", "CORS"],
    color: "#303442"
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "web",
    iconKey: "nodejs",
    level: 80,
    growthStage: "sprout",
    growthDescription: "Asynchronous backend runtimes, Express routing, middleware architecture",
    experience: "1.5 years",
    tags: ["Express.js", "Async I/O", "REST APIs", "JWT", "WebSockets"],
    color: "#68A063"
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    iconKey: "mysql",
    level: 85,
    growthStage: "sprout",
    growthDescription: "Relational database schema design, indexing, transactions & query optimization",
    experience: "2 years",
    tags: ["Relational Schema", "Joins", "Indexes", "Stored Procedures", "ACID"],
    color: "#00758F"
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    iconKey: "git",
    level: 90,
    growthStage: "blossom",
    growthDescription: "Version control, feature branching, merge workflows & open-source contributions",
    experience: "3+ years",
    tags: ["Branching", "CI/CD", "Rebase", "PR Reviews", "Semantic Commits"],
    color: "#F05032"
  }
];

export const SOFT_SKILLS = [
  "Problem Solving",
  "Leadership",
  "Innovative Thinking",
  "Critical Thinking",
  "Adaptability",
  "Teamwork",
  "Technical Communication",
  "Agile Mindset"
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "cv-class-monitoring",
    title: "CV & ML Class Monitoring",
    worldName: "Anime Classroom & Vision World",
    worldSubtitle: "Vision-powered Attendance & Attention Analytics",
    category: "AI & Computer Vision",
    description: "Automated attendance tracking and classroom monitoring using Computer Vision and Machine Learning.",
    fullOverview: "A high-precision real-time classroom surveillance and automated attendance intelligence system. Eliminates manual roll calls by leveraging multi-face detection algorithms (YOLOv8 + FaceNet) to detect, align, and authenticate students simultaneously within 300 milliseconds. Features an interactive dashboard with live bounding box feeds, attendance history, and automated absentee notifications.",
    problemSolved: "Manual attendance in universities consumes 10-15 minutes of every lecture and is vulnerable to proxy attendance. This system achieves 98.4% recognition accuracy under varying lighting conditions.",
    architecture: [
      "Input stream capture from high-definition classroom camera nodes",
      "Face detection pipeline via MTCNN & YOLOv8 facial landmark extractor",
      "128-d facial embedding generation through pre-trained FaceNet",
      "Euclidean distance matching against encrypted biometric embeddings database",
      "Real-time attendance logging into MySQL with automated teacher reports"
    ],
    keyFeatures: [
      "Simultaneous multi-face recognition (up to 40 students per frame)",
      "Liveness detection to prevent photo and screen spoofing attacks",
      "Automated attendance export to PDF and institutional CSV sheets",
      "Real-time low-latency overlay bounding boxes with confidence scores"
    ],
    techStack: ["Python", "OpenCV", "FaceNet", "YOLOv8", "PyTorch", "Flask", "MySQL"],
    metrics: [
      { label: "Recognition Accuracy", value: "98.4%" },
      { label: "Processing Latency", value: "<320ms" },
      { label: "Time Saved / Class", value: "12 mins" }
    ],
    image: "/src/assets/images/project_cv_class_1788237953468.jpg",
    badge: "Featured AI Project",
    githubUrl: "https://github.com/vigneshk1845",
    liveDemoUrl: "https://github.com/vigneshk1845",
    interactiveDemoType: "cv_detection"
  },
  {
    id: "smart-api-manager",
    title: "Smart API Manager",
    worldName: "Digital Shrine & Security Vault",
    worldSubtitle: "Cryptographic Key Management & Access Governance",
    category: "Backend & Cybersecurity",
    description: "A secure API key management system with encrypted storage and granular access control.",
    fullOverview: "A developer-centric security gateway engineered to store, rotate, and enforce rate limits on API keys and confidential secrets. Features military-grade AES-256-GCM encryption at rest, tokenized client authentication, and real-time usage telemetry to protect backend services against brute-force abuse and credential leakage.",
    problemSolved: "Developers frequently leak API credentials in git commits or lack centralized revocation tools. Smart API Manager provides instant key rotation, granular scope permissions, and automated suspicious-traffic throttling.",
    architecture: [
      "Zero-knowledge encrypted key storage with master secret derivation",
      "Token bucket rate limiting middleware implemented in Python",
      "Encrypted SQLite/MySQL metadata cache with instant revocation support",
      "RESTful administrative API protected by RSA-signed JWT tokens"
    ],
    keyFeatures: [
      "AES-256-GCM hardware-accelerated secret encryption",
      "Configurable per-key request quotas and burst limits",
      "Instant 1-click credential revocation and automated rotation triggers",
      "Interactive developer dashboard with live latency and quota charts"
    ],
    techStack: ["Python", "Flask", "Cryptography (AES-256)", "SQLite", "JWT", "TailwindCSS"],
    metrics: [
      { label: "Key Encryption", value: "AES-256" },
      { label: "Throughput", value: "1,200 req/s" },
      { label: "Leak Prevention", value: "100%" }
    ],
    image: "/src/assets/images/project_api_vault_1788237967850.jpg",
    badge: "Security & Backend",
    githubUrl: "https://github.com/vigneshk1845",
    liveDemoUrl: "https://github.com/vigneshk1845",
    interactiveDemoType: "api_vault"
  },
  {
    id: "complaint-management-system",
    title: "Complaint Management System",
    worldName: "Anime School Campus & Portal",
    worldSubtitle: "Three-Tiered Campus Resolution Network",
    category: "Full-Stack Web App",
    description: "Full-stack web app with role-based access (Admin/Teacher/Student) – complaint raising, assignment, and real-time tracking.",
    fullOverview: "An enterprise campus grievance lifecycle manager designed for educational institutions. Provides segregated role-based portals for Students, Teachers, and Department Administrators. Students can log grievances with category tags and image proof, while automated routing dispatches tickets directly to assigned staff with SLA countdown timers.",
    problemSolved: "Disorganized grievance handling and email chains led to delayed resolutions and zero accountability. This platform reduced average complaint resolution turnaround time from 7 days to under 36 hours.",
    architecture: [
      "Role-Based Access Control (RBAC) middleware verifying session tokens",
      "Relational ticketing state machine (Raised → In Review → Resolved → Closed)",
      "Automated email and webhook dispatchers on status change triggers",
      "Clean responsive dashboard frontend connecting to Node.js backend"
    ],
    keyFeatures: [
      "Role-tailored dashboards for Students, Faculty, and Principal Admin",
      "Real-time ticket timeline with priority escalation flags",
      "Anonymous whistle-blower mode for sensitive campus matters",
      "Comprehensive resolution analytics and department performance reports"
    ],
    techStack: ["Node.js", "Express", "MySQL", "React", "TailwindCSS", "Multer"],
    metrics: [
      { label: "Resolution Speed", value: "36 hrs" },
      { label: "Active Roles", value: "3 Tier" },
      { label: "User Satisfaction", value: "96%" }
    ],
    image: "/src/assets/images/project_campus_1788237985525.jpg",
    badge: "Full-Stack Portal",
    githubUrl: "https://github.com/vigneshk1845",
    liveDemoUrl: "https://github.com/vigneshk1845",
    interactiveDemoType: "complaint_system"
  },
  {
    id: "future-projects-lab",
    title: "More Coming Soon",
    worldName: "Future Horizon & AI Lab",
    worldSubtitle: "Next-Gen Intelligent Systems in Development",
    category: "Research & Innovation",
    description: "Exploring new ideas at the intersection of AI, agentic systems, and full-stack development.",
    fullOverview: "Currently researching autonomous AI developer workflows, multi-modal vision reasoning models, and distributed high-concurrency microservices. Open to collaborating on cutting-edge open-source software and impactful engineering challenges.",
    problemSolved: "Pushing the envelope on real-time interactive intelligence and developer productivity tools.",
    architecture: [
      "Multi-modal vision transformers and real-time inference streaming",
      "Next-generation edge computing with serverless micro-backends"
    ],
    keyFeatures: [
      "Edge-optimized lightweight neural networks",
      "Reactive WebSocket state synchronization",
      "Open source contributions and research articles"
    ],
    techStack: ["TypeScript", "PyTorch", "FastAPI", "Docker", "Gemini 2.5", "WebSockets"],
    metrics: [
      { label: "Status", value: "In Lab" },
      { label: "Research Focus", value: "Edge AI" },
      { label: "Vibe", value: "100% Passion" }
    ],
    image: "/src/assets/images/sunset_journey_dev_1788238005780.jpg",
    badge: "R&D Chapter",
    githubUrl: "https://github.com/vigneshk1845",
    interactiveDemoType: "ai_assistant"
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "college",
    institution: "V.S.B Engineering College",
    degree: "B.Tech",
    field: "Information Technology",
    score: "GPA: 7.8",
    location: "Karur, Tamil Nadu",
    period: "2023 – Present",
    highlights: [
      "Specializing in Software Engineering, Computer Vision, and Cloud Technologies",
      "Core active member in developer and coding clubs, mentoring junior peers",
      "Led university project hackathons on automated classroom surveillance"
    ],
    status: "current"
  },
  {
    id: "school",
    institution: "Veveaham Higher Secondary School",
    degree: "12th Standard",
    field: "Higher Secondary (Computer Science & Maths)",
    score: "Excellence Distinction",
    location: "Dharapuram, Tamil Nadu",
    period: "2022 – 2023",
    highlights: [
      "Built first Python & C++ algorithmic programs",
      "Secured top academic standing in Computer Science and Mathematics",
      "Active participant in science exhibitions and algorithmic puzzles"
    ],
    status: "completed"
  }
];

export const CERTIFICATIONS: AchievementItem[] = [
  {
    id: "nptel-java",
    title: "Java Certification",
    issuer: "NPTEL / IIT",
    issueDate: "2023",
    scoreOrLevel: "Elite Standard",
    progress: 100,
    iconType: "coffee",
    skillsUnlocked: ["Java OOP", "Collections Framework", "Concurrency", "Applet/AWT"],
    unlocked: true
  },
  {
    id: "infosys-java",
    title: "Java Achievement",
    issuer: "Infosys Springboard",
    issueDate: "2023",
    scoreOrLevel: "Certified Developer",
    progress: 100,
    iconType: "trophy",
    skillsUnlocked: ["Enterprise Java", "Clean Architecture", "Unit Testing"],
    unlocked: true
  },
  {
    id: "infosys-python",
    title: "Python Achievement",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    scoreOrLevel: "Advanced Master",
    progress: 100,
    iconType: "python",
    skillsUnlocked: ["Pythonic Code", "Data Structures", "Functional Programming"],
    unlocked: true
  },
  {
    id: "problem-solving",
    title: "Problem Solving (DSA)",
    issuer: "HackerRank & LeetCode",
    issueDate: "2024",
    scoreOrLevel: "5-Star Gold Badge",
    progress: 100,
    iconType: "star",
    skillsUnlocked: ["Graph Traversal", "Dynamic Programming", "Algorithmic Complexity"],
    unlocked: true
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "internship",
    chapterNumber: "CHAPTER 04",
    chapterTitle: "THE DEVELOPER AWAKENS",
    role: "Software Developer Intern",
    company: "Tech Solutions / Engineering Lab",
    location: "Tamil Nadu, India",
    period: "Recent / Current Chapter",
    summary: "A milestone chapter where academic theory transformed into resilient, real-world software.",
    responsibilities: [
      "Gained hands-on experience with modern web technologies and full-stack frameworks.",
      "Sharpened algorithmic problem-solving skills with continuous LeetCode Java & Python practice.",
      "Contributed to AI-driven projects involving Computer Vision and real-time machine learning pipelines.",
      "Collaborated across agile dynamic teams on ML/AI product initiatives and code reviews."
    ],
    techUsed: ["Python", "Java", "Computer Vision", "Node.js", "MySQL", "Git"]
  }
];

// Live GitHub Timeline Activity Stream
export const GITHUB_LIVE_TIMELINE: GitHubTimelineEvent[] = [
  {
    id: "gh-1",
    repo: "CV-Class-Monitoring",
    repoUrl: "https://github.com/vigneshk1845",
    type: "commit",
    message: "feat(pipeline): optimize multi-face YOLOv8 + FaceNet embedding extraction latency to <320ms",
    timestamp: "2 hours ago",
    hash: "7f9a2e1",
    branch: "main",
    changes: { additions: 148, deletions: 23 }
  },
  {
    id: "gh-2",
    repo: "Smart-API-Vault",
    repoUrl: "https://github.com/vigneshk1845",
    type: "commit",
    message: "feat(security): implement AES-256-GCM hardware key encryption and token bucket rate limiter",
    timestamp: "Yesterday",
    hash: "3c84b10",
    branch: "main",
    changes: { additions: 230, deletions: 45 }
  },
  {
    id: "gh-3",
    repo: "Campus-Grievance-System",
    repoUrl: "https://github.com/vigneshk1845",
    type: "pr_merge",
    message: "merge(rbac): 3-tier Student/Teacher/Admin ticketing lifecycle with automated SLA countdown",
    timestamp: "3 days ago",
    hash: "e5190df",
    branch: "release/v1.2",
    changes: { additions: 412, deletions: 89 }
  },
  {
    id: "gh-4",
    repo: "DSA-LeetCode-Solutions",
    repoUrl: "https://github.com/vigneshk1845",
    type: "commit",
    message: "dsa: add optimal Java & Python solutions for Tree & Graph DP patterns (350+ milestone)",
    timestamp: "4 days ago",
    hash: "a94d88c",
    branch: "master",
    changes: { additions: 95, deletions: 12 }
  },
  {
    id: "gh-5",
    repo: "sakura-developer-portfolio",
    repoUrl: "https://github.com/vigneshk1845",
    type: "push",
    message: "chore(ui): polish anime theme aesthetics, Japanese quote hover translations & live telemetry",
    timestamp: "5 days ago",
    hash: "28e07a3",
    branch: "main",
    changes: { additions: 320, deletions: 65 }
  }
];

// Live LeetCode Timeline Activity Stream
export const LEETCODE_LIVE_TIMELINE: LeetCodeTimelineEvent[] = [
  {
    id: "lc-1",
    title: "Course Schedule II",
    titleSlug: "course-schedule-ii",
    problemUrl: "https://leetcode.com/problems/course-schedule-ii/",
    difficulty: "Medium",
    category: "Graph / Topological Sort",
    timestamp: "3 hours ago",
    runtimeSpeed: "98.7% faster (3ms)",
    memorySpeed: "89.4% memory",
    status: "Accepted",
    language: "Java"
  },
  {
    id: "lc-2",
    title: "Trapping Rain Water",
    titleSlug: "trapping-rain-water",
    problemUrl: "https://leetcode.com/problems/trapping-rain-water/",
    difficulty: "Hard",
    category: "Two Pointers / Monotonic Stack",
    timestamp: "Yesterday",
    runtimeSpeed: "99.2% faster (1ms)",
    memorySpeed: "94.1% memory",
    status: "Accepted",
    language: "Java"
  },
  {
    id: "lc-3",
    title: "LRU Cache",
    titleSlug: "lru-cache",
    problemUrl: "https://leetcode.com/problems/lru-cache/",
    difficulty: "Medium",
    category: "Hash Table / Doubly Linked List",
    timestamp: "2 days ago",
    runtimeSpeed: "96.4% faster (12ms)",
    memorySpeed: "91.8% memory",
    status: "Accepted",
    language: "Java"
  },
  {
    id: "lc-4",
    title: "Word Break",
    titleSlug: "word-break",
    problemUrl: "https://leetcode.com/problems/word-break/",
    difficulty: "Medium",
    category: "Dynamic Programming / Trie",
    timestamp: "3 days ago",
    runtimeSpeed: "95.1% faster (2ms)",
    memorySpeed: "88.6% memory",
    status: "Accepted",
    language: "Python"
  },
  {
    id: "lc-5",
    title: "Binary Tree Maximum Path Sum",
    titleSlug: "binary-tree-maximum-path-sum",
    problemUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    difficulty: "Hard",
    category: "Binary Tree / DFS",
    timestamp: "5 days ago",
    runtimeSpeed: "99.6% faster (1ms)",
    memorySpeed: "92.3% memory",
    status: "Accepted",
    language: "Java"
  },
  {
    id: "lc-6",
    title: "Longest Substring Without Repeating Characters",
    titleSlug: "longest-substring-without-repeating-characters",
    problemUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    difficulty: "Medium",
    category: "Sliding Window",
    timestamp: "6 days ago",
    runtimeSpeed: "97.8% faster (4ms)",
    memorySpeed: "90.2% memory",
    status: "Accepted",
    language: "Java"
  }
];
