import Apprentices from './apprentices';
import Masters from './masters';
import Starring from './starring';
import Teaching from './teaching';
import Test from './test';
import Tokens from './tokens';
import Users from './users';

declare module 'egg' {
  export interface IController {
    apprentices: Apprentices,
    masters: Masters,
    starring: Starring,
    teaching: Teaching,
    tokens: Tokens,
    users: Users,
  }
}
