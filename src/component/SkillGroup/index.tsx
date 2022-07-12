import { Grid } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ICompoenetBaseProps } from '../../domain/interface/compoenents/base';
import { SkillGroupInterface, SkillItemInterface } from '../../domain/interface/skill.interface';
import './SkillGroup.scss';
import { HoverRating } from '../HoverRating';

export const contentConfig: SkillGroupInterface[] = [
    {
        title: '後端程式語言與框架',
        description: '',
        content: [
            {
                name: 'Nodejs',
                description: `
- 熟悉Node.js 後端開發，使用Nestjs/Express 作為API開發框架(TypeScript)。
                `,
                rate: 50,
            },
            {
                name: 'Golang',
                description: `
- 熟悉Golang(Go) 後端開發，使用Gin 作為API開發框架。
                `,
                rate: 50,
            }
        ],
        chips: [],
    },
    {
        title: '前端程式語言與框架',
        description: `
網頁程式設計:
        `,
        content: [
            {
                name: 'HTML',
                description: '',
                rate: 50,
            }
        ],
        chips: [],
    },
];


export const SkillGroupComponent = ({  name = '專長', content = contentConfig, }: ICompoenetBaseProps<SkillGroupInterface[]>) => {
    const genSkillItemsContent = (content: SkillItemInterface[]) => {
        return content.map(({ name, rate, description}) => {
            return (
                <Grid className="item-grid" item xs={12} md={6}>
                    <div className="item-top">
                        <div className="item-name">
                            { name }
                        </div>
                        <div className="item-rate">
                            <HoverRating/>
                        </div>
                    </div>
                    <div className="item-description">
                        <ReactMarkdown>
                            { description }
                        </ReactMarkdown>
                    </div>
                </Grid>
                
            );
        });
    };
    const genContentHtml = () => {
        return content.map(({ title, description, content}) => (
            <div className='sg-content'>
                <div className='content-title'>
                    { title }
                </div>
                <div className='content-description'>
                    <ReactMarkdown>
                        { description }
                    </ReactMarkdown>
                </div>
                <Grid className='content-skill-items' container spacing={{ xs: 1, md: 2}}>
                    { genSkillItemsContent(content) }
                </Grid>
            </div>
        ))
    }
    return (
        <div className='SkillGroup'>
            <div className="sg-title">
                { name }
            </div>
            <br />
            <div>
                { genContentHtml() }
            </div>
            <br />
        </div>
    );
};