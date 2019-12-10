import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      title: "Escucha tu música",
      subTitle:"EN CUALQUIER LUGAR",
      description:"Los mejores álbunes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.",
      icon:"play"
    },
    {
      title: "Disfruta de nuestro reproductor",
      subTitle:"DE VIDEOS INCREBLES",
      description:"Entra al modo video de nuestro reproductor y obtén acceso a clips, documentales y making offs increibles de tu artista favorito.",
      icon:"videocam"
    },
    {
      title: "Accede al exclusivo",
      subTitle:"MODO DEPORTE",
      description:"Crea una playlist basada en tu actividad física. Ten reportes y acceso a lo que necesites, integrado con GPS!.",
      icon:"bicycle"
    }
  ]
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish(){
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }

}
