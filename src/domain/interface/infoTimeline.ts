export interface InfoTimelineInterface {
    title: string;
    content: InfoTimelineSubInterface[];

};
export interface InfoTimelineSubInterface {
    title: string;
    subTitle: string;
    detail: string;
    startStr: string;
    endStr: string;
};