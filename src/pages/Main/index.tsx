import { Avatar, Container, Grid } from '@mui/material';
import avatar from '../../assets/images/avatar.jpg';

import './MainPage.scss';

export const MainPage = () => {
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
                                    大家好...
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