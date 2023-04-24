import { ProjectItemInterface } from "../../domain/interface/project.interface";
import { ProjectItemImageType } from "../../domain/dto/project.dto";
// import ProjectGfForest from '../../assets/images/project-gf-forest.png';
import ProjectRxjsTodoList from '../../assets/images/project-rxjs-todolist.png';
import ProjectAspnetCore from '../../assets/images/project-aspnetcore-clean-arch.png';
import ProjectPgGoApi from '../../assets/images/project-playground-go-api.png';
import ProjectGoCleanArch from '../../assets/images/project-go-clean-arch.png';
import ProjectTsNestjsArch from '../../assets/images/project-ts-nestjs-arch.png';
import ProjectReactResume from '../../assets/images/project-react-resume.png';
import ProjectGfTia from '../../assets/images/project-gf-tia.png';
import ProjectGfYilanIot from '../../assets/images/project-gf-yilan-iot.png';
import ProjectGfYilan from '../../assets/images/project-gf-yilan.png';
import ProjectGfNavvisCgmh from '../../assets/images/project-gf-navvis-cgmh.png';
import ProjectGfNavvisVghtc from '../../assets/images/project-gf-navvis-vghtc.png';
import ProjectGfNavvisYilan from '../../assets/images/project-gf-navvis-yilan.png';
import ProjectGrandsysInu from '../../assets/images/project-grandsys-inu.png';
import ProjectGrandsysInu2 from '../../assets/images/project-grandsys-inu2.png';
import { LinkItemTypeEnum } from "../../domain/interface/ILinkItem";

export class ProjectService {

