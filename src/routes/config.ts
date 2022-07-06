import { MainPage } from "../pages/Main";
import { ProjectPage } from "../pages/Project";
import { ResumePage } from "../pages/Resume";
import TestPage from "../pages/Test";

export type RouteConfigType = {
    key: string;
    path: string;
    // exact?: boolean;
    Element: React.ComponentType<any>;
    routes?: RouteConfigType[];
};

export const genRouteConfigs = (): RouteConfigType[] => [
    {
        key: 'main',
        path: '/',
        Element: MainPage,
    },
    {
        key: 'project',
        path: '/project',
        Element: ProjectPage,
    },
    {
        key: 'resume',
        path: '/resume',
        Element: ResumePage,
    },
    {
        key: 'test',
        path: '/test',
        Element: TestPage,
    }
];
export const genOuterRouteConfigs = (): RouteConfigType[] => [
    {
        key: 'test',
        path: '/outer/test',
        Element: TestPage,
    }
];