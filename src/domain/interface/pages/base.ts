export interface IPageBaseProps<T extends unknown> {
    name?: string; 
    count?: number;
    content?: T;
    writeable?: boolean;
    actions?: string[];
}