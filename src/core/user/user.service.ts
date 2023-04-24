import { ILinkItem, LinkItemTypeEnum } from "../../domain/interface/ILinkItem";

export class UserService {
    async getAboutMe() {
        const result: { aboutMe: string } = {
            aboutMe: `
我是一個有親和力、勇於挑戰、有積極行動力和責任感的人。

是一個後端工程師，不過也寫會一點前端的工程師。

主要專職在後端，也會一點前端。
- 後端開發：主要使用Node.js(Nestjs), Golang。
- 前端開發：ReactJS。
- Devops: 有一些 Docker, K8S, CI/CD 觀念。
- 了解一些開發模式DDD、TDD。
            `,
        };
        return result;
    }

    async getMyLinks() {
        const results: ILinkItem[] = [
            {
                linkType: LinkItemTypeEnum.Web,
                href: 'http://royfuwei.com',
            },
            {
                linkType: LinkItemTypeEnum.GitHub,
                href: 'https://github.com/royfuwei',
            },
            {
                linkType: LinkItemTypeEnum.LinkedIn,
                href: 'https://www.linkedin.com/in/%E9%A6%A5%E8%94%9A-%E8%8E%8A-64403b194/',
            },
        ];
        return results;
    }
}