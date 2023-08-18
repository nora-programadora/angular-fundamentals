import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Fundamentos de angular';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password: ''
  }

  name = 'Nora';
  imagen = 'https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg';
  widthImg = '';
  widthImgP = '';

  person = {
    name: 'Nora',
    age: 24,
    avatar: 'data:image/jpeg;base64,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'
  }

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  products: Product[] = [
    {
      name: 'Camiseta blanca de Ada Lovelace',
      price: 300,
      image: 'https://www.noraprogramadora.com/wp-content/uploads/2022/06/IMG_20220512_191607-scaled.jpg'
    },
    {
      name: 'Camiseta negra de Ada Lovelace',
      price: 300,
      image: 'https://www.noraprogramadora.com/wp-content/uploads/2022/06/IMG_20220513_152127-scaled.jpg'
    },
    {
      name: 'Camiseta blanca de Ada Lovelace',
      price: 300,
      image: 'https://www.noraprogramadora.com/wp-content/uploads/2022/06/IMG_20220513_202731-scaled.jpg'
    },
    {
      name: 'Camiseta blanca de Ada Lovelace',
      price: 300,
      image: 'https://www.noraprogramadora.com/wp-content/uploads/2022/12/home-office-g05f023925_1920.jpg'
    },
    {
      name: 'Camiseta blanca de Ada Lovelace',
      price: 300,
      image: 'https://www.noraprogramadora.com/wp-content/uploads/2022/02/tumblr_p4gg96mEZi1x6bigbo1_500.jpg'
    },
    {
      name: 'Camiseta blanca de Ada Lovelace',
      price: 300,
      image: 'https://www.noraprogramadora.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-23-at-16.57.15.jpeg'
    }
  ]

  names: string[] = ['Nora', 'Alan', 'Madeline', 'Samuel'];
  newName = '';

  toggleButtpon(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.name = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }
}
