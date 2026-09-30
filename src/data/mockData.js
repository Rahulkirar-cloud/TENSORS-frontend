// Central mock data source. In a real app this would come from an API.

export const student = {
  name: 'Admin',
  email: 'aarav.mehta@example.com',
  education: 'B.Tech, Computer Science — 3rd Year',
  goals: 'Crack campus placements and master full-stack development',
  skills: ['JavaScript', 'React', 'DBMS', 'Data Structures', 'Python'],
  streak: 12,
  avatarInitials: 'A',
}

export const dashboardStats = [
  { id: 'courses', label: 'Courses Enrolled', value: 6, delta: '+1 this month' },
  { id: 'hours', label: 'Learning Hours', value: '84h', delta: '+6h this week' },
  { id: 'quiz', label: 'Quiz Score', value: '87%', delta: '+4% vs last week' },
  { id: 'streak', label: 'Current Streak', value: '12 days', delta: 'Personal best' },
]

export const todayPlan = [
  { id: 't1', subject: 'DBMS', topic: 'Normalization (1NF–3NF)', duration: '45 min', done: true },
  { id: 't2', subject: 'React', topic: 'Custom Hooks Deep Dive', duration: '40 min', done: false },
  { id: 't3', subject: 'Data Structures', topic: 'Binary Search Trees', duration: '50 min', done: false },
  { id: 't4', subject: 'Aptitude', topic: 'Time & Work Practice Set', duration: '30 min', done: false },
]

export const weeklyProgress = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3.1 },
  { day: 'Wed', hours: 1.8 },
  { day: 'Thu', hours: 3.6 },
  { day: 'Fri', hours: 2.2 },
  { day: 'Sat', hours: 4.0 },
  { day: 'Sun', hours: 2.9 },
]

export const quizPerformance = [
  { subject: 'DBMS', score: 92 },
  { subject: 'React', score: 78 },
  { subject: 'DSA', score: 85 },
  { subject: 'OS', score: 70 },
  { subject: 'Aptitude', score: 88 },
]

export const recommended = [
  { id: 'r1', title: 'Indexing & Query Optimization', subject: 'DBMS', reason: 'Based on your normalization quiz score' },
  { id: 'r2', title: 'useReducer vs useState', subject: 'React', reason: 'Your last doubt was about state management' },
  { id: 'r3', title: 'Graph Traversal (BFS/DFS)', subject: 'DSA', reason: 'Comes up often in your target companies' },
]

export const courses = [
  { id: 'c1', name: 'Java Programming Masterclass', instructor: 'Priya Sharma', category: 'Programming', progress: 72, hours: '38h', icon: 'Coffee' },
  { id: 'c2', name: 'Modern React & Redux', instructor: 'Rohan Iyer', category: 'Programming', progress: 45, hours: '22h', icon: 'Atom' },
  { id: 'c3', name: 'Applied Statistics for ML', instructor: 'Dr. Kavita Rao', category: 'Data Science', progress: 30, hours: '18h', icon: 'ScatterChart' },
  { id: 'c4', name: 'Discrete Mathematics', instructor: 'Arjun Nair', category: 'Mathematics', progress: 88, hours: '26h', icon: 'Sigma' },
  { id: 'c5', name: 'Neural Networks Fundamentals', instructor: 'Dr. Meera Pillai', category: 'AI/ML', progress: 15, hours: '9h', icon: 'BrainCircuit' },
  { id: 'c6', name: 'Operating Systems Concepts', instructor: 'Sanjay Verma', category: 'Computer Science', progress: 60, hours: '31h', icon: 'Cpu' },
]

export const courseCategories = ['All', 'Programming', 'Mathematics', 'Data Science', 'AI/ML', 'Computer Science']

export const notesLibrary = [
  { id: 'n1', title: 'Java OOP Concepts — Complete Notes', subject: 'Java', topic: 'Object-Oriented Programming', type: 'PDF', pages: 24, bookmarked: true },
  { id: 'n2', title: 'JavaScript Closures & Scope', subject: 'JavaScript', topic: 'Fundamentals', type: 'Notes', pages: 12, bookmarked: false },
  { id: 'n3', title: 'React Hooks Cheat Sheet', subject: 'React', topic: 'Hooks', type: 'PDF', pages: 8, bookmarked: true },
  { id: 'n4', title: 'Neural Networks — Backpropagation', subject: 'AI', topic: 'Deep Learning', type: 'Notes', pages: 16, bookmarked: false },
  { id: 'n5', title: 'Data Preprocessing Techniques', subject: 'Data Science', topic: 'Preprocessing', type: 'PDF', pages: 20, bookmarked: false },
  { id: 'n6', title: 'ER Diagrams & Normal Forms', subject: 'DBMS', topic: 'Database Design', type: 'Notes', pages: 14, bookmarked: true },
  { id: 'n7', title: 'AWS Fundamentals Overview', subject: 'Cloud Computing', topic: 'Cloud Basics', type: 'PDF', pages: 30, bookmarked: false },
]

