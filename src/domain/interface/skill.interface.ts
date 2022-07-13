export interface SkillGroupInterface {
    title: string;
    description: string;
    content: SkillItemInterface[];
    chips: string[];
};

export interface SkillItemInterface {
    name: string;
    rating: number;
    description: string;
}