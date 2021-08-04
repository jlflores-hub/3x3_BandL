import { IUser } from 'app/core/user/user.model';
import { ITeam } from 'app/shared/model/team.model';

export interface IPlayer {
  id?: number;
  user?: IUser;
  team?: ITeam;
}

export class Player implements IPlayer {
  constructor(public id?: number, public user?: IUser, public team?: ITeam) {}
}
