import { ProjectItemImageDTO } from "../dto/project.dto";

export interface ProjectItemInterface {
    title: string;
    subTitle: string;
    role: string;
    detail: string;
    url?: string;
    images: ProjectItemImageDTO[];
    skills: string[];
    startStr: string;
    endStr: string;
};

