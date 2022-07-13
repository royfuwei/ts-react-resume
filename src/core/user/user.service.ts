export class UserService {
    async getAboutMe() {
        const result: { aboutMe: string } = {
            aboutMe: `
大家好...

我是一個有親和力、但有點內向、勇於挑戰、有積極行動力和責任感的人。
            `,
        };
        return result;
    }
}