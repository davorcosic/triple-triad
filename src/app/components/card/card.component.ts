import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../../models/card';


@Component({
  selector: 'tt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() {
    this.card = {
      numbers: {
        top: 6,
        left: 4,
        right: 9,
        bottom: 1
      }
    }
  }

  ngOnInit(): void { }

}
