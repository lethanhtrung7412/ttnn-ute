import React from 'react';

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image: string;
  date?: string;
  views?: number;
  category?: string;
  color?: string; // For badge color
}

export interface FacultyMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
  active?: boolean;
}

export interface QuickLink {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface LearningResource {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  categoryColor: string; // TailWind class for badge bg/text
  slug: string;
}

export interface ResourceTag {
  label: string;
  count?: number;
}