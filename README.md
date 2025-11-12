# Connect 101 - Employee Matching Platform

> Modernized recreation of the original ATB Financial Connect 101 employee matching system (May 2019 – Sept. 2019)

## Overview

Connect 101 is an intelligent employee matching platform that connects junior and senior employees at ATB Financial for mentorship opportunities and coffee chats. Through a conversational chatbot interface, employees create profiles by answering questions about their interests, career goals, and skills. The system then uses smart matching algorithms to pair them with compatible colleagues.

## Original Project (2019)

During my Product Management internship at ATB Financial, I led the development of Connect 101, which achieved:

- ✅ **Furthered ATB Financial's 91% employee engagement rate** by matching 5,500 junior and senior employees based on interests and career goals
- ✅ **Improved employee matching by 32%** through the implementation of TensorFlow fuzzy string matching and Knowledge Graph API
- ✅ **Reduced meeting setup time** by utilizing G Suite APIs to retrieve directory information and automatically schedule coffee chats on Google Calendar

## This Modern Rebuild

This repository contains a modernized, fully functional web application that recreates the core functionality of the original system using 2025 best practices:

### Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Matching Algorithm**: Custom scoring system with fuzzy string matching
- **Architecture**: App Router, Server Components, API Routes
- **Deployment Ready**: Optimized for Vercel/Netlify

### Features

#### 1. Conversational Onboarding
- Interactive chatbot interface for profile creation
- Collects name, role (junior/senior), department, interests, career goals, and skills
- Natural, conversational flow vs traditional forms

#### 2. Smart Matching Algorithm
- **Interest Matching** (40% weight): Fuzzy matching on professional interests
- **Career Goals Alignment** (35% weight): Matches based on learning objectives
- **Skills Overlap** (25% weight): Identifies complementary skill sets
- Returns top 3 matches with compatibility scores

#### 3. Employee Profiles
- Stores mock employee database (4 senior employees currently)
- Real system would integrate with company directory
- Profile includes interests, goals, skills, and department

#### 4. Modern UI/UX
- Clean, professional design with dark mode support
- Real-time chat interface with typing indicators
- Responsive layout for desktop and mobile
- Smooth animations and transitions

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/samuelkahessay/connect-101-chatbot.git
cd connect-101-chatbot

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Visit `http://localhost:3000` to use the application.

## How It Works

### 1. Profile Creation
The chatbot guides you through a series of questions:
- What's your name?
- Are you a junior or senior employee?
- Which department do you work in?
- What are your professional interests? (comma-separated)
- What are your career goals? (comma-separated)
- What skills do you have? (comma-separated)

### 2. Matching Process
Once your profile is complete, the system:
1. Filters eligible candidates (juniors match with seniors, seniors match with anyone)
2. Calculates compatibility scores based on:
   - Shared professional interests
   - Aligned career goals
   - Complementary skills
3. Sorts matches by score and returns top 3

### 3. Results
You receive:
- Your complete profile summary
- Top 3 compatible matches with scores
- Each match shows: name, department, role, interests, and how they can help
- Next steps for scheduling coffee chats

## Architecture

```
connect-101-chatbot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API with matching logic
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── ChatInterface.tsx          # Main chat component
│   ├── MessageBubble.tsx          # Individual message display
│   └── ChatInput.tsx              # Message input field
├── types/
│   ├── chat.ts                    # Chat message types
│   └── employee.ts                # Employee profile types
└── public/                        # Static assets
```

## Future Enhancements

To match the original system's full capabilities:

### 1. Advanced Matching (Original: TensorFlow + Knowledge Graph)
- [ ] Implement vector embeddings using OpenAI's text-embedding-3
- [ ] Add semantic similarity scoring
- [ ] Integrate external knowledge graph for interests/skills
- [ ] Support synonyms and related concepts

### 2. G Suite Integration (Original Feature)
- [ ] OAuth integration with Google Workspace
- [ ] Automatic calendar availability checking
- [ ] One-click coffee chat scheduling
- [ ] Automated reminder emails

### 3. Scale to 5,500+ Users
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication and profiles
- [ ] Admin dashboard for analytics
- [ ] Real-time matching updates

### 4. Analytics & Insights
- [ ] Track engagement rates
- [ ] Measure coffee chat completion
- [ ] Success metrics dashboard
- [ ] A/B testing for matching algorithms

## Technical Highlights

### Matching Algorithm

The system uses a weighted scoring approach:

```typescript
Score = (Interest Match × 0.40) + (Goals Match × 0.35) + (Skills Match × 0.25)
```

Each component uses fuzzy string matching to handle:
- Partial matches ("machine learning" matches "ML")
- Case insensitivity
- Plurals and variations

### Conversational State Management

The chatbot maintains conversation context by:
1. Tracking user message history
2. Detecting current onboarding step based on previous questions
3. Building profile incrementally from responses
4. Validating input at each step

## Development

### Project Structure
- **App Router**: Modern Next.js 15 routing
- **TypeScript**: Full type safety
- **Component-based**: Reusable React components
- **API Routes**: Serverless functions for matching logic

### Code Quality
- ✅ TypeScript strict mode enabled
- ✅ ESLint configuration
- ✅ Production-optimized build
- ✅ No runtime errors
- ✅ SEO-friendly metadata

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samuelkahessay/connect-101-chatbot)

Or deploy to other platforms:
- Netlify
- AWS Amplify
- Docker container
- Any Node.js hosting

## About the Original Project

### Context
- **Company**: ATB Financial (Alberta Treasury Branches)
- **Timeline**: May 2019 – September 2019 (Summer Internship)
- **Role**: Product Management Intern
- **Scale**: 5,500 employees across Alberta
- **Impact**: Enhanced 91% employee engagement rate, 32% improvement in matching quality

### Technologies Used (2019)
- TensorFlow for fuzzy string matching
- Knowledge Graph API for semantic understanding
- G Suite APIs (Directory API, Calendar API)
- Internal employee directory integration

### Product Management Responsibilities
- Defined product requirements and user stories
- Coordinated between technical teams and business stakeholders
- Conducted user research and usability testing
- Managed product backlog and roadmap
- Tracked success metrics and performance

## License

This project is for portfolio demonstration purposes.

---

**Built with ❤️ by Samuel Kahessay**
[Portfolio](https://samuelkahessay.github.io) | [LinkedIn](https://linkedin.com/in/samuelkahessay) | [GitHub](https://github.com/samuelkahessay)
