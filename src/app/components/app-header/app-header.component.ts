import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppHeaderComponent implements OnInit {

  @Input() titulo: string = 'PokéShop';
  @Input() subtitulo: string = 'Tu tienda de cartas coleccionables';

  constructor() { }

  ngOnInit() {}

}