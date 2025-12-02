# TypeScript Mastery Course

A comprehensive, project-based TypeScript curriculum that transforms mid-level JavaScript developers into TypeScript experts through building "TypeSafe" - a full-stack task management application.

## 🎯 Course Overview

This course uses a problem-driven approach where you'll refactor vulnerable JavaScript code into robust TypeScript implementations, learning architectural patterns and type system design along the way.

### What You'll Build

**TypeSafe Project** - A full-stack task management application featuring:
- Backend: Node.js + Express + TypeScript
- Frontend: React + TypeScript (Vite)
- Database: PostgreSQL with Prisma ORM
- Authentication: JWT tokens
- Validation: Zod
- Testing: Vitest + React Testing Library

### Who This Course Is For

- Mid-level JavaScript developers
- Comfortable with ES6+, async/await, modules
- Experience with React and/or Node.js
- Little to no TypeScript experience
- Goal: Lead TypeScript projects and mentor teams

## 📚 Course Structure

The course consists of 14 learning modules with ~50 scenarios over 40-60 hours:

1. **TypeScript Fundamentals & Setup** - Environment setup, compiler configuration
2. **Type Annotations & Inference** - Primitives, unions, literals, type assertions
3. **Functions & Type Safety** - Function types, overloads, async/await
4. **Objects, Interfaces & Type Aliases** - Interfaces, type aliases, composition
5. **Arrays, Tuples & Enums** - Array types, tuples, enums
6. **Classes & OOP in TypeScript** - Classes, access modifiers, abstract classes
7. **Generics Fundamentals** - Generic types, constraints, defaults
8. **Advanced Generics & Constraints** - Complex generics, conditional types
9. **Utility Types & Type Manipulation** - Built-in utilities, mapped types
10. **Backend Architecture** - Express + TypeScript integration
11. **Frontend Architecture** - React + TypeScript integration
12. **Error Handling & Validation** - Discriminated unions, Zod integration
13. **Advanced Patterns & Architecture** - Design patterns with TypeScript
14. **Migration, Best Practices & Mentorship** - Team leadership, migration strategies

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL (for database scenarios)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd typescript-mastery-course
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the web application:
```bash
npm run dev:web
```

Run tests:
```bash
npm test
```

## 📖 Learning Approach

### Problem-First Learning

Each lesson starts with broken JavaScript code demonstrating a real-world problem:
1. **Read the Scenario** - Understand the problem context
2. **Examine Problem Code** - See the vulnerable JavaScript
3. **Attempt Solution** - Refactor to TypeScript
4. **Run Tests** - Validate your solution
5. **Compare with Solution** - Review the provided solution
6. **Read Explanation** - Understand the reasoning
7. **Apply to TypeSafe Project** - Integrate into the main project

### Incremental Complexity

- 80% coding, 20% theory
- Each module builds on previous knowledge
- Focus on maintainability and scalability
- Production-ready patterns and practices

## 📁 Project Structure

```
typescript-mastery-course/
├── packages/
│   ├── api/              # Express API backend
│   ├── web/              # React frontend
│   └── shared/           # Shared types and utilities
├── scenarios/            # Course lessons
│   ├── module-01/
│   ├── module-02/
│   └── ...
└── docs/                 # Documentation
    ├── concepts/         # Concept explanations
    ├── cheatsheets/      # Quick references
    └── glossary.md       # TypeScript terminology
```

## 🛠️ Available Scripts

- `npm run build` - Build all packages
- `npm test` - Run all tests
- `npm run dev:api` - Start API development server
- `npm run dev:web` - Start web development server
- `npm run lint` - Lint all packages
- `npm run format` - Format code with Prettier

## 📚 Documentation

- [Setup Guide](docs/setup-guide.md) - Detailed installation instructions
- [Glossary](docs/glossary.md) - TypeScript terminology
- [Concepts](docs/concepts/) - In-depth concept explanations
- [Cheat Sheets](docs/cheatsheets/) - Quick reference guides

## 🎓 Learning Outcomes

By completing this course, you will be able to:

1. **Type System Mastery**
   - Design complex type systems from scratch
   - Use advanced types (generics, conditional, mapped)
   - Create custom utility types

2. **Architecture Skills**
   - Structure large TypeScript applications
   - Implement design patterns with type safety
   - Make informed architectural decisions

3. **Framework Integration**
   - Build type-safe Express APIs
   - Create type-safe React applications
   - Integrate TypeScript with common tools

4. **Team Leadership**
   - Review TypeScript code effectively
   - Establish team coding standards
   - Mentor junior developers
   - Migrate JavaScript codebases

## 📝 License

This course is provided for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines before submitting PRs.

## 📧 Support

For questions or issues, please open an issue in the repository.

---

**Ready to master TypeScript?** Start with [Module 01: TypeScript Fundamentals & Setup](scenarios/module-01/README.md)
