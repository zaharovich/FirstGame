import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent implements OnInit {
  playerName = "Введите имя";
  startGame = "Начать игру";
  myName = "";
  show = false;

  @Output() Change = new EventEmitter<any>();


  handleClick = () => {

    this.Change.emit({
      myName: this.myName,
      show: this.show
    })
  }


  constructor() { }

  ngOnInit(): void {
    console.log('started')
  }



}
