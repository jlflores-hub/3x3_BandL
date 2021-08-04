import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'player',
        loadChildren: () => import('./player/player.module').then(m => m.TresXtresPlayerModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./team/team.module').then(m => m.TresXtresTeamModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class TresXtresEntityModule {}
