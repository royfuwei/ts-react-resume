import { ProjectItemInterface } from "../../domain/interface/project.interface";
import { ProjectItemImageType } from "../../domain/dto/project.dto";
import ProjectGfForest from '../../assets/images/project-gf-forest.png';
import ProjectGfTia from '../../assets/images/project-gf-tia.png';
import ProjectGfYilanIot from '../../assets/images/project-gf-yilan-iot.png';
import ProjectGfYilan from '../../assets/images/project-gf-yilan.png';
import ProjectGfNavvisCgmh from '../../assets/images/project-gf-navvis-cgmh.png';
import ProjectGfNavvisVghtc from '../../assets/images/project-gf-navvis-vghtc.png';
import ProjectGfNavvisYilan from '../../assets/images/project-gf-navvis-yilan.png';
import ProjectGrandsysInu from '../../assets/images/project-grandsys-inu.png';
import ProjectGrandsysInu2 from '../../assets/images/project-grandsys-inu2.png';

export class ProjectService {

    getProjectData() {
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
                title: '國有林防災應變及堰塞湖監測系統',
                subTitle: '群立科技股份有限公司',
                detail: `
介接API 與部屬環境。
1. 使用Nodejs 開發排程，介接雨量、河川水位API。
2. 使用Nodejs Express 開發專案用API，將資料區分冷、熱資料，使用Redis 做快取。
3. 在此專案使用Docker 容器化部署。
                `,
                role: '軟體設計工程師',
                url: 'https://qlakenew.forest.gov.tw/public/',
                startStr: '2018/11',
                endStr: '2019/03',
                images: [
                    {
                        type: ProjectItemImageType.ASSET,
                        path: ProjectGfForest,
                    }
                ],
                skills: [
                    'Html', 'JavaScript', 'CSS', 'Nodejs', 'Express', 'Redis', 'Docker', 'PostgreSQL', 'Nginx'
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
主要工作有:
1. 語音質檢產品開發:
  - 微服務架構開發，依需求使用Typescript,Golang，開發產品API。
  - 研究MongoDB、ElasticSearch、RabbitMQ相關應用，針對產品的需求，導入適合的技術設計API。
  - 前後端程式設計及單元測試、設計文件撰寫。

2. 重構一代產品，改善架構，更容易修改:
  - 以DDD(領域驅動開發)、TDD(測試驅動開發) 等開發模式為目標，設計開發架構。
  - 使用Clean Architecture 重構原有Golang 服務。
  - 使用Nestjs 框架重構原有Node/Express 服務。

3. 優化CI/CD 流程: 
  - 協助依據不同客戶配置客製化參數，使用drone, helm3 自動化產生不同專案配置，方便到客戶端上架。

4. 協助維護人員到客戶端K8S部署，以及產品服務除錯。
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
}