/**
 * SUBJECT_OPTIONS - Scalable subject configuration
 *
 * To add a new subject:
 * 1. Add a new object to this array
 * 2. Required fields: id (unique), name, icon, category
 * 3. Optional fields: description, topics, difficulty
 *
 * Example:
 * {
 *   id: "new-subject",
 *   name: "New Subject",
 *   icon: "📚",
 *   category: "Category Name",
 *   description: "Subject description",
 *   difficulty: "intermediate"
 * }
 */

export const SUBJECT_OPTIONS = [
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    icon: "📊",
    category: "Computer Science",
    description: "Master algorithms and data structures",
    difficulty: "intermediate",
    topics: [
      "Arrays and Linked Lists",
      "Stacks and Queues",
      "Trees and Graphs",
      "Sorting Algorithms",
      "Searching Algorithms",
      "Dynamic Programming",
      "Greedy Algorithms",
      "Hash Tables",
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    icon: "🌐",
    category: "Web Development",
    description: "Learn frontend and backend web technologies",
    difficulty: "beginner",
    topics: [
      "HTML & CSS Basics",
      "JavaScript Fundamentals",
      "React & Components",
      "State Management",
      "APIs & REST",
      "Backend with Node.js",
      "Databases",
      "Deployment",
    ],
  },
  {
    id: "oops",
    name: "Object-Oriented Programming",
    icon: "🏗️",
    category: "Programming",
    description: "Understand OOP concepts and design patterns",
    difficulty: "intermediate",
    topics: [
      "Classes and Objects",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction",
      "Design Patterns",
      "SOLID Principles",
      "Composition vs Inheritance",
    ],
  },
  {
    id: "dbms",
    name: "Database Management Systems",
    icon: "🗄️",
    category: "Databases",
    description: "Learn database design and SQL",
    difficulty: "intermediate",
    topics: [
      "Database Basics",
      "ER Diagrams",
      "Normalization",
      "SQL Queries",
      "Indexing",
      "Transactions",
      "Query Optimization",
      "Backup & Recovery",
    ],
  },
  {
    id: "os",
    name: "Operating Systems",
    icon: "⚙️",
    category: "System Concepts",
    description: "Understand OS concepts and processes",
    difficulty: "advanced",
    topics: [
      "Processes & Threads",
      "Memory Management",
      "File Systems",
      "Scheduling Algorithms",
      "Deadlock",
      "Synchronization",
      "Virtual Memory",
      "I/O Management",
    ],
  },
  {
    id: "networking",
    name: "Computer Networks",
    icon: "🔗",
    category: "Networking",
    description: "Learn networking protocols and architecture",
    difficulty: "advanced",
    topics: [
      "OSI Model",
      "TCP/IP Protocol",
      "Routing Protocols",
      "DNS & DHCP",
      "Network Security",
      "Firewalls",
      "VPN & SSL/TLS",
      "Network Performance",
    ],
  },
  {
    id: "system-design",
    name: "System Design",
    icon: "🏛️",
    category: "Architecture",
    description: "Design scalable systems and architectures",
    difficulty: "advanced",
    topics: [
      "Scalability Principles",
      "Load Balancing",
      "Caching Strategies",
      "Database Sharding",
      "Microservices",
      "Message Queues",
      "API Design",
      "Monitoring & Logging",
    ],
  },
  {
    id: "ml",
    name: "Machine Learning",
    icon: "🤖",
    category: "AI/ML",
    description: "Learn machine learning algorithms and concepts",
    difficulty: "advanced",
    topics: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Deep Learning",
      "NLP Basics",
      "Computer Vision",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
]

/**
 * Helper function to get subjects by category
 */
export function getSubjectsByCategory(category) {
  return SUBJECT_OPTIONS.filter((subject) => subject.category === category)
}

/**
 * Helper function to get a subject by ID
 */
export function getSubjectById(id) {
  return SUBJECT_OPTIONS.find((subject) => subject.id === id)
}

/**
 * Helper function to get all unique categories
 */
export function getAllCategories() {
  return [...new Set(SUBJECT_OPTIONS.map((subject) => subject.category))]
}
