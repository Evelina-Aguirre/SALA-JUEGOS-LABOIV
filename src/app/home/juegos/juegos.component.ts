import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule,FormsModule,NavbarComponent],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent implements OnInit{
  ngOnInit(): void {
   
  }

  constructor(private router: Router) {
    
  }

  ir(string:string){
    this.router.navigate([string]);
  }

}
