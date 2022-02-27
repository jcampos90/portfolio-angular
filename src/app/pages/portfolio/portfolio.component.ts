import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(
    public productsService: ProductsService,
    public infoPageService: InfoPaginaService
  ) {}

  ngOnInit(): void {}
}
