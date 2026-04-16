import { Component,Input } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-product-banner',
    templateUrl: './product-banner.component.html',
    styleUrls: ['./product-banner.component.scss'],
    standalone: false
})
export class ProductBannerComponent {
  @Input() style_2: boolean = false;
  @Input() style_3: boolean = false;

  banners = [
  {
    title: 'Montres pour Homme',
    desc: 'Design puissant et élégant',
    banner_img: 'assets/img/shop/banner/banner-6.png',
    link: '/shop?category=homme'
  },
  {
    title: 'Montres pour Femme',
    desc: 'Raffinement et modernité',
    banner_img: '/assets/img/shop/banner/banner-women.png',
    link: '/shop?category=femme'
  }
];
  public bannerProducts: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.bannerProducts = products.filter((p) => p.banner).slice(0, 2);
    });
  }
}
