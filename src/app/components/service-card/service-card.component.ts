import { NgClass } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() service: any;
  isFlipped = false;
}
