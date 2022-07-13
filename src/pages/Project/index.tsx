import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { PageTitleComponent } from '../../component/PageTitle';
import { ProjectItemComponent } from '../../component/ProjectItem';
import { ProjectService } from '../../core/project/project.service';
import { ProjectItemInterface } from '../../domain/interface/project.interface';
import './ProjectPage.scss';

export const ProjectPage = () => {
    const projectService = new ProjectService();
    const [project, setProject] = useState<ProjectItemInterface[]>([]);
    const asyncData = async () => {
        const data = await projectService.getProjectData();
        setProject(data);
    }
    useEffect(() => {
        asyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="project-page">
            <Container>
                <PageTitleComponent name='Project'/>
                <ProjectItemComponent content={project} />
            </Container>
        </div>
    );
};