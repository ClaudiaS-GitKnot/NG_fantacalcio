import { Component } from '@angular/core';
import { TCalciatore } from '../../models/calciatore.model';
import { CALCIATORI } from '../../data/serie-a';

@Component({
  selector: 'app-calciatori-list',
  templateUrl: './calciatori-list.component.html',
  styleUrl: './calciatori-list.component.css',
})
export class CalciatoriListComponent {
  calciatori: TCalciatore[] = CALCIATORI;
}
