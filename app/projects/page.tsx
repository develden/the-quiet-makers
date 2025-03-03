import React from 'react';
import { getAllProjects } from '@/lib/api';
import ProjectsClient from './ProjectsClient';

export default function ProjectsPage() {
  const projects = getAllProjects();
  
  return <ProjectsClient initialProjects={projects} />;
} 