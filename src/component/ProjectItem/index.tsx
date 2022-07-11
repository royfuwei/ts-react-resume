import { Chip, Grid } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { ICompoenetBaseProps } from "../../domain/interface/compoenents/base";
import { ProjectItemInterface } from "../../domain/interface/project.interface";
import './ProjectItem.scss';

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

export const ProjectItemComponent = ({ content = ProjectList, }: ICompoenetBaseProps<ProjectItemInterface[]>) => {
    const getChipHtml = (skills: string[]) => skills.map(
        skill => ( 
            <div className="skill-chip">
                <Chip label={skill} variant="outlined"/>
            </div>
        )
    );
    const getContentHtml = () => {
        return content.map(
            ({ title, subTitle, detail, startStr, endStr, skills, images}) => {
                return (
                    <div className="pic-content">
                        <div className="timeline-point"></div>
                        <div className="info-time">
                            { startStr } - { endStr }
                        </div>
                        <Grid container spacing={{ xs: 1, md: 2}}>
                            
                            <Grid className="content-info" item md={6} xs={12}>
                                
                                <div className="info-top">
                                    
                                    <div className="info-title">
                                        { title }
                                    </div>
                                    <div className="info-subTitle">
                                        { subTitle }
                                    </div>
                                </div>
                                <div className="info-detail">
                                    <div>
                                        <ReactMarkdown>
                                            { detail }
                                        </ReactMarkdown>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                                
                            </Grid>
                            <Grid className="content-image" item md={6} xs={12}>
                                
                            </Grid>
                            
                            <Grid item md={12} xs={12}>
                                <div className="content-skill" >
                                    { getChipHtml(skills) }
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                )
            }
        )
    };
    return (
        <div className='ProjectItem'>
            <ul>
                { getContentHtml() }
            </ul>
        </div>
    );
};