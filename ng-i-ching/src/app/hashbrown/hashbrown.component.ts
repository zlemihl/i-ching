import { Component, OnInit } from '@angular/core';
import { seedrandom } from 'seedrandom';

@Component({
  selector: 'app-hashbrown',
  templateUrl: './hashbrown.component.html',
  styleUrls: ['./hashbrown.component.css']
})
export class HashbrownComponent implements OnInit {
  out : string;
  constructor() { }

  ngOnInit(): void {
  }
  query(q:string){
    
    let time = new Date();  
    let x = time.toString()+': ' + q;
    //TO-DO seedrandom -> undefined!
/*
    //let seed = seedrandom(x);
    // let hexagram = [];
    // for(let i=0;i<6;i++){
    //     let line = 0;
    //     for(let i=0;i<3;i++){
    //         line += Math.floor(seed()*2);
    //     }
    //     hexagram.push(line+6);
    // }
    // console.log(x);
    // console.log(hexagram);
    console.log(x);
    
*/  this.out = x;
  }
}