export const noteSubjects = ['All', 'Java', 'JavaScript', 'React', 'AI', 'Data Science', 'DBMS', 'Cloud Computing']

export const quizBank = [
  {
    id: 'q1',
    question: 'Which normal form eliminates transitive dependency?',
    options: ['1NF', '2NF', '3NF', 'BCNF'],
    correctIndex: 2,
  },
  {
    id: 'q2',
    question: 'What does the "S" in SOLID principles stand for?',
    options: ['Single Responsibility', 'Shared State', 'Static Typing', 'Sequential Logic'],
    correctIndex: 0,
  },
  {
    id: 'q3',
    question: 'Which React hook lets you memoize an expensive computation?',
    options: ['useEffect', 'useMemo', 'useRef', 'useState'],
    correctIndex: 1,
  },
  {
    id: 'q4',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(1)'],
    correctIndex: 2,
  },
  {
    id: 'q5',
    question: 'Which layer of the OSI model handles routing?',
    options: ['Data Link', 'Network', 'Transport', 'Session'],
    correctIndex: 1,
  },
]

export const achievements = [
  { id: 'a1', title: '7 Day Streak', description: 'Studied 7 days in a row', icon: 'Flame', earned: true },
  { id: 'a2', title: 'Quiz Master', description: 'Scored 90%+ on 5 quizzes', icon: 'Trophy', earned: true },
  { id: 'a3', title: 'Fast Learner', description: 'Completed a course in under a week', icon: 'Zap', earned: false },
  { id: 'a4', title: 'Course Completed', description: 'Finished your first full course', icon: 'GraduationCap', earned: true },
]

export const subjectOptions = ['DBMS', 'React', 'Data Structures', 'Java', 'Operating Systems', 'Aptitude', 'AI/ML']

export const suggestedQuestions = [
  'Explain Java OOP',
  'What is photosynthesis?',
  'Solve this mathematics problem',
  'Explain database normalization',
]

// Simple canned AI responses so the Doubt Solver feels alive without a backend.
export const mockAiResponses = {
  'explain java oop': `Java's OOP model rests on four pillars:

1. Encapsulation — bundling data and methods inside a class, hiding internal state behind getters/setters.
2. Inheritance — a class (subclass) can reuse and extend fields/methods from a parent class using "extends".
3. Polymorphism — the same method name behaves differently depending on the object calling it (overriding/overloading).
4. Abstraction — exposing only essential behavior through interfaces or abstract classes, hiding implementation detail.

Example:
class Animal {
  makeSound() { console.log("..."); }
}
class Dog extends Animal {
  makeSound() { console.log("Bark"); }
}`,
  'what is photosynthesis?': `Photosynthesis is the process plants use to convert light energy into chemical energy.

Equation:
6CO2 + 6H2O + light → C6H12O6 + 6O2

It happens mainly in the chloroplasts, using chlorophyll to capture sunlight. The glucose produced fuels the plant's growth, and oxygen is released as a byproduct — which is also what we breathe.`,
  'solve this mathematics problem': `Sure — paste the exact problem (equation, limits, or the question text) and I will walk through it step by step, showing the working and the final answer.`,
  'explain database normalization': `Normalization organizes relational data to reduce redundancy and avoid update anomalies.

- 1NF: Each column holds atomic (indivisible) values, no repeating groups.
- 2NF: 1NF + no partial dependency on a composite key.
- 3NF: 2NF + no transitive dependency (non-key columns depend only on the key).
- BCNF: A stricter version of 3NF for edge cases with overlapping candidate keys.

In practice, most production schemas aim for 3NF, then selectively denormalize for performance.`,
  default: `That's a good question. Here's a concise breakdown:

1. Start with the core definition or concept.
2. Break it into the 2-3 sub-parts that usually confuse students.
3. Work through one small example.

Could you share a bit more detail (which chapter or a specific line from your textbook) so I can tailor the explanation further?`,
}
