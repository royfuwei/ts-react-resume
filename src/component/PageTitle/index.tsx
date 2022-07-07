import { IPageBaseProps } from "../../domain/interface/pages/base";
import './PageTitle.scss';

export const PageTitleComponent = ({ name = 'Title' }: IPageBaseProps) => {
    return (
        <div className="page-title">
            <p>{ name }</p>
            <span></span>
        </div>
    );
}