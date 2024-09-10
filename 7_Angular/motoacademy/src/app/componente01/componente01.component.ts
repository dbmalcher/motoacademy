import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
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
    if(this.name === this.nameAlt){
      this.name = this.nameDefault
    }else {
      this.name = this.nameAlt
    }
  }

  imagem: string = "../cachorro.jpg"
}
