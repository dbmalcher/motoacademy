import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  name: string = 'Daniel'

  nameDefault: string = 'Daniel1'
  nameAlt: string = 'Daniel2'

  alerta(){
    alert("clicked")
  }

  mudaNome(){
    this.isActive = false
    if(this.name === this.nameAlt){
      this.name = this.nameDefault
    }else {
      this.name = this.nameAlt
    }
  }

  imagem: string = "./app/assets/cachorro.jpg"

  isDisabled: boolean = false

  isActive: boolean = true


}
