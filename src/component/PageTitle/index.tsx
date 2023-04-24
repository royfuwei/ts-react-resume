import { IPageBaseProps } from "../../domain/interface/pages/base";
import './PageTitle.scss';

export const PageTitleComponent = ({ name = 'Title', content = '' }: IPageBaseProps<string>) => {
    return (
        <div className="page-title">
            <p>{ name }</p>
            <span></span>
            <div className='subTitle'>
                { content }
            </div>
        </div>
    );
}