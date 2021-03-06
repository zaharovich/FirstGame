import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game';
  oppPoints = 'Очки противника:';
  myName = 'Ваши очки:';
  default = 'default';
  player = 'default';
  countVrag = 0;
  countPlayer = 0;
  resultPlayer = 0;
  resultVrag = 0;
  show = true;

  handleChange (val: any) {
    this.myName = val.myName;
    this.show = val.show;
  }

  random = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  hodVrag = () => {
    this.resultVrag = this.random(3);

    this.player = 'default shake';

    setTimeout(() => {
      if (this.resultVrag === 0 ){
        this.player = 'default rock';
      }
      if (this.resultVrag === 1 ){
        this.player = 'default paper';
      }
      if (this.resultVrag === 2 ){
        this.player = 'default scissors';
      }

      switch (this.resultPlayer) {
        case 0:
          if (this.resultVrag === 1) {
            this.countVrag ++;
          }
          if (this.resultVrag === 2){
            this.countPlayer ++;
          }
          break;

        case 1:
          if (this.resultVrag === 0) {
            this.countPlayer ++;
          }
          if (this.resultVrag === 2){
            this.countVrag ++;
          }
          break;

        case 2:
          if (this.resultVrag === 0) {
            this.countVrag ++;
          }
          if (this.resultVrag === 1){
            this.countPlayer ++;
          }
          break;
      }

      console.log(this.resultVrag,  this.resultPlayer);
    },1500)

  }

  hodPaper = (value: number) => {
    this.resultPlayer = value;
    this.hodVrag();
    this.default = 'default shake';
    setTimeout(() => {
      this.default = 'default paper';
    },1500)
  }

  hodRock = (value: number) => {
    this.resultPlayer = value;
    this.hodVrag();
    this.default = 'default shake';
    setTimeout(() => {
      this.default = 'default rock';
    },1500)
  }

  hodScissors = (value: number) => {
    this.resultPlayer = value;
    this.hodVrag();
    this.default = 'default shake';
    setTimeout(() => {
      this.default = 'default scissors';
    },1500)
  }
}




