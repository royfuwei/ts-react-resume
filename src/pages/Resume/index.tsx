import { Container } from '@mui/material';
import { PageTitleComponent } from '../../component/PageTitle';
import { InfoTimelineComponent } from '../../component/InfoTimeline';
import { InfoTimelineInterface } from '../../domain/interface/infoTimeline';
import './ResumePage.scss';

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

export const ResumePage = () => {

    return (
        <div className="resume-page">
            <Container>
                <PageTitleComponent name='Resume'/>
                <InfoTimelineComponent content={workConfig} />
                <hr />
                <InfoTimelineComponent content={educationConfig} />
            </Container>
        </div>
    )
};