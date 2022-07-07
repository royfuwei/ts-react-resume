import { Container } from '@mui/material';
import { PageTitleComponent } from '../../component/PageTitle';
import './ProjectPage.scss';

export const ProjectPage = () => {
    return (
        <div className="project-page">
            <Container>
                <PageTitleComponent name='Project'/>
            </Container>
        </div>
    );
};