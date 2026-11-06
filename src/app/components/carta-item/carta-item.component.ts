import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCard } from '../../models/pokemon-card';

@Component({
  selector: 'app-carta-item',
  templateUrl: './carta-item.component.html',
  styleUrls: ['./carta-item.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartaItemComponent implements OnInit {

  @Input() carta: PokemonCard | undefined;

  constructor() { }

  ngOnInit() {}

}