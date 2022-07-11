import { Container } from '@mui/material';
import { PageTitleComponent } from '../../component/PageTitle';
import { ProjectItemComponent } from '../../component/ProjectItem';
import { ProjectItemInterface } from '../../domain/interface/project.interface';
import './ProjectPage.scss';

export const ProjectList: ProjectItemInterface[] = [
    {
        title: '宜蘭縣智慧營運中心(IOC) 雛型先導示範平台',
        subTitle: '群立科技股份有限公司',
        detail: '介接Opendata與IOT資料，結合地理坐標資訊，用cesium.js 以3D WebGIS 視覺化呈現資料。',
        role: '',
        startStr: '2017/01',
        endStr: '2017/05',
        images: [],
        skills: [
            'Html', 'JavaScript', 'CSS', 'PHP', 'GIS', 'Cesium.js', 'jQuery'
        ],
    },
    {
        title: 'Navvis 長庚動力中心 巡檢系統開發',
        subTitle: '群立科技股份有限公司',
        detail: `
1. 整合長庚內部API，人員登入資訊、設備的資料介接、呈現，以及設備報修。
2. 後端API，讓手持裝置在室內移動時，依據座標取得附近設備運轉資訊。
        `,
        role: '',
        startStr: '2017/01',
        endStr: '2017/05',
        images: [],
        skills: [
            'Html', 'JavaScript', 'CSS', 'PHP', 'jQuery', 'Docker', 'SQLite'
        ],
    },
]

export const ProjectPage = () => {
    return (
        <div className="project-page">
            <Container>
                <PageTitleComponent name='Project'/>
                <ProjectItemComponent content={ProjectList} />
            </Container>
        </div>
    );
};