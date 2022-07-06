import * as dotenv from 'dotenv';
import * as env from 'env-var';
dotenv.config({ path: '.env' });

export class InitConfig {
    public app: string = env.get('APP').default('app').asString();
};