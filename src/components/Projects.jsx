
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/garisas/repos');
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
        
        toast({
          title: "Error loading projects",
          description: "Could not fetch GitHub repositories. Please try again later.",
          variant: "destructive",
        });
      }
    };

    fetchRepos();
  }, [toast]);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-backend-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore my recent work directly from GitHub
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-red-500 mb-4">{error}</p>
            <div className="w-full max-w-md mx-auto p-6 border border-red-100 rounded-lg bg-red-50">
              <h3 className="font-semibold text-gray-800 mb-3">Featured Projects</h3>
              <p className="text-gray-600 mb-4">
                While we're having trouble loading the GitHub repositories, here are some notable projects:
              </p>
              <ul className="text-left space-y-2">
                <li className="text-gray-700">• E-commerce Backend API</li>
                <li className="text-gray-700">• Real-time Chat Application</li>
                <li className="text-gray-700">• Content Management System</li>
              </ul>
            </div>
          </div>
        )}

        {!loading && !error && (
          repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map(repo => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No repositories found.</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ repo }) => {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-backend-700">
          {repo.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">
          {repo.description || 'No description provided.'}
        </p>
        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <Badge variant="outline" className="bg-backend-50 text-backend-700 border-backend-200">
              {repo.language}
            </Badge>
          )}
          {repo.topics && repo.topics.slice(0, 3).map(topic => (
            <Badge key={topic} variant="outline" className="bg-backend-50 text-backend-700 border-backend-200">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-backend-600 hover:text-backend-800 text-sm font-medium flex items-center gap-1"
        >
          View on GitHub
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </CardFooter>
    </Card>
  );
};

const ProjectSkeleton = () => (
  <Card className="h-full border-none shadow-md">
    <CardHeader>
      <Skeleton className="h-7 w-3/4" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6 mb-4" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>
    </CardContent>
    <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
      <Skeleton className="h-5 w-24" />
    </CardFooter>
  </Card>
);

export default Projects;
