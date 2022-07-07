import { Grid } from '@mui/material';
import { ICompoenetBaseProps } from '../../domain/interface/compoenents/base';
import { InfoTimelineInterface } from '../../domain/interface/infoTimeline';
import './InfoTimeline.scss';


export const InfoTimelineComponent = ({ content = { title: '', content: [],} }: ICompoenetBaseProps<InfoTimelineInterface>) => {
    const getContentHtml = () => {
        return content.content.map(
            ({ title, subTitle, detail, startStr, endStr }) => {
                return (
                    <div className='ttl-content'>
                        <Grid container spacing={{ xs: 1, md: 2}}>
                            <Grid item xs={12} md={3}>
                                <div className='ttl-content-time'>
                                    <div className='time-title'>
                                        <div className="time-start">
                                            {startStr}
                                        </div>
                                        <div className="time-end">
                                            {endStr}
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <div className='ttl-content-info'>
                                    <div className='content-info'>
                                        <div className='info-title'> { title } </div>
                                        <div className='info-subTitle'> { subTitle } </div>
                                    </div>
                                </div>
                                <div className='ttl-content-detail'>
                                    { detail }
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                );
        }).reverse();
    }
    return (
        <div className='TitleTimeline'>
            <Grid container spacing={{ xs: 1, md: 2}} >
                <Grid className='title' item xs={12} md={6} >
                    { content.title }
                </Grid>
                <Grid item xs={12} md={6} >
                    {getContentHtml()}
                </Grid>
            </Grid>
            
        </div>
    );
};