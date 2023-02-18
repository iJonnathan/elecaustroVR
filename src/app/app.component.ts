import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router: Router) { }

  title = 'recorridooVR';
  AFRAME = (window as any).AFRAME;

  ngOnInit(): void {

    let audio = new Audio();
    audio.src = "./assets/sounds/Insomnia Dream.mp3";
    audio.load();
    //  audio.play();


    let component = this;

  }
}