import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, MainComponent, FooterComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
