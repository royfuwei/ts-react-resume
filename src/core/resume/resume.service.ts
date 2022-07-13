import { InfoTimelineInterface } from "../../domain/interface/infoTimeline";
import { SkillGroupInterface } from "../../domain/interface/skill.interface";

export class ResumeService {
    async getEducationData() {
        const result: InfoTimelineInterface = {
            title: '學歷',
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
            content: [
                {
                    title: '系上雷射切割機操作人員',
                    subTitle: '銘傳大學 都市規劃與防災學系',
                    detail: '',
                    startStr: '2015/03',
                    endStr: '2017/04',
                },
                {
                    title: '宜蘭縣人行道gis數化',
                    subTitle: '銘傳大學 都市規劃與防災學系',
                    detail: '',
                    startStr: '2016/03',
                    endStr: '2016/12',
                },
                {
                    title: '實習生',
                    subTitle: '群立科技股份有限公司',
                    detail: '',
                    startStr: '2016/07',
                    endStr: '2016/08',
                },
                {
                    title: '實習生',
                    subTitle: '群立科技股份有限公司',
                    detail: '',
                    startStr: '2017/01',
                    endStr: '2017/05',
                },
                {
                    title: '軟體開發工程師',
                    subTitle: '群立科技股份有限公司',
                    detail: '',
                    startStr: '2018/05',
                    endStr: '2019/07',
                },
                {
                    title: '資深工程師',
                    subTitle: '德鴻科技股份有限公司',
                    detail: '',
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
                    {
                        name: 'PHP',
                        description: `
- 基礎PHP 後端開發，有使用過Laravel 使用經驗。
                        `,
                        rating: 3,
                    },
                ],
                chips: ['Nodejs', 'Express', 'Golang', 'Gin', 'PHP', 'Laravel'],
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
                        rating: 3.5,
                    },
                    {
                        name: 'Flutter',
                        description: `
- 有案子需要APP Demo，用Flutter 做Android, IOS 前端Demo APP。
                        `,
                        rating: 3.5,
                    },
                ],
                chips: [
                    'HTML', 'CSS', 'SCSS', 'ReactJS', 'JavaScript', 'TypeScript', 'Flutter', 'MUI'
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
                        name: 'Redis',
                        description: `
- 基礎Redis: 在開發上設計資料冷熱區，有使用過Redis 作為熱資料使用。
                        `,
                        rating: 2,
                    },
                    {
                        name: 'RabbitMQ',
                        description: `
- RabbitMQ: 使用RabbitMQ，作為各服務功能流程處理。
                        `,
                        rating: 3.5,
                    },
                ],
                chips: ['MongoDB', 'ElasticSearch', 'Mongoose', 'Go: mongo-driver', 'Redis', 'RabbitMQ'],
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
                        rating: 4,
                    },
                ],
                chips: [
                    'PostgreSQL', 'ORM', 'TypeORM', 'PostGIS', 'MSSQL', 'SQL Server'
                ],
            },
            {
                title: '其他工具',
                description: `
Devops: 
                `,
                content: [
                ],
                chips: [
                    'Docker', 'K8S', 'Git', 'Drone', 'GitLab', 'SonarQube', 'Helm', 'Docker Harbor',
                ],
            },
        ];

        return result;
    }
}