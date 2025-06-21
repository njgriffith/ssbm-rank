import { Injectable } from "@angular/core";
import { Player } from "../models/player.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService{
    private playerData: Player | undefined;

    setPlayer(player: Player){
        this.playerData = player;
    }

    getPlayer(){
        return this.playerData;
    }

    clearPlayer(){
        this.playerData = undefined;
    }
}