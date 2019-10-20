import { Component, OnInit } from '@angular/core';
import { PublicStashService } from '../public-stash.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  selectedLeague = null;
  newCharacter = {
    name: null
  };

  leagues = [
    {
        label: "Standard",
        value: "0"
    },
    {
        label: "Standard SSF",
        value: "1"
    },
    {
        label: "Hardcore",
        value: "2"
    },
    {
        label: "Hardcore SSF",
        value: "3"
    },
    {
        label: "Blight",
        value: "4"
    },
    {
        label: "Blight SSF",
        value: "5"
    },
    {
        label: "HC Blight",
        value: "6"
    },
    {
        label: "HC Blight SSF",
        value: "7"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
