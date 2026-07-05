import { notFound } from 'next/navigation';
import { projectsList } from '@/config/portfolio-data';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectInfo from '@/components/project/ProjectInfo';
import ProjectProblem from '@/components/project/ProjectProblem';
import ProjectBusinessGoal from '@/components/project/ProjectBusinessGoal';
import ProjectFeatures from '@/components/project/ProjectFeatures';
import ProjectTechStack from '@/components/project/ProjectTechStack';
import ProjectArchitecture from '@/components/project/ProjectArchitecture';
import ProjectChallenges from '@/components/project/ProjectChallenges';
import ProjectLessons from '@/components/project/ProjectLessons';
import ProjectFuture from '@/components/project/ProjectFuture';
import ProjectLinks from '@/components/project/ProjectLinks';
import ProjectCTA from '@/components/project/ProjectCTA';
import ProjectCover from '@/components/project/ProjectCover';

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projectsList.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        category={project.category}
        status={project.status}
        featured={project.featured}
      />

      <ProjectCover title={project.title} image={project.thumbnail} />

      {project.gallery && <ProjectGallery title={project.title} gallery={project.gallery} />}

      <SectionWrapper id="project-details" className="mt-20 space-y-20">
        <ProjectOverview description={project.longDescription} />

        <ProjectInfo
          category={project.category}
          status={project.status}
          role={project.role}
          duration={project.duration}
        />

        <ProjectProblem problem={project.problemStatement} />

        <ProjectBusinessGoal businessGoal={project.businessGoal} />

        <ProjectFeatures features={project.coreFeatures} />

        <ProjectTechStack techStack={project.techStack} />

        <ProjectArchitecture architecture={project.architectureDiagram} />

        <ProjectChallenges challenges={project.challenges} />

        <ProjectLessons lessons={project.lessonsLearned} />

        <ProjectFuture future={project.futureImprovements} />

        <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} />

        <ProjectCTA />
      </SectionWrapper>
    </main>
  );
}
