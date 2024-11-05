import { Component } from '@angular/core';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;

}
