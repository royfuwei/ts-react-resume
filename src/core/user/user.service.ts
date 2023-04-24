export class UserService {
    async getAboutMe() {
        const result: { aboutMe: string } = {
            aboutMe: `
我是一個有親和力、勇於挑戰、有積極行動力和責任感的人。

是一個後端工程師，不過也寫會一點前端的工程師。

主要專職在後端，也會一點前端。
- 後端開發：主要使用Node.js(Nestjs), Golang。
- 前端開發：ReactJS基礎
- Devops: 有一些 Docker, K8S, CI/CD 觀念。
- 了解一些開發模式DDD、TDD
            `,
        };
        return result;
    }
}