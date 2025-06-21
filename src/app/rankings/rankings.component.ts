import { Component } from '@angular/core';
import { Player } from '../models/player.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PlayerDataService } from '../service/player-data.service';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.css'
})
export class RankingsComponent {
  players: Player[] = [];

  constructor(private http: HttpClient, private router: Router, private playerDataService: PlayerDataService) { }
  ngOnInit(): void {
    this.http.get<{ [id: string]: any }>('assets/rank_data.json')
      .subscribe(data => {
        const transformed: Player[] = Object.entries(data).map(([id, playerData]) => ({
          id: id,
          name: playerData.player,
          points: playerData.points,
          rank: 0,
          events: playerData.events,
          bestEvents: playerData['10_best_events']
        }));
        transformed.sort((a, b) => b.points - a.points);
        transformed.forEach((player, index) => {
          player.rank = index + 1;
        });
        this.players = transformed;
      });
  }

  toPlayerPage(player: any, id: string) {
    this.playerDataService.setPlayer(player)
    this.router.navigate(['/player', id]);
  }
}

