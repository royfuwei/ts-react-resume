import { Container } from '@mui/material';
import { PageTitleComponent } from '../../component/PageTitle';
import { InfoTimelineComponent } from '../../component/InfoTimeline';
import { InfoTimelineInterface } from '../../domain/interface/infoTimeline';
import './ResumePage.scss';
import { SkillGroupComponent } from '../../component/SkillGroup';
import { SkillGroupInterface } from '../../domain/interface/skill.interface';
import { ResumeService } from '../../core/resume/resume.service';
import { useEffect, useState } from 'react';

let educationConfig: InfoTimelineInterface = {
    title: '學歷',
    subTitle: '',
    content: [],
};
let workConfig: InfoTimelineInterface = {
    title: '工作經驗',
    subTitle: '',
    content: [],
};

let skillGroupConfig: SkillGroupInterface[] = [];

export const ResumePage = () => {
    const resumeService = new ResumeService();
    const [work, setWork] = useState(workConfig);
    const [skillGroup, setSkillGroup] = useState(skillGroupConfig);
    const [education, setEducation] = useState(educationConfig);
    const asyncData = async () => {
        const workData = await resumeService.getWorkData();
        setWork(workData);
        const skillData = await resumeService.getSkillData();
        setSkillGroup(skillData);
        const educationData = await resumeService.getEducationData();
        setEducation(educationData);
    }

    useEffect(() => {
        asyncData();
    }, []);

    return (
        <div className="resume-page">
            <Container>
                <PageTitleComponent name='Resume'/>
                <InfoTimelineComponent content={work} />
                <hr />
                <SkillGroupComponent content={skillGroup}/>
                <hr />
                <InfoTimelineComponent content={education} />
            </Container>
        </div>
    )
};