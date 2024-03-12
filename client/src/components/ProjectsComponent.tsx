import React, { useEffect, useState } from 'react'

const ProjectsComponent: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([])
  const authToken = 'ZS1v3F9rwA35YFTNQbEW'
  const userEmail = 'gmail@example.com'

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/v1/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-User-Token': authToken,
            'X-User-Email': userEmail,
          },
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsComponent
