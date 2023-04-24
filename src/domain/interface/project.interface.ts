import { ProjectItemImageDTO } from "../dto/project.dto";
import { ILinkItem } from "./ILinkItem";

export interface ProjectItemInterface {
    title: string;
    subTitle: string;
    role: string;
    detail: string;
    url?: string;
    links?: ILinkItem[];
    images: ProjectItemImageDTO[];
    skills: string[];
    startStr: string;
    endStr: string;
};
