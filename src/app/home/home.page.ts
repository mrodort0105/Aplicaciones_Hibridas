import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCard } from '../models/pokemon-card';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { CartaItemComponent } from '../components/carta-item/carta-item.component';
import { IonCol, IonGrid, IonContent, IonRow } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRow, IonContent, IonGrid, IonCol,
    CommonModule,
    AppHeaderComponent,
    CartaItemComponent]
})
export class HomePage {
  listaCartas: PokemonCard[] = [
    {
      id: 1,
      nombre: 'Charizard GX',
      tipo: 'Fuego',
      precio: 149.99,
      imagen: 'https://images.scrydex.com/pokemon/smp-SM211/medium',
      rareza: 'Ultra Rara',
      enOferta: true,
      fechaLanzamiento: '2017-08-04'
    },
    {
      id: 2,
      nombre: 'Frosmoth',
      tipo: 'Hielo',
      precio: 89.50,
      imagen: 'https://images.scrydex.com/pokemon/swsh10tg-TG04/medium',
      rareza: 'Secret Rare',
      enOferta: false,
      fechaLanzamiento: '2020-11-20'
    },
    {
      id: 3,
      nombre: 'Pikachu VMAX',
      tipo: 'Eléctrico',
      precio: 120.99,
      imagen: 'https://images.scrydex.com/pokemon/swshp-SWSH062/medium',
      rareza: 'Secret Rare',
      enOferta: false,
      fechaLanzamiento: '2020-11-20'
    },
    {
      id: 4,
      nombre: 'Venasaur',
      tipo: 'Planta',
      precio: 89.50,
      imagen: 'https://images.scrydex.com/pokemon/tcgp-PA-18/medium',
      rareza: 'Secret Rare',
      enOferta: false,
      fechaLanzamiento: '2020-11-20'
    },
    {
      id: 5,
      nombre: 'Blastoise',
      tipo: 'Agua',
      precio: 89.50,
      imagen: 'https://images.scrydex.com/pokemon/tcgp-PA-29/medium',
      rareza: 'Secret Rare',
      enOferta: false,
      fechaLanzamiento: '2020-11-20'
    }

  ];

  constructor() {}
}