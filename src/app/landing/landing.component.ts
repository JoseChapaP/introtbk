import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public seeMoreOpen = false;

  public characteristicsLeft = [
    { text: 'Sin costo.' },
    { text: 'Vende desde tus RRSS, WhatsApp o mail.' },
    { text: 'Ofrece cuotas a tus clientes.' },
    { text: 'Solo pagas comisión por cada venta.' },
    { text: 'Reemplaza las transferencias.' },
    { text: 'Ofrece una vitrina auto-personalizada con todos los productos/servicios que tengas' },
    { text: 'Aumenta tu venta compartiendo todos tus productos con un solo link.' },
    { text: 'Mejoramiento de los tiempos de respuesta de transacciones y datos.' }
  ];
  public characteristicsRight = [
    { text: 'Podrás acceder a la base completa de todos los pagos recibidos a través del sitio privado transbank.cl.' },
    { text: 'Edita los datos a solicitar en cada link de pago que tu negocio necesite al momento de que tu cliente pague.' },
    { text: 'Compartir en las distintas plataformas de tu empresa, como APP o portales privados, los links de pago de tus productos y/o servicios.' },
    { text: 'A través del portal privado podrás editar la información de tu comercio, crear o editar links de pago, desactivar links, editar logos, entre otros.' },
    { text: 'Añade un punto de venta para tus ventas en tu local (presencial).' }
  ];

  constructor() {
    //empty
  }

  ngOnInit(): void {
    //empty
  }

  public goToHire(): void {
    window.location.href = 'https://google.cl/';
  }

  public seeMore(): boolean {
    this.seeMoreOpen = true;
    return this.seeMoreOpen;
  }
}
