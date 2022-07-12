import { Container } from '@mui/material';
import { PageTitleComponent } from '../../component/PageTitle';
import { InfoTimelineComponent } from '../../component/InfoTimeline';
import { InfoTimelineInterface } from '../../domain/interface/infoTimeline';
import './ResumePage.scss';
import { SkillGroupComponent } from '../../component/SkillGroup';
import { SkillGroupInterface } from '../../domain/interface/skill.interface';

const educationConfig: InfoTimelineInterface = {
    title: '學歷',
    content: [
        {
            title: '桃園市立陽明高級中等學校',
            subTitle: '普通科 高中畢業',
            detail: '',
            startStr: '2010/09',
            endStr: '2013/06',
        },
        {
            title: '私立銘傳大學',
            subTitle: '都市規劃與防災學系 大學畢業',
            detail: '',
            startStr: '2013/09',
            endStr: '2017/06',
        },
    ],
};
const workConfig: InfoTimelineInterface = {
    title: '工作經驗',
    content: [
        {
            title: '系上雷射切割機操作人員',
            subTitle: '銘傳大學 都市規劃與防災學系',
            detail: '',
            startStr: '2015/03',
            endStr: '2017/04',
        },
        {
            title: '宜蘭縣人行道gis數化',
            subTitle: '銘傳大學 都市規劃與防災學系',
            detail: '',
            startStr: '2016/03',
            endStr: '2016/12',
        },
        {
            title: '工讀生',
            subTitle: '群立科技股份有限公司',
            detail: '',
            startStr: '2016/07',
            endStr: '2016/08',
        },
        {
            title: '工讀生',
            subTitle: '群立科技股份有限公司',
            detail: '',
            startStr: '2017/01',
            endStr: '2017/05',
        },
        {
            title: '軟體開發工程師',
            subTitle: '群立科技股份有限公司',
            detail: '',
            startStr: '2018/05',
            endStr: '2019/07',
        },
        {
            title: '資深工程師',
            subTitle: '德鴻科技股份有限公司',
            detail: '',
            startStr: '2019/12',
            endStr: '2022/02',
        },
    ],
};

const skillGroupConfig: SkillGroupInterface[] = [
    {
        title: '後端程式語言與框架',
        description: '',
        content: [
            {
                name: 'Nodejs',
                description: `
- 熟悉Node.js 後端開發，使用Nestjs/Express 作為API開發框架(TypeScript)。
                `,
                rate: 50,
            },
            {
                name: 'Golang',
                description: `
- 熟悉Golang(Go) 後端開發，使用Gin 作為API開發框架。
                `,
                rate: 50,
            }
        ],
        chips: [],
    },
    {
        title: '前端程式語言與框架',
        description: `
網頁程式設計:
        `,
        content: [
            {
                name: 'HTML',
                description: '',
                rate: 50,
            }
        ],
        chips: [],
    },
];

export const ResumePage = () => {
    return (
        <div className="resume-page">
            <Container>
                <PageTitleComponent name='Resume'/>
                <SkillGroupComponent content={skillGroupConfig}/>
                <hr />
                <InfoTimelineComponent content={workConfig} />
                <hr />
                <InfoTimelineComponent content={educationConfig} />
            </Container>
        </div>
    )
};