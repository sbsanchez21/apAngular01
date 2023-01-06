import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //declaro una variable string con el valor Juan Perez
  usuario: string ='Juan Perez';

  usuarioValido: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
