import { Box, Chip, Grid, Icon } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { ICompoenetBaseProps } from "../../domain/interface/compoenents/base";
import { ProjectItemInterface } from "../../domain/interface/project.interface";
import './ProjectItem.scss';
import defaultProjectImage from '../../assets/images/project.jpg';
import defaultProjectImage1 from '../../assets/images/project1.jpg';
import defaultProjectImage2 from '../../assets/images/project2.jpg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const ProjectList: ProjectItemInterface[] = [
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
]

const defaultProjectImages = [
    defaultProjectImage, defaultProjectImage1, defaultProjectImage2
];

export const ProjectItemComponent = ({ content = ProjectList, }: ICompoenetBaseProps<ProjectItemInterface[]>) => {
    const getChipHtml = (skills: string[]) => skills.map(
        skill => ( 
            <div key={skill} className="skill-chip">
                <Chip label={skill} size='small' variant="outlined"/>
            </div>
        )
    );
    const getDefaultByIndex = (index: number) => {
        const idx = index % defaultProjectImages.length;
        return defaultProjectImages[idx];
    }
    const getContentHtml = () => {
        return content.map(
            ({ title, subTitle, detail, startStr, endStr, skills, images, url, role}, index) => {
                return (
                    <div key={title} className="pic-content">
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
                                        <div className="subtitle">
                                            { subTitle }
                                        </div>
                                        <div className="role">
                                            { role }
                                        </div>
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
                            <Grid item md={6} xs={12} >
                                <Box className="content-image" sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    backgroundImage: `url(${images.length > 0 ? images[0].path : getDefaultByIndex(index)})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    opacity: url !== undefined ? 0.8 : 0.5,
                                    '&:hover': {
                                        // backgroundColor: 'primary.main',
                                        // opacity: [0.5, 0.4, 0.3],
                                    },
                                }}>
                                    <div className="exit-to"
                                        style={ url !== undefined ? {} : {
                                            display: 'none'
                                        } }
                                    >
                                        前往專案 <ExitToAppIcon fontSize="large"/>
                                        <a href={ url } target={'_blank'} rel="noreferrer" >
                                        </a>
                                    </div>
                                </Box>
                            </Grid>
                            
                            <Grid item md={12} xs={12}>
                                <Box>
                                    <div className="content-skill" >
                                        { getChipHtml(skills) }
                                    </div>
                                </Box>
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