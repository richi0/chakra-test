import React from 'react'

export interface ProjectsProps {
  /**
   * Prop1
   */
  prop1: string
}

export const Projects: React.FC<ProjectsProps> = ({ prop1 }) => {
  return <div>{prop1}</div>
}
