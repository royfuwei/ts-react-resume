import './Footer.scss';
import moment from 'moment';
import { Container } from '@mui/material';

export const FooterLayout = () => {
  const year = moment().format('Y');
  return (
    <footer>
      <Container>
        {/* Copyright © { year } royfuwei. */}
        <div className='footer'>
          <div className='footer-line'></div>
          <div className='footer-side'>
            Copyright © { year } royfuwei.
          </div>
        </div>
      </Container>
    </footer>
  );
};