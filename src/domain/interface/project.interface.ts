import { ProjectItemImageDTO } from "../dto/project.dto";

export interface ProjectItemInterface {
    title: string;
    subTitle: string;
    role: string;
    detail: string;
    url?: string;
    links?: IProjectItemLinks[];
    images: ProjectItemImageDTO[];
    skills: string[];
    startStr: string;
    endStr: string;
};

export interface IProjectItemLinks {
    linkType: ProjectItemLinkEnum;
    href: string;
}

export enum ProjectItemLinkEnum {
    GitHub,
    Web,
}
