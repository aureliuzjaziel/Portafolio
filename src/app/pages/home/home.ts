import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  imageLoaded = false; // Cambiado a false para mostrar placeholder inicialmente

  constructor() {
    console.log('🚀 Componente Home cargado');
  }

  onImageLoad() {
    this.imageLoaded = true;
    console.log('✅ Imagen cargada correctamente');
  }

  onImageError() {
    this.imageLoaded = false;
    console.log('❌ Error al cargar la imagen - Verifica la ruta: assets/images/profile.jpg');
  }
}
