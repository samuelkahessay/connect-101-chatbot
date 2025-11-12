export interface EmployeeProfile {
  id: string;
  name: string;
  role: "junior" | "senior";
  department: string;
  interests: string[];
  careerGoals: string[];
  skills: string[];
  bio: string;
  personality: string[];
  yearsAtCompany: number;
  previousRole?: string;
  funFact: string;
  communicationStyle: "formal" | "casual" | "enthusiastic" | "supportive";
}

export interface Match {
  employee: EmployeeProfile;
  score: number;
  matchReasons: string[];
}

export interface OnboardingState {
  step: "welcome" | "name" | "role" | "department" | "interests" | "goals" | "skills" | "complete";
  profile: Partial<EmployeeProfile>;
}
