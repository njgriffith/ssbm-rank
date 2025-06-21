import { Routes } from '@angular/router';
import { RankingsComponent } from './rankings/rankings.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
    { path: '', redirectTo: '/rankings', pathMatch: 'full' },
    { path: 'rankings', component: RankingsComponent },
    { path: 'player/:id', component: PlayerComponent },
];