    getWorkProjectData() {
        const ProjectList: ProjectItemInterface[] = [
            {
                title: '宜蘭縣智慧營運中心(IOC) 雛型先導示範平台',
                subTitle: '群立科技股份有限公司',
                detail: `
開發WebGIS平台。

介接Opendata與IOT資料，結合地理坐標資訊，用cesium.js 以3D WebGIS 視覺化呈現資料。
                `,
                role: '開發工程師(工讀生)',
                startStr: '2017/01',
                endStr: '2017/05',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGfYilanIot,
                    }
                ],
                links: [
                    {
                        linkType: LinkItemTypeEnum.Web,
                        href: 'http://salesdemo.geoforce.com.tw/demo/yilan/yilan_iot/',
                    }
                ],
                url: 'http://salesdemo.geoforce.com.tw/demo/yilan/yilan_iot/',
                skills: [
                    'Html', 'JavaScript', 'CSS', 'PHP', 'GIS', 'Cesium.js', 'jQuery'
                ],
            },
            {
                title: 'Navvis 長庚動力中心 巡檢系統開發',
                subTitle: '群立科技股份有限公司',
                detail: `
使用室內定位系統對設備定位，整合設備的資料介接，開發視覺化巡檢報修系統。
1. 整合長庚內部API，人員登入資訊、設備的資料介接、呈現，以及設備報修。
2. 後端API，讓手持裝置在室內移動時，依據座標取得附近設備運轉資訊。
                `,
                role: '軟體設計工程師',
                startStr: '2018/05',
                endStr: '2018/12',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGfNavvisCgmh,
                    }
                ],
                skills: [
                    'Html', 'JavaScript', 'CSS', 'PHP', 'jQuery', 'Docker', 'SQLite'
                ],
            },
            {
                title: 'Navvis Indoormap - 宜蘭縣政府 開發',
                subTitle: '群立科技股份有限公司',
                detail: `
宜蘭縣政府室內360導覽平台開發
1. 使用Navvis 移動光達系統，進行二次開發室內導覽平台。
2. 配合前端外包開發後端API。
3. 開發後台管理平台。
4. 開發路徑規劃，步行移動時間預測等功能，並且在專案使用Docker 容器化部署。
                `,
                role: '軟體設計工程師',
                links: [
                    {
                        linkType: LinkItemTypeEnum.Web,
                        href: 'http://idm.e-land.gov.tw/indoor',
                    }
                ],
                url: 'http://idm.e-land.gov.tw/indoor',
                startStr: '2018/05',
                endStr: '2018/12',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGfNavvisYilan,
                    }
                ],
                skills: [
                    'Html', 'JavaScript', 'CSS', 'PHP', 'jQuery', 'Docker', 'SQLite'
                ],
            },
            {
                title: 'Navvis 台中榮總3D環景導覽 開發',
                subTitle: '群立科技股份有限公司',
                detail: `
台中榮總3D環景導覽 搭配Kiosk與串接外部IOT設備，包成WebView 模式。
1.  配合APP端使用Webview 整合 Kiosk，串接外部IOT設備。
2. 開路徑規劃優化，並增加導航功能的指向性。
                `,
                role: '軟體設計工程師',
                url: 'https://map.vghtc.gov.tw/',
                links: [
                    {
                        linkType: LinkItemTypeEnum.Web,
                        href: 'https://map.vghtc.gov.tw/',
                    }
                ],
                startStr: '2018/05',
                endStr: '2019/01',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGfNavvisVghtc,
                    }
                ],
                skills: [
                    'Html', 'JavaScript', 'CSS', 'PHP', 'jQuery', 'Docker', 'SQLite', 'Slim', 'Nginx'
                ],
            },
            {
                title: '桃園農田水利會圖資平台',
                subTitle: '群立科技股份有限公司',
                detail: `
桃園農田水利會圖資平台升級案，舊系統移植新系統。
1. 將專案分前後端站台，負責後端 API 開發。
2. 導入Nestjs Framework 作為後端WebService。
3. 使用ElasticSearch 加速搜尋農地地號。
                `,
                role: '軟體設計工程師',
                url: 'https://gis.iatyu.nat.gov.tw/',
                links: [
                    {
                        linkType: LinkItemTypeEnum.Web,
                        href: 'https://gis.iatyu.nat.gov.tw/',
                    }
                ],
                startStr: '2018/12',
                endStr: '2019/07',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGfTia,
                    }
                ],
                skills: [
                    'TypeScript', 'Nestjs', 'ElasticSearch', 'PostgreSQL', 'Docker', 'GeoServer', 'Nginx'
                ],
            },
            {
                title: '宜蘭縣政府 電子化會議室資訊',
                subTitle: '群立科技股份有限公司',
                detail: `
1. 用Illustrator 設計簡單電子化會議室資訊頁面。
2. 使用Nodejs Electron 開發桌面應用程式，部署在電子看板上面。
                `,
                role: '軟體設計工程師',
                startStr: '2019/01',
                endStr: '2019/02',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGfYilan,
                    }
                ],
                skills: [
                    'Nodejs', 'Electron', 'Html', 'CSS', 'JavaScript', 'jQuery', 'Docker', 'Nginx'
                ],
            },
            {
                title: '語音質檢產品開發',
                subTitle: '德鴻科技股份有限公司',
                detail: `
- 參與 語音質檢產品 微服務架構開發。
- 使用Nestjs 共同開發語音質檢評分服務。
- 使用Nestjs 開發人員管理 RESTful CRUD API 與 JWT 驗證。
- 使用Nestjs 開發Email 排程設定、推送 API，提供其他部門使用。
- 使用Nestjs 開發整合客戶資訊服務。
- 使用Go gin 開發API，依據Clean Architecture 重構語音文本處理服務。
- 使用 MongoDB Aggregate 產生報表資訊。
- 到客戶端K8S更新部署，以及產品服務排查。
                `,
                role: '資深工程師',
                startStr: '2019/12',
                endStr: '2022/02',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGrandsysInu2,
                    },
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGrandsysInu,
                    },
                ],
                skills: [
                    'Nodejs', 'Golang', 'TypeScript', 'Nestjs', 'MongoDB', 'RabbitMQ', 'Docker', 'ElasticSearch', 'Helm', 'K8S', 'Kong'
                ],
            },
            
        ];
        return ProjectList.reverse();
    }
    getProjectData() {
        const ProjectList: ProjectItemInterface[] = [
            {
                title: 'Royfuwei Portfolio',
                subTitle: '',
                detail: `
使用React, MUI 製作的作品集網站
自架server 用docker 部署
                `,
                role: '',
                startStr: '',
                endStr: '',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectReactResume,
                    }
                ],
                links: [
                    {
                        linkType: LinkItemTypeEnum.Web,
                        href: '#',
                    },
                    {
                        linkType: LinkItemTypeEnum.GitHub,
                        href: 'https://github.com/royfuwei/ts-react-resume',
                    },
                ],
                skills: [
                    'Html', 'TypeScript', 'CSS', 'React', 'MUI', 'SCSS', 'Docker', 'docker-compose'
                ],
            },
            {
                title: 'rxjs-todo-list',
                subTitle: '',
                detail: `
使用StackBilitz 線上編輯，實作RxJS TodoList。
                `,
                role: '',
                startStr: '',
                endStr: '',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectRxjsTodoList,
                    }
                ],
                links: [
                    {
                        linkType: LinkItemTypeEnum.Web,
                        href: 'https://stackblitz.com/edit/rxjs-xqvung',
                    },
                    {
                        linkType: LinkItemTypeEnum.GitHub,
                        href: 'https://github.com/royfuwei/rxjs-todo-list',
                    },
                ],
                skills: [
                    'Bootstrap', 'HTML', 'RxJS', 'TypeScript'
                ],
            },
            {
                title: 'ts-nestjs-arch',
                subTitle: '',
                detail: `
依據nestjs 有的DI裝飾器去做延伸設計，使專案可以分為共用Module，
可依據不同專案的資料夾，注入專案的Module，減少共用模組重複開發。
                `,
                role: '',
                startStr: '',
                endStr: '',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectTsNestjsArch,
                    }
                ],
                links: [
                    {
                        linkType: LinkItemTypeEnum.GitHub,
                        href: 'https://github.com/royfuwei/ts-nestjs-arch',
                    },
                ],
                skills: [
                    'Nestjs', 'TypeScript',
                ],
            },
            {
                title: 'go-clean-arch',
                subTitle: '',
                detail: `
依據Clean Architecture，以及參考bxcode/go-clean-arch 開發結構想法去做延伸。
                `,
                role: '',
                startStr: '',
                endStr: '',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGoCleanArch,
                    }
                ],
                links: [
                    {
                        linkType: LinkItemTypeEnum.GitHub,
                        href: 'https://github.com/royfuwei/go-clean-arch',
                    },
                ],
                skills: [
                    'Go', 'Gin', 'Clean Architecture',
                ],
            },
            {
                title: 'playground-go-api',
                subTitle: '',
                detail: `
使用go-clean-arch, MongoDB 實做一些項目，
像是user, jwt, sms
                `,
                role: '',
                startStr: '',
                endStr: '',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectPgGoApi,
                    }
                ],
                links: [
                    {
                        linkType: LinkItemTypeEnum.GitHub,
                        href: 'https://github.com/royfuwei/playground-go-api',
                    },
                ],
                skills: [
                    'Go', 'Gin', 'Clean Architecture', 'JWT', 'SMS', 'MongoDB'
                ],
            },
            {
                title: 'aspnetcore-clean-arch',
                subTitle: '',
                detail: `
練習ASP.NET Core 開發，試著實作Clean Architecture, DDD 簡單的開發結構。
                `,
                role: '',
                startStr: '',
                endStr: '',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectAspnetCore,
                    }
                ],
                links: [
                    {
                        linkType: LinkItemTypeEnum.GitHub,
                        href: 'https://github.com/royfuwei/aspnetcore-clean-arch',
                    },
                ],
                skills: [
                    'C#', 'DDD', 'Clean Architecture', 'Entity Framework Core', 'SQLServer'
                ],
            },
            
            
        ];
        return ProjectList;
    }
}