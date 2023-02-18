import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] , 
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ESCENARIO = 0;

  AFRAME = (window as any).AFRAME;
  // audio = new Audio();
  ngAfterViewInit(): void{

    
    // this.audio.volume = 0.9;
    // this.audio.loop = true ;
    // this.audio.play();
  }

  desposicionarPortales(){
    // PORTALES PRINCIPALES
    this.cambiarPosicionObj("texto_portal_escenario_1", "99 99 99");
    this.cambiarPosicionObj("texto_portal_escenario_2", "99 99 99");
    this.cambiarPosicionObj("texto_portal_escenario_3", "99 99 99");
    this.cambiarPosicionObj("texto_portal_escenario_4", "99 99 99");
    this.cambiarPosicionObj("texto_portal_escenario_5", "99 99 99");

    this.cambiarPosicionObj("fondo_portal_escenario_1", "99 99 99");
    this.cambiarPosicionObj("fondo_portal_escenario_2", "99 99 99");
    this.cambiarPosicionObj("fondo_portal_escenario_3", "99 99 99");
    this.cambiarPosicionObj("fondo_portal_escenario_4", "99 99 99");
    this.cambiarPosicionObj("fondo_portal_escenario_5", "99 99 99");

    this.cambiarPosicionObj("portal_escenario_1", "99 99 99");
    this.cambiarPosicionObj("portal_escenario_2", "99 99 99");
    this.cambiarPosicionObj("portal_escenario_3", "99 99 99");
    this.cambiarPosicionObj("portal_escenario_4", "99 99 99");
    this.cambiarPosicionObj("portal_escenario_5", "99 99 99");

    //BTN MENU
    this.cambiarPosicionObj("texto_home", "99 99 99");
    this.cambiarPosicionObj("fondo_home", "99 99 99");
    this.cambiarPosicionObj("home", "99 99 99");

    //BTN INFO
    this.cambiarPosicionObj("btn_info", "99 99 99");
    this.cambiarPosicionObj("cuadro_info", "99 99 99");
    this.cambiarPosicionObj("model_generador_3d", "99 99 99");
    
    // PORTALES DE CADA ESCENARIO
    this.cambiarPosicionObj("portal_exterior_1_2", "99 99 99");
    this.cambiarPosicionObj("obj_portal_exterior_1_2", "99 99 99");
    this.cambiarPosicionObj("portal_exterior_2_1", "99 99 99");
    this.cambiarPosicionObj("obj_portal_exterior_2_1", "99 99 99");
    this.cambiarPosicionObj("portal_antiguo_generador_1_2", "99 99 99");
    this.cambiarPosicionObj("obj_portal_antiguo_generador_1_2", "99 99 99");
    this.cambiarPosicionObj("portal_antiguo_generador_2_1", "99 99 99");
    this.cambiarPosicionObj("obj_portal_antiguo_generador_2_1", "99 99 99");
    this.cambiarPosicionObj("portal_exterior_represa_1_2", "99 99 99");
    this.cambiarPosicionObj("obj_portal_exterior_represa_1_2", "99 99 99");
    this.cambiarPosicionObj("portal_exterior_represa_2_1", "99 99 99");
    this.cambiarPosicionObj("obj_portal_exterior_represa_2_1", "99 99 99");
    this.cambiarPosicionObj("portal_generador_electrico_1_2", "99 99 99");
    this.cambiarPosicionObj("obj_portal_generador_electrico_1_2", "99 99 99");
    this.cambiarPosicionObj("portal_generador_electrico_2_1", "99 99 99");
    this.cambiarPosicionObj("obj_portal_generador_electrico_2_1", "99 99 99");
    this.cambiarPosicionObj("portal_generador_electrico_2_3", "99 99 99");
    this.cambiarPosicionObj("obj_portal_generador_electrico_2_3", "99 99 99");
    this.cambiarPosicionObj("portal_generador_electrico_3_2", "99 99 99");
    this.cambiarPosicionObj("obj_portal_generador_electrico_3_2", "99 99 99");
    this.cambiarPosicionObj("portal_interior_represa_1_2", "99 99 99");
    this.cambiarPosicionObj("obj_portal_interior_represa_1_2", "99 99 99");
    this.cambiarPosicionObj("portal_interior_represa_2_1", "99 99 99");

    // ABEJAS
    this.cambiarPosicionObj("objAbeja", "199 199 199");
    this.cambiarPosicionObj("objAbeja1", "199 199 199");
    this.cambiarPosicionObj("objAbeja2", "199 199 199");
    this.cambiarPosicionObj("objAbeja3", "199 199 199");
    this.cambiarPosicionObj("objAbeja4", "199 199 199");
    this.cambiarPosicionObj("objAbeja5", "199 199 199");
  }

  ngOnInit(): void {


    //this.audio.src = "./assets/audio_fondo.mp3";
    //this.audio.load();
    var sky = document.getElementById("sky") as HTMLImageElement | null;
     
    var componente = this;
    /******************** HOME *********************/
    this.AFRAME.registerComponent('texto_home', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var home_portal = document.querySelector("#texto_home");
          
          if(String(home_portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_background');
                //Desposiciona todos los portales
                componente.desposicionarPortales()
                // --
                componente.darVisibilidadMenu("true");

                componente.darVisibilidadEscenarios("portal_exterior_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_exterior_1_2", "false");
                componente.darVisibilidadEscenarios("portal_antiguo_generador_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_antiguo_generador_1_2", "false");
                
                componente.darVisibilidadEscenarios("portal_exterior_represa_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_exterior_represa_1_2", "false");

                componente.darVisibilidadEscenarios("portal_generador_electrico_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_1_2", "false");

                componente.darVisibilidadEscenarios("portal_interior_represa_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_interior_represa_1_2", "false");
                componente.darVisibilidadEscenarios("home", "false");
                componente.darVisibilidadEscenarios("texto_home", "false");
                componente.darVisibilidadEscenarios("fondo_home", "false");
                //componente.darVisibilidadEscenarios("sphere_escenario_1" , "false");

                componente.darVisibilidadEscenarios("objAbeja", "true");
                componente.cambiarPosicionObj("objAbeja","-4.2 -1.9 -3");
                componente.cambiarRotacion("objAbeja","0 65 0");
                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");
                
            }
          }
        });
      }
    });
    /******************** MOUSE ENTER btnInfo *********************/
    this.AFRAME.registerComponent('btn_info', {
      init: function () {
        this.el.addEventListener('mouseenter', function (evt:any) {
          var btn_info = document.querySelector("#btn_info");
          
          if(String(btn_info?.getAttribute("visible") ) == "true"){ // tiene que ser visible para dar click
            
            componente.darVisibilidadEscenarios("model_generador_3d" , "false");

              if (componente.ESCENARIO == 1){
                //componente.setAtribute("cuadro_info","material","src: #info_reservorio;");
                componente.cambiarPosicionObj("cuadro_info","18 1 2");
                componente.setAtribute("cuadro_info","width","19");
                componente.setAtribute("cuadro_info","height","23.3");
                componente.cambiarRotacion("cuadro_info","0 -98 0");
                componente.setAtribute("cuadro_info","src","#info_reservorio");
                
                componente.darVisibilidadEscenarios("cuadro_info" , "true");
              }
              else if (componente.ESCENARIO == 2){
                
                //componente.setAtribute("cuadro_info","material","src: #info_reservorio;");
                componente.cambiarPosicionObj("cuadro_info","4 -1 2.1");
                componente.setAtribute("cuadro_info","width","6");
                componente.setAtribute("cuadro_info","height","4");
                componente.cambiarRotacion("cuadro_info","0 -116 0");
                componente.setAtribute("cuadro_info","src","#info_generadora");

                componente.darVisibilidadEscenarios("cuadro_info" , "true");

                componente.cambiarPosicionObj("model_generador_3d","2 -1 1.1");
                componente.darVisibilidadEscenarios("model_generador_3d" , "true");
              }

              else if (componente.ESCENARIO == 4){
                
                //componente.setAtribute("cuadro_info","material","src: #info_reservorio;");
                componente.cambiarPosicionObj("cuadro_info","-6.5 -1.4 -0.9");
                componente.setAtribute("cuadro_info","width","6");
                componente.setAtribute("cuadro_info","height","5");
                componente.cambiarRotacion("cuadro_info","0 81 0");
                componente.setAtribute("cuadro_info","src","#info_sala_control");
                
                componente.darVisibilidadEscenarios("cuadro_info" , "true");
              }
              
            
            
          }
        });
      }
    });

    /******************** CLICK ESCENARIO 1 *********************/
    this.AFRAME.registerComponent('portal_escenario_1', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portalEscenario1 = document.querySelector("#portal_escenario_1");
          
          if(String(portalEscenario1?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                componente.ESCENARIO = 1;
                sky.setAttribute('src','#sky_exterior_1');
                //componente.darVisibilidadEscenarios("sphere_escenario_1" , "true");
                
                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --
                //desaparecer componentes menu
                componente.darVisibilidadMenu("false");
                
                // button info
                componente.darVisibilidadEscenarios("btn_info", "true");
                componente.cambiarPosicionObj("btn_info","10 1 2");
                componente.cambiarRotacion("btn_info","0 160 0");
                componente.setAtribute("btn_info","radius","0.4");

                // aparecer button home
                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("texto_home","-14.4 0 3.6");
                componente.cambiarRotacion("texto_home","0 90 0");
                componente.cambiarPosicionObj("fondo_home","-15 0 3 2.9");
                componente.cambiarRotacion("fondo_home","0 90 0");
                componente.cambiarPosicionObj("home","-14.9 0 3");
                componente.cambiarRotacion("home","0 90 0");
                componente.cambiarAnimation("fondo_home","property: rotation; to: 0 90 360; loop: true; dur: 3000;")
                // +++++

                componente.darVisibilidadEscenarios("portal_exterior_1_2", "true");
                componente.cambiarPosicionObj("portal_exterior_1_2", "-40 0 -30");

                componente.darVisibilidadEscenarios("obj_portal_exterior_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_exterior_1_2", "-50 0 -30");

                //componente.darVisibilidadEscenarios("fondo_portal_exterior_1_2", "true");

                componente.darVisibilidadEscenarios("objAbeja1", "true");
                componente.cambiarPosicionObj("objAbeja1","-8.2 -2.9 -1");
                componente.cambiarRotacion("objAbeja1","0 80 0");
                
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");
                
            }
          }
        });
      }
    });

    
    
    /******************** CLICK EXTERIOR_1__A__2 *********************/
    this.AFRAME.registerComponent('portal_exterior_1_2', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_exterior_1_2");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_exterior_2');
                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --

                // button info
                componente.darVisibilidadEscenarios("btn_info", "false");
                componente.darVisibilidadEscenarios("portal_exterior_1_2", "false");

                componente.darVisibilidadEscenarios("obj_portal_exterior_1_2", "false");

                componente.darVisibilidadEscenarios("portal_exterior_2_1", "true");
                componente.cambiarPosicionObj("portal_exterior_2_1", "7 -1 -12");

                componente.darVisibilidadEscenarios("obj_portal_exterior_2_1", "true");
                componente.cambiarPosicionObj("obj_portal_exterior_2_1", "0 -1 -20");

                componente.darVisibilidadEscenarios("objAbeja1", "false");

                componente.darVisibilidadEscenarios("texto_home", "false");
                componente.darVisibilidadEscenarios("fondo_home", "false");
                componente.darVisibilidadEscenarios("home", "false");
                
            }
          }
        });
      }
    });
     /******************** CLICK EXTERIOR_2__A__1 *********************/
     this.AFRAME.registerComponent('portal_exterior_2_1', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_exterior_2_1");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_exterior_1');

                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --

                // button info
                componente.darVisibilidadEscenarios("btn_info", "true");
                componente.cambiarPosicionObj("btn_info","10 1 2");
                componente.cambiarRotacion("btn_info","0 160 0");
                componente.setAtribute("btn_info","radius","0.4");

                componente.darVisibilidadEscenarios("portal_exterior_2_1", "false");
                componente.darVisibilidadEscenarios("obj_portal_exterior_2_1", "false");

                componente.darVisibilidadEscenarios("portal_exterior_1_2", "true");
                componente.cambiarPosicionObj("portal_exterior_1_2", "-40 0 -30");

                componente.darVisibilidadEscenarios("obj_portal_exterior_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_exterior_1_2", "-50 0 -30");
                
                componente.darVisibilidadEscenarios("objAbeja1", "true");
                componente.cambiarPosicionObj("objAbeja1","-8.2 -2.9 -1");
                componente.cambiarRotacion("objAbeja1","0 80 0");
                
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");

                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("texto_home","-14.4 0 3.6");
                componente.cambiarPosicionObj("fondo_home","-15 0 3 2.9");
                componente.cambiarPosicionObj("home","-14.9 0 3");
                
            }
          }
        });
      }
    });

    /******************** CLICK ESCENARIO 2 *********************/
    this.AFRAME.registerComponent('portal_escenario_2', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portalEscenario2 = document.querySelector("#portal_escenario_2");
          if(String(portalEscenario2?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                componente.ESCENARIO = 2;
                sky.setAttribute('src','#sky_antiguo_generador_1');
                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --
                //desaparecer componentes menu
                componente.darVisibilidadMenu("false");

                // button info
                componente.darVisibilidadEscenarios("btn_info", "true");
                componente.cambiarPosicionObj("btn_info","5.5 -2 3");
                componente.setAtribute("btn_info","radius","0.25");
                componente.cambiarRotacion("btn_info","0 180 0");
                

                // aparecer exterior_1
                componente.darVisibilidadEscenarios("portal_antiguo_generador_1_2", "true");
                componente.cambiarPosicionObj("portal_antiguo_generador_1_2","-66 1 5");

                componente.darVisibilidadEscenarios("obj_portal_antiguo_generador_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_antiguo_generador_1_2","-60 1 13");

                componente.darVisibilidadEscenarios("objAbeja2", "true");
                componente.cambiarPosicionObj("objAbeja2","-4.2 -4.3 -3");
                componente.cambiarRotacion("objAbeja2","0 55 0");
                
                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");

                // aparecer button home
                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("fondo_home","1.3 0 10.2");
                componente.cambiarPosicionObj("home","1.27 0 10");
                componente.cambiarPosicionObj("texto_home","1.85 0 9.8");
                componente.cambiarRotacion("texto_home","0 180 0");
                componente.cambiarRotacion("fondo_home","0 180 0");
                componente.cambiarRotacion("home","0 180 0");
                componente.cambiarAnimation("fondo_home","property: rotation; to: 0 180 360; loop: true; dur: 3000;")
                // +++++

                // componente.cambiarPosicionObj("objAbeja","1 -2.8 -8");
                // componente.cambiarRotacion("objAbeja","0 -5 0");
            }
          }
        });
      }
    });

    /******************** CLICK ANTIGUO_GENERADOR__1__A__2 *********************/
    this.AFRAME.registerComponent('portal_antiguo_generador_1_2', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_antiguo_generador_1_2");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_antiguo_generador_2');
                   //Desposiciona todos los portales
                   componente.desposicionarPortales()
                   // --

                componente.darVisibilidadEscenarios("portal_antiguo_generador_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_antiguo_generador_1_2", "false");
                componente.darVisibilidadEscenarios("portal_antiguo_generador_2_1", "true");
                componente.cambiarPosicionObj("portal_antiguo_generador_2_1","26 1 3");

                componente.darVisibilidadEscenarios("obj_portal_antiguo_generador_2_1", "true");
                componente.cambiarPosicionObj("obj_portal_antiguo_generador_2_1","15 1 8");

                componente.darVisibilidadEscenarios("objAbeja2", "false");

                 // button info
                componente.darVisibilidadEscenarios("btn_info", "false");
                componente.darVisibilidadEscenarios("texto_home", "false");
                componente.darVisibilidadEscenarios("fondo_home", "false");
                componente.darVisibilidadEscenarios("home", "false");
                
            }
          }
        });
      }
    });
    /******************** CLICK ANTIGUO_GENERADOR__2__A__1 *********************/
    this.AFRAME.registerComponent('portal_antiguo_generador_2_1', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_antiguo_generador_2_1");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_antiguo_generador_1');
                   //Desposiciona todos los portales
                   componente.desposicionarPortales()
                   // --

                componente.darVisibilidadEscenarios("portal_antiguo_generador_2_1", "false");
                componente.darVisibilidadEscenarios("obj_portal_antiguo_generador_2_1", "false");
                componente.darVisibilidadEscenarios("portal_antiguo_generador_1_2", "true");
                componente.cambiarPosicionObj("portal_antiguo_generador_1_2","-66 1 5");

                componente.darVisibilidadEscenarios("obj_portal_antiguo_generador_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_antiguo_generador_1_2","-60 1 13");

                componente.darVisibilidadEscenarios("objAbeja2", "true");
                componente.cambiarPosicionObj("objAbeja2","-4.2 -4.3 -3");
                componente.cambiarRotacion("objAbeja2","0 55 0");
                
                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");

                 // button info
                componente.darVisibilidadEscenarios("btn_info", "true");
                componente.cambiarPosicionObj("btn_info","5.5 -2 3");
                componente.setAtribute("btn_info","radius","0.25");
                componente.cambiarRotacion("btn_info","0 180 0");

                
                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("fondo_home","1.3 0 10.2");
                componente.cambiarPosicionObj("home","1.27 0 10");
                componente.cambiarPosicionObj("texto_home","1.85 0 9.8");
                
            }
          }
        });
      }
    });
     /******************** CLICK ESCENARIO 3 *********************/
     this.AFRAME.registerComponent('portal_escenario_3', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portalEscenario3 = document.querySelector("#portal_escenario_3");
          if(String(portalEscenario3?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                componente.ESCENARIO = 3;
                sky.setAttribute('src','#sky_exterior_represa_1');
                   //Desposiciona todos los portales
                   componente.desposicionarPortales()
                   // --

                componente.darVisibilidadMenu("false");
                // aparecer exterior_1
                componente.darVisibilidadEscenarios("portal_exterior_represa_1_2", "true");
                componente.cambiarPosicionObj("portal_exterior_represa_1_2","1 -2 -20");

                componente.darVisibilidadEscenarios("obj_portal_exterior_represa_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_exterior_represa_1_2","-10 -2 -20");

                componente.darVisibilidadEscenarios("objAbeja3", "true");
                componente.cambiarPosicionObj("objAbeja3","-4.2 -4.3 -3");
                componente.cambiarRotacion("objAbeja3","0 60 0");
                
                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");

                 // button info
                componente.darVisibilidadEscenarios("btn_info", "false");

                // aparecer button home
                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("fondo_home","-13.3 0 0.23");
                componente.cambiarPosicionObj("home","-13.3 0 0.2");
                componente.cambiarPosicionObj("texto_home","-12 0 0.6");
                componente.cambiarRotacion("texto_home","0 90 0");
                componente.cambiarRotacion("fondo_home","0 90 0");
                componente.cambiarRotacion("home","0 90 0");
                componente.cambiarAnimation("fondo_home","property: rotation; to: 0 90 360; loop: true; dur: 3000;")
                // +++++
            }
          }
        });
      }
    });
    /******************** CLICK EXTERIOR_REPRESA__1__A__2 *********************/
    this.AFRAME.registerComponent('portal_exterior_represa_1_2', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_exterior_represa_1_2");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_exterior_represa_2');
                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --

                componente.darVisibilidadEscenarios("portal_exterior_represa_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_exterior_represa_1_2", "false");
                componente.darVisibilidadEscenarios("portal_exterior_represa_2_1", "true");
                componente.cambiarPosicionObj("portal_exterior_represa_2_1","5 1 35");

                componente.darVisibilidadEscenarios("obj_portal_exterior_represa_2_1", "true");
                componente.cambiarPosicionObj("obj_portal_exterior_represa_2_1","-5 1 25");

                
                componente.darVisibilidadEscenarios("objAbeja3", "false");

                // button info
                componente.darVisibilidadEscenarios("btn_info", "false");
                componente.darVisibilidadEscenarios("texto_home", "false");
                componente.darVisibilidadEscenarios("fondo_home", "false");
                componente.darVisibilidadEscenarios("home", "false");
                
            }
          }
        });
      }
    });
    /******************** CLICK EXTERIOR_REPRESA__2__A__1 *********************/
    this.AFRAME.registerComponent('portal_exterior_represa_2_1', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_exterior_represa_2_1");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_exterior_represa_1');
                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --
                componente.darVisibilidadEscenarios("portal_exterior_represa_2_1", "false");
                componente.darVisibilidadEscenarios("obj_portal_exterior_represa_2_1", "false");

                componente.darVisibilidadEscenarios("portal_exterior_represa_1_2", "true");
                componente.cambiarPosicionObj("portal_exterior_represa_1_2","1 -2 -20");

                componente.darVisibilidadEscenarios("obj_portal_exterior_represa_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_exterior_represa_1_2","-10 -2 -20");

                componente.darVisibilidadEscenarios("objAbeja3", "true");
                componente.cambiarPosicionObj("objAbeja3","-4.2 -4.3 -3");
                componente.cambiarRotacion("objAbeja3","0 60 0");
                
                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");

                 // button info
                componente.darVisibilidadEscenarios("btn_info", "false");

                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("fondo_home","-13.3 0 0.23");
                componente.cambiarPosicionObj("home","-13.3 0 0.2");
                componente.cambiarPosicionObj("texto_home","-12 0 0.6");
                
            }
          }
        });
      }
    });

    /******************** CLICK ESCENARIO 4 *********************/
     this.AFRAME.registerComponent('portal_escenario_4', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portalEscenario4 = document.querySelector("#portal_escenario_4");
          if(String(portalEscenario4?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                componente.ESCENARIO = 4;
                sky.setAttribute('src','#sky_generador_electrico_1');

                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --
                
                componente.darVisibilidadMenu("false");
                componente.darVisibilidadEscenarios("portal_generador_electrico_1_2", "true");
                componente.cambiarPosicionObj("portal_generador_electrico_1_2","-26 1 40");

                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_generador_electrico_1_2","-16 1 40");

                componente.darVisibilidadEscenarios("objAbeja4", "true");
                componente.cambiarPosicionObj("objAbeja4","-3.2 -3.9 -2");
                componente.cambiarRotacion("objAbeja4","0 65 0");
                
                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");

                 // button info
                 componente.darVisibilidadEscenarios("btn_info", "false");

                // aparecer button home
                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("fondo_home","2.6 -1 -7.2");
                componente.cambiarPosicionObj("home","2.5 -1 -7.1");
                componente.cambiarPosicionObj("texto_home","1.8 -1 -7.1");
                componente.cambiarRotacion("texto_home","0 0 0");
                componente.cambiarRotacion("fondo_home","0 0 0");
                componente.cambiarRotacion("home","0 0 0");
                componente.cambiarAnimation("fondo_home","property: rotation; to: 0 0 360; loop: true; dur: 3000;")
                // +++++
            }
          }
        });
      }
    });

    /******************** CLICK GENERADOR_ELECTRICO__1__A__2 *********************/
    this.AFRAME.registerComponent('portal_generador_electrico_1_2', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_generador_electrico_1_2");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_generador_electrico_2');

                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --

                componente.darVisibilidadEscenarios("portal_generador_electrico_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_1_2", "false");

                componente.darVisibilidadEscenarios("portal_generador_electrico_2_3", "true");
                componente.darVisibilidadEscenarios("portal_generador_electrico_2_1", "true");
                componente.cambiarPosicionObj("portal_generador_electrico_2_3","-22 18 -13");
                componente.cambiarPosicionObj("portal_generador_electrico_2_1","16 -6 -4");

                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_2_1", "true");
                componente.cambiarPosicionObj("obj_portal_generador_electrico_2_1","16 1 5");

                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_2_3", "true");
                componente.cambiarPosicionObj("obj_portal_generador_electrico_2_3","-22 15 -3");

                componente.darVisibilidadEscenarios("objAbeja4", "false");

                 // button info
                componente.darVisibilidadEscenarios("btn_info", "false");
                componente.darVisibilidadEscenarios("texto_home", "false");
                componente.darVisibilidadEscenarios("fondo_home", "false");
                componente.darVisibilidadEscenarios("home", "false");
                
            }
          }
        });
      }
    });
    /******************** CLICK GENERADOR_ELECTRICO__2__A__3 *********************/
    this.AFRAME.registerComponent('portal_generador_electrico_2_3', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_generador_electrico_2_3");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_generador_electrico_3');
                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --

                componente.darVisibilidadEscenarios("portal_generador_electrico_2_3", "false");
                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_2_3", "false");
                componente.darVisibilidadEscenarios("portal_generador_electrico_2_1", "false");
                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_2_1", "false");
                componente.darVisibilidadEscenarios("portal_generador_electrico_3_2", "true");
                componente.cambiarPosicionObj("portal_generador_electrico_3_2","16 -6 -4");

                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_3_2", "true");
                componente.cambiarPosicionObj("obj_portal_generador_electrico_3_2","16 -6 3");
                
                // button info
                componente.darVisibilidadEscenarios("btn_info", "true");
                componente.cambiarPosicionObj("btn_info","-6.6 -1.4 -1");
                componente.setAtribute("btn_info","radius","0.25");
                componente.cambiarRotacion("btn_info","0 10 0");
                
                componente.darVisibilidadEscenarios("objAbeja4", "false");

                componente.darVisibilidadEscenarios("texto_home", "false");
                componente.darVisibilidadEscenarios("fondo_home", "false");
                componente.darVisibilidadEscenarios("home", "false");
                
            }
          }
        });
      }
    });
     /******************** CLICK GENERADOR_ELECTRICO__3__A__2 *********************/
     this.AFRAME.registerComponent('portal_generador_electrico_3_2', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_generador_electrico_3_2");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_generador_electrico_2');
                  //Desposiciona todos los portales
                  componente.desposicionarPortales()
                  // --
                componente.darVisibilidadEscenarios("portal_generador_electrico_2_3", "true");
                componente.darVisibilidadEscenarios("portal_generador_electrico_2_1", "true");
                componente.darVisibilidadEscenarios("portal_generador_electrico_3_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_3_2", "false");
                componente.cambiarPosicionObj("portal_generador_electrico_2_3","-22 18 -13");
                componente.cambiarPosicionObj("portal_generador_electrico_2_1","46 1 -10");

                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_2_3", "true");
                componente.cambiarPosicionObj("obj_portal_generador_electrico_2_3","-22 15 -3");

                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_2_1", "true");
                componente.cambiarPosicionObj("obj_portal_generador_electrico_2_1","16 1 5");

                componente.darVisibilidadEscenarios("btn_info", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");

                componente.darVisibilidadEscenarios("texto_home", "false");
                componente.darVisibilidadEscenarios("fondo_home", "false");
                componente.darVisibilidadEscenarios("home", "false");
                
            }
          }
        });
      }
    });
    /******************** CLICK GENERADOR_ELECTRICO__2__A__1 *********************/
    this.AFRAME.registerComponent('portal_generador_electrico_2_1', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_generador_electrico_2_1");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_generador_electrico_1');
                    //Desposiciona todos los portales
                    componente.desposicionarPortales()
                    // --
                componente.darVisibilidadEscenarios("portal_generador_electrico_2_3", "false");
                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_2_3", "false");

                componente.darVisibilidadEscenarios("portal_generador_electrico_2_1", "false");
                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_2_1", "false");
                componente.darVisibilidadEscenarios("portal_generador_electrico_1_2", "true");
                componente.cambiarPosicionObj("portal_generador_electrico_1_2","-26 1 40");

                componente.darVisibilidadEscenarios("obj_portal_generador_electrico_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_generador_electrico_1_2","-16 1 40");

                componente.darVisibilidadEscenarios("objAbeja4", "true");
                componente.cambiarPosicionObj("objAbeja4","-3.2 -3.9 -2");
                componente.cambiarRotacion("objAbeja4","0 65 0");
                
                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja5", "false");

                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("fondo_home","2.6 -1 -7.2");
                componente.cambiarPosicionObj("home","2.5 -1 -7.1");
                componente.cambiarPosicionObj("texto_home","1.8 -1 -7.1");
                
            }
          }
        });
      }
    });

    /******************** CLICK ESCENARIO 5 *********************/
    this.AFRAME.registerComponent('portal_escenario_5', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portalEscenario5 = document.querySelector("#portal_escenario_5");
          if(String(portalEscenario5?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                componente.ESCENARIO = 5;
                sky.setAttribute('src','#sky_interior_represa_1');
                    //Desposiciona todos los portales
                    componente.desposicionarPortales()
                    // --

                componente.darVisibilidadMenu("false");
                componente.darVisibilidadEscenarios("portal_interior_represa_1_2", "true");
                componente.cambiarPosicionObj("portal_interior_represa_1_2","-60 1 -5");

                componente.darVisibilidadEscenarios("obj_portal_interior_represa_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_interior_represa_1_2","-60 3 5");

                componente.darVisibilidadEscenarios("objAbeja5", "true");
                componente.cambiarPosicionObj("objAbeja5","4.2 -3.9 -1");

                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");

                //componente.cambiarPosicionObj("objAbeja","4.2 -3.9 -1");
                //componente.cambiarRotacion("objAbeja","0 -95 0");

                 // aparecer button home
                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("fondo_home","-1.6 -1 -6.2");
                componente.cambiarPosicionObj("home","-1.5 -1 -6.1");
                componente.cambiarPosicionObj("texto_home","-2.1 -1 -6.1");
                componente.cambiarRotacion("texto_home","0 0 0");
                componente.cambiarRotacion("fondo_home","0 0 0");
                componente.cambiarRotacion("home","0 0 0");
                componente.cambiarAnimation("fondo_home","property: rotation; to: 0 0 360; loop: true; dur: 3000;")
                // +++++
            }
          }
        });
      }
    });

    /******************** CLICK INTERIOR_REPRESA_1__A__2 *********************/
    this.AFRAME.registerComponent('portal_interior_represa_1_2', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_interior_represa_1_2");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_interior_represa_2');
                    //Desposiciona todos los portales
                    componente.desposicionarPortales()
                    // --

                componente.darVisibilidadEscenarios("portal_interior_represa_2_1", "true");
                componente.darVisibilidadEscenarios("portal_interior_represa_1_2", "false");
                componente.darVisibilidadEscenarios("obj_portal_interior_represa_1_2", "false");
                componente.cambiarPosicionObj("portal_interior_represa_2_1","40 1 3");

                componente.darVisibilidadEscenarios("objAbeja5", "false");

                componente.darVisibilidadEscenarios("texto_home", "false");
                componente.darVisibilidadEscenarios("fondo_home", "false");
                componente.darVisibilidadEscenarios("home", "false");
                
            }
          }
        });
      }
    });
    /******************** CLICK INTERIOR_REPRESA__2__A__1 *********************/
    this.AFRAME.registerComponent('portal_interior_represa_2_1', {
      init: function () {
        this.el.addEventListener('click', function (evt:any) {
          var portal = document.querySelector("#portal_interior_represa_2_1");
          
          if(String(portal?.getAttribute("visible") )== "true"){ // tiene que ser visible para dar click
            if (sky !== null ){
                sky.setAttribute('src','#sky_interior_represa_1');
                    //Desposiciona todos los portales
                    componente.desposicionarPortales()
                    // --

                componente.darVisibilidadEscenarios("portal_interior_represa_1_2", "true");
                componente.darVisibilidadEscenarios("portal_interior_represa_2_1", "false");
                componente.cambiarPosicionObj("portal_interior_represa_1_2","-60 1 -5");

                componente.darVisibilidadEscenarios("obj_portal_interior_represa_1_2", "true");
                componente.cambiarPosicionObj("obj_portal_interior_represa_1_2","-60 3 5");

                componente.darVisibilidadEscenarios("objAbeja5", "true");
                componente.cambiarPosicionObj("objAbeja5","4.2 -3.9 -1");

                componente.darVisibilidadEscenarios("objAbeja1", "false");
                componente.darVisibilidadEscenarios("objAbeja2", "false");
                componente.darVisibilidadEscenarios("objAbeja3", "false");
                componente.darVisibilidadEscenarios("objAbeja4", "false");

                componente.darVisibilidadEscenarios("texto_home", "true");
                componente.darVisibilidadEscenarios("fondo_home", "true");
                componente.darVisibilidadEscenarios("home", "true");
                componente.cambiarPosicionObj("fondo_home","-1.6 -1 -6.2");
                componente.cambiarPosicionObj("home","-1.5 -1 -6.1");
                componente.cambiarPosicionObj("texto_home","-2.1 -1 -6.1");
                
            }
          }
        });
      }
    });
    
    

  }
  
  darVisibilidadMenu(status:string){

    if(status=="true"){
      this.ESCENARIO = 0;
    }
    this.darVisibilidadEscenarios("btn_info", "false");
    

    var base = document.querySelector("#base_cuadros");
    var backgroundElecaustro = document.querySelector("#backgroundElecaustro");

    var portalEscenario1 = document.querySelector("#portal_escenario_1");
    var portalEscenario2 = document.querySelector("#portal_escenario_2");
    var portalEscenario3 = document.querySelector("#portal_escenario_3");
    var portalEscenario4 = document.querySelector("#portal_escenario_4");
    var portalEscenario5 = document.querySelector("#portal_escenario_5");
    
    var fondo_portalEscenario1 = document.querySelector("#fondo_portal_escenario_1");
    var fondo_portalEscenario2 = document.querySelector("#fondo_portal_escenario_2");
    var fondo_portalEscenario3 = document.querySelector("#fondo_portal_escenario_3");
    var fondo_portalEscenario4 = document.querySelector("#fondo_portal_escenario_4");
    var fondo_portalEscenario5 = document.querySelector("#fondo_portal_escenario_5");
    
    var texto_portalEscenario1 = document.querySelector("#texto_portal_escenario_1");
    var texto_portalEscenario2 = document.querySelector("#texto_portal_escenario_2");
    var texto_portalEscenario3 = document.querySelector("#texto_portal_escenario_3");
    var texto_portalEscenario4 = document.querySelector("#texto_portal_escenario_4");
    var texto_portalEscenario5 = document.querySelector("#texto_portal_escenario_5");

    var abeja = document.querySelector("#objAbeja");
    
    
    if (portalEscenario1 && portalEscenario2 && portalEscenario3 &&  portalEscenario4 && portalEscenario5 && fondo_portalEscenario1  && fondo_portalEscenario2 && fondo_portalEscenario3 && fondo_portalEscenario4  && fondo_portalEscenario5 && texto_portalEscenario1  && texto_portalEscenario2 && texto_portalEscenario3 && texto_portalEscenario4  && texto_portalEscenario5 && backgroundElecaustro && base && abeja
      ){
        backgroundElecaustro.setAttribute('visible', status); 
        base.setAttribute('visible', status); 

        portalEscenario1.setAttribute('visible', status); 
        portalEscenario2.setAttribute('visible', status);
        portalEscenario3.setAttribute('visible', status);
        portalEscenario4.setAttribute('visible', status); 
        portalEscenario5.setAttribute('visible', status); 

        fondo_portalEscenario1.setAttribute('visible', status); 
        fondo_portalEscenario2.setAttribute('visible', status); 
        fondo_portalEscenario3.setAttribute('visible', status); 
        fondo_portalEscenario4.setAttribute('visible', status); 
        fondo_portalEscenario5.setAttribute('visible', status); 

        texto_portalEscenario1.setAttribute('visible', status); 
        texto_portalEscenario2.setAttribute('visible', status); 
        texto_portalEscenario3.setAttribute('visible', status); 
        texto_portalEscenario4.setAttribute('visible', status); 
        texto_portalEscenario5.setAttribute('visible', status); 

        abeja.setAttribute('objAbeja', status); 

        if(status == "true"){
          portalEscenario1.setAttribute('position', '-6 0.5 -7'); 
          portalEscenario2.setAttribute('position', '-3.08 0.5 -8');
          portalEscenario3.setAttribute('position', '0.09 0.5 -9');
          portalEscenario4.setAttribute('position', '3.08 0.5 -8'); 
          portalEscenario5.setAttribute('position', '6.1 0.5 -7'); 
          
          fondo_portalEscenario1.setAttribute('position', '-6.1 0.5 -7.1'); 
          fondo_portalEscenario2.setAttribute('position', '-3.1 0.5 -8.1'); 
          fondo_portalEscenario3.setAttribute('position', '0.1 0.5 -9.1'); 
          fondo_portalEscenario4.setAttribute('position', '3.1 0.5 -8.1'); 
          fondo_portalEscenario5.setAttribute('position', '6.1 0.5 -7.1'); 

          texto_portalEscenario1.setAttribute('position', '-7.3 2.1 -7'); 
          texto_portalEscenario2.setAttribute('position', '-4 2 -8'); 
          texto_portalEscenario3.setAttribute('position', '-1 2 -9'); 
          texto_portalEscenario4.setAttribute('position', '2 2 -8'); 
          texto_portalEscenario5.setAttribute('position', '4.6 2 -7');   

        }

        
     }
  }

  darVisibilidadEscenarios(id: string , status:string){
    var componente = document.querySelector("#"+id);
    if (componente){
        componente.setAttribute('visible', status);
    }
  }
  cambiarPosicionObj(id: string , position:string){
    var componente = document.querySelector("#"+id);
    if (componente){
        componente.setAttribute('position', position);
    }
  }
  cambiarRotacion(id: string , rotation:string){
    var componente = document.querySelector("#"+id);
    if (componente){
        componente.setAttribute('rotation', rotation);
    }
  }
  cambiarAnimation(id: string , animation:string){
    var componente = document.querySelector("#"+id);
    if (componente){
        componente.setAttribute('animation', animation);
    }
  }

  setAtribute(id: string , atributeName: string, atribute:string){
    var componente = document.querySelector("#"+id);
    if (componente){
        componente.setAttribute(atributeName, atribute);
    }
  }
 
}
