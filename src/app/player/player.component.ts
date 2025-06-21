import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlayerDataService } from '../service/player-data.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit {
  player!: Player | undefined;
  events: string[] = [];
  bestEvents: string[] = [];

  constructor(private playerDataService: PlayerDataService) {
    this.player = this.playerDataService.getPlayer();
    if (this.player === undefined) return;
    this.events = Object.entries(this.player.events as Record<string, { event_date: string }>)
      .sort(([, a], [, b]) => new Date(b.event_date).getTime() - new Date(a.event_date).getTime())
      .map(([key]) => key);
    this.bestEvents = Object.keys(this.player.bestEvents);
  }

  ngOnInit(): void {

  }
}
