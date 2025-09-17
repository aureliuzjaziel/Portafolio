import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  onSubmitForm(event: Event) {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const nombre = (form.querySelector('input[type="text"]') as HTMLInputElement)?.value;
    const email = (form.querySelector('input[type="email"]') as HTMLInputElement)?.value;
    const mensaje = (form.querySelector('textarea') as HTMLTextAreaElement)?.value;
    
    // Construir mensaje para WhatsApp
    const whatsappMessage = `Hola Xavier,%0A%0A` +
      `Mi nombre es: ${encodeURIComponent(nombre)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A%0A` +
      `Mensaje: ${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/593985985494?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario
    form.reset();
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias! Te redirigimos a WhatsApp para completar el envío del mensaje.');
  }

}
