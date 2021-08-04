import { IPlayer } from 'app/shared/model/player.model';

export interface ITeam {
  id?: number;
  name?: string;
  players?: IPlayer[];
}

export class Team implements ITeam {
  constructor(public id?: number, public name?: string, public players?: IPlayer[]) {}
}
