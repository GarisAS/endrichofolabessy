import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code2,
  FileJson,
  FileCode2,
  FileType2,
  Braces,
  Database,
  Layers,
  TerminalSquare,
  GitBranch,
  Cloud,
} from 'lucide-react';

const Skills: React.FC = () => {
  const technologies = {
    languages: [
      { name: 'PHP', icon: <Braces className="w-5 h-5" /> },
      { name: 'JavaScript', icon: <FileJson className="w-5 h-5" /> },
      { name: 'HTML5', icon: <FileCode2 className="w-5 h-5" /> },
      { name: 'CSS3', icon: <FileType2 className="w-5 h-5" /> },
    ],
    frameworks: [
      { name: 'Laravel', icon: <Layers className="w-5 h-5" /> },
      { name: 'React JS', icon: <Code2 className="w-5 h-5" /> },
      { name: 'Bootstrap', icon: <TerminalSquare className="w-5 h-5" /> },
      { name: 'Tailwind CSS', icon: <Cloud className="w-5 h-5" /> },
    ],
    databases: [
      { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
    ],
    tools: [
      { name: 'Git', icon: <GitBranch className="w-5 h-5" /> },
      { name: 'RESTful APIs', icon: <Cloud className="w-5 h-5" /> },
    ],
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-backend-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building secure, scalable, and high-performance backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <SkillCategory title="Languages" skills={technologies.languages} />
          <SkillCategory title="Frameworks & Libraries" skills={technologies.frameworks} />
          <SkillCategory title="Databases" skills={technologies.databases} />
          <SkillCategory title="Tools" skills={technologies.tools} />
        </div>
      </div>
    </section>
  );
};

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const SkillCategory: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => (
  <div className="animate-fade-up">
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-100">
          {title}
        </h3>
        <ul className="space-y-5">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-backend-100 text-backend-700 font-medium rounded-lg">
                {skill.icon}
              </div>
              <span className="text-gray-700">{skill.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Skills;
