import { Component,Input } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CartaInterface } from './carta.interface';
import { CartasService } from '../../../services/cartas.service';

@Component({
  selector: 'app-mayormenor',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './mayormenor.component.html',
  styleUrl: './mayormenor.component.css'
})
export class MayormenorComponent {

 mazo: CartaInterface[]=[];


  constructor(private cartas:CartasService) {
   this.mazo=cartas.mazo;
  }
  
  
}
