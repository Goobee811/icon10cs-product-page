export interface Citation {
  id: string;
  text: string;
  source: string;
  year: number;
  url?: string;
}

export interface Feature {
  title: string;
  description: string;
  benefit: string;
}

export interface FAQ {
  question: string;
  answer: string;
  citationIds?: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ResearchEvidence {
  title: string;
  description: string;
  citationIds: string[];
  location?: string;
}