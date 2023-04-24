import { InfoTimelineInterface } from "../../domain/interface/infoTimeline";
import { SkillGroupInterface } from "../../domain/interface/skill.interface";

export class ResumeService {
    async getEducationData() {
        const result: InfoTimelineInterface = {
            title: '學歷',
            subTitle: '',
            content: [
                {
                    title: '桃園市立陽明高級中等學校',
                    subTitle: '普通科 高中畢業',
                    detail: '',
                    startStr: '2010/09',
                    endStr: '2013/06',
                },
                {
                    title: '私立銘傳大學',
                    subTitle: '都市規劃與防災學系 大學畢業',
                    detail: '',
                    startStr: '2013/09',
                    endStr: '2017/06',
                },
            ],
        };
        return result;
    }

    async getWorkData() {
        const result: InfoTimelineInterface = {
            title: '工作經驗',
            subTitle: '目前累積約有3.5年的網頁應用與網頁服務器的開發經驗，曾參與各項專案開發，以及產品開發。',
            content: [
                {
                    title: '實習生',
                    subTitle: '群立科技股份有限公司',
                    detail: `
- 自學程式語言
- 開發WebGIS 平台:
    宜蘭縣智慧營運中心(IOC) 雛型先導示範平台
                    `,
                    startStr: '2016/07',
                    endStr: '2017/05',
                },
                {
                    title: '軟體開發工程師',
                    subTitle: '群立科技股份有限公司',
                    detail: `
負責公司代理的應用開發，以及負責協助公司其他部門的專案。
- 公司代理產品(*NavVis* 移動光達系統)的應用開發。
- 基於Navvis 路徑規劃，開發Web 逐步導航等功能。
- 整合客戶端資訊、介接外部API， 視覺化平台呈現資訊。
- 推動Docker 容器化部署，將專案容器化分版管理。
- 推動用REST API方式做前後端分離，導入Nestjs作為後端開發。
- 因應Kiosk 使用需求，使用Electron 包裝跨平台應用。
                    `,
                    startStr: '2018/05',
                    endStr: '2019/07',
                },
                {
                    title: '資深工程師',
                    subTitle: '德鴻科技股份有限公司',
                    detail: `
參與**語音質檢產品**微服務架構開發。
- 使用Nestjs 共同開發語音質檢評分服務。
- 使用Nestjs 開發人員管理 RESTful CRUD API 與 JWT 驗證。
- 使用Nestjs 開發Email 排程設定、推送 API。
- 使用Nestjs 開發整合客戶資訊服務。
- 使用Go gin 開發API，依據Clean Architecture 重構語音文本處理服務。
- 使用 MongoDB Aggregate 產生報表資訊。
- 到客戶端K8S更新部署，以及產品服務排查。
                    `,
                    startStr: '2019/12',
                    endStr: '2022/02',
                },
            ],
        };
        return result;
    }

    async getSkillData() {
        const result: SkillGroupInterface[] = [
            {
                title: '後端程式語言與框架',
                description: '',
                content: [
                    {
                        name: 'Nodejs',
                        description: `
- 熟悉Node.js 後端開發，使用Nestjs/Express 作為API開發框架(TypeScript)。
                        `,
                        rating: 4,
                    },
                    {
                        name: 'Golang',
                        description: `
- 熟悉Golang(Go) 後端開發，使用Gin 作為API開發框架。
                        `,
                        rating: 4,
                    },
                ],
                chips: ['Nodejs', 'Express', 'Golang', 'Gin'],
            },
            {
                title: '前端程式語言與框架',
                description: `
網頁程式設計:
                `,
                content: [
                    {
                        name: 'HTML',
                        description: `
- 前端HTML 各項標籤及功能使用。  
                        `,
                        rating: 3,
                    },
                    {
                        name: 'SCSS/CSS',
                        description: `
- CSS各項功能及使用Sass編寫CSS。
                        `,
                        rating: 3,
                    },
                    {
                        name: 'ReactJS',
                        description: `
- Reactjs 基本操作(使用TypeScript, tsx)，使用Material UI。
                        `,
                        rating: 2.5,
                    },
                ],
                chips: [
                    'HTML', 'CSS', 'SCSS', 'ReactJS', 'JavaScript', 'TypeScript', 'MUI'
                ],
            },
            {
                title: '資料庫相關 NoSQL',
                description: '',
                content: [
                    {
                        name: 'MongoDB',
                        description: `
- 熟悉MongoDB: 開發上使用Mongoose, mongo-driver。
                        `,
                        rating: 4,
                    },
                    {
                        name: 'ElasticSearch',
                        description: `
- 熟悉ElasticSearch: 使用過相關應用，也有對index template 相關設計。
                        `,
                        rating: 4,
                    },
                    {
                        name: 'RabbitMQ',
                        description: `
- RabbitMQ: 使用RabbitMQ，作為各服務功能流程處理。
                        `,
                        rating: 3.5,
                    },
                ],
                chips: ['MongoDB', 'ElasticSearch', 'Mongoose', 'Go: mongo-driver', 'RabbitMQ'],
            },
            {
                title: '資料庫相關 SQL',
                description: `
- SQL語法基本操作Select、Update、Delete、Insert 
- 基本資料庫正規化。
- 開發上主要使用ORM。
                `,
                content: [
                    {
                        name: 'PostgreSQL',
                        description: `
- 有搭配PostGIS 使用過。
                        `,
                        rating: 2.5,
                    },
                ],
                chips: [
                    'PostgreSQL', 'ORM', 'TypeORM', 'PostGIS', 'MSSQL', 'SQL Server'
                ],
            },
            {
                title: '其他開發相關 Devops',
                description: `
- 閒暇之餘用自己的電腦，串起GitLab, Drone, SonarQube, Docker Harbor 的CI流程。
- 也有用過Kind(K8S in docker)架起K8S環境練習部署。
                `,
                content: [
                ],
                chips: [
                    'Docker', 'K8S', 'Git', 'Drone', 'GitLab', 'SonarQube', 'Helm', 'Docker Harbor','Linux', 'CentOS', 'Ubuntu',
                ],
            },
            {
                title: '地理資訊類',
                description: ``,
                content: [
                ],
                chips: [
                    'ArcGIS', 'QGIS', 'GeoServer'
                ],
            },
        ];

        return result;
    }
}