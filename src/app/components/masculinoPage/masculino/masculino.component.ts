import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { MainMasculinoPageComponent } from '../main-masculino-page/main-masculino-page.component';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-masculino',
  standalone: true,
  imports: [HeaderComponent, MainMasculinoPageComponent, FooterComponent],
  templateUrl: './masculino.component.html',
  styleUrl: './masculino.component.scss'
})
export class MasculinoComponent {

}
