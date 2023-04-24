import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { PageTitleComponent } from '../../component/PageTitle';
import { ProjectItemComponent } from '../../component/ProjectItem';
import { ProjectService } from '../../core/project/project.service';
import { ProjectItemInterface } from '../../domain/interface/project.interface';
import './ProjectPage.scss';

export const ProjectPage = () => {
    const projectService = new ProjectService();
    const [workProject, setWorkProject] = useState<ProjectItemInterface[]>([]);
    const [project, setProject] = useState<ProjectItemInterface[]>([]);
    const asyncData = async () => {
        const workData = projectService.getWorkProjectData();
        setWorkProject(workData);
        const data = projectService.getProjectData();
        setProject(data);
    }
    useEffect(() => {
        asyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="project-page">
            <Container>
                <PageTitleComponent name='個人專案' content='這邊有一些個人專案展示' />
                <ProjectItemComponent content={project} />
            </Container>
            <Container>
                <PageTitleComponent name='過去工作的專案' content='這邊是過去工作專案的工作內容' />
                <ProjectItemComponent content={workProject} />
            </Container>
        </div>
    );
};