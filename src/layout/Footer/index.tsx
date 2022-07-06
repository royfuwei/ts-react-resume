import './Footer.scss';
import moment from 'moment';

export const FooterLayout = () => {
  const year = moment().format('Y');
  return (
    <footer>
      <div className='footer'></div>
      <div className='footer-font'>
        Copyright © { year } royfuwei.
      </div>
    </footer>
  );
};