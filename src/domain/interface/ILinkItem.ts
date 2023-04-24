export interface ILinkItem {
    linkType: LinkItemTypeEnum;
    href: string;
}

export enum LinkItemTypeEnum {
    GitHub,
    Web,
    LinkedIn,
}