export enum ProjectItemImageType {
    ASSET = 'ASSET',
    URL = 'URL',
}

export class ProjectItemImageDTO {
    path: string = '';
    type: ProjectItemImageType = ProjectItemImageType.ASSET;
}