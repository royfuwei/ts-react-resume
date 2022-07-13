import './MainPage.scss';
import { Avatar, Container, Grid } from '@mui/material';
import avatar from '../../assets/images/avatar.jpg';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { UserService } from '../../core/user/user.service';
import { useEffect, useState } from 'react';


export const MainPage = () => {
    const userService = new UserService();
    const [ aboutMe, setAboutMe ] = useState(`
大家好...
    `);
    const asyncData = async () => {
        const data = await userService.getAboutMe();
        setAboutMe(data.aboutMe);
    };

    useEffect(() => {
        asyncData();
    }, []);

    return (
        <div className="main-page">
            <Container>
                <Grid container spacing={{ xs: 1, md: 2}}>
                    <Grid item md={6} xs={12} order={{xs: 2, md: 1}}>
                        <div className='main-avatar-side'>
                            <Avatar alt="Roy Chuang" sx={{
                                width: {
                                    xs: '80vw',
                                    md: '30vw'
                                },
                                height: {
                                    xs: '80vw',
                                    md: '30vw'
                                },
                                fontSize: 'calc(36px + 5vmin);'
                            }} style={{
                                border: '4px solid #FBFCFC'
                             }} src={avatar} />
                        </div>
                    </Grid>

                    <Grid item md={6} xs={12} order={{xs: 1, md: 2}}>
                        <div className="main-info-side">
                            <div className="main-info-title">
                                Hello
                            </div>
                            <div className="main-info-subSide">
                                <div className="main-info-subTitle">
                                    關於我
                                </div>
                                <div className="main-info-detail">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        { aboutMe }
                                    </ReactMarkdown>
                                </div>
                                <div className="main-info-link">
                                    
                                </div>
                            </div>
                            <br />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};