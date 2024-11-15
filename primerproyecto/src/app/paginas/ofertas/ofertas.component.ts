import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  Productos: Producto[] = [

    {
      id: 1,
      nombre: 'STEFFY',
      descripcion: 'Glamour clasico, con detalles de un lazo fino con perlas.',
      precio: 80000,
      precioDescuento: 40000,
      imagen: 'https://i.pinimg.com/236x/90/e0/c7/90e0c705dc8f2570df7b49eb1e9b8d14.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'BEKY',
      descripcion: 'Edicion limitada.',
      precio: 80000,
      precioDescuento: 40000,
      imagen: 'https://i.pinimg.com/564x/a6/48/57/a64857d119179931f9fc857f2263a8e9.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },

    {
      id: 3,
      nombre: 'HADID',
      descripcion: 'Cuentan con una tira cruzada que aporta delicadeza al diseño',
      precio: 74000,
      precioDescuento: 37000,
      imagen: 'https://i.pinimg.com/236x/fd/d5/89/fdd58923f5b42d8180d28c2a651effa4.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'MADDEN',
      descripcion: 'Edicion limitada.',
      precio: 78000,
      precioDescuento: 39000,
      imagen: 'https://i.pinimg.com/236x/2d/73/71/2d73719a259bf21b7001893596790843.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'SHELLY',
      descripcion: 'Detalles de pedreria en el taco.',
      precio: 89000,
      precioDescuento: 44500,
      imagen: 'https://i.pinimg.com/736x/1d/4a/aa/1d4aaaf7c94f2072d764329d156fc2f8.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'STEFFY',
      descripcion: 'Glamour clasico, con detalles de un lazo fino con perlas.',
      precio: 80000,
      precioDescuento: 40000,
      imagen: 'https://i.pinimg.com/236x/90/e0/c7/90e0c705dc8f2570df7b49eb1e9b8d14.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'ANNIE',
      descripcion: 'Estilo autentico.',
      precio: 69000,
      precioDescuento: 34500,
      imagen: 'https://i.pinimg.com/236x/a6/77/0d/a6770d59d020d1cf6e34b737fa5bfcdc.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'DAYSEE',
      descripcion: ' Diseño basico, tacones de punta fina especial para tu boda',
      precio: 70000,
      precioDescuento: 35000,
      imagen: 'https://i.pinimg.com/236x/41/de/f8/41def8ac377ed5ddc022d2ae93af1d6c.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },



  ];
  constructor(private carritoService: CarritoService) { }

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
  obtenerDescuento(producto: Producto): number {
    if (producto.precio && producto.precioDescuento) {
      const descuento = ((producto.precio - producto.precioDescuento) / producto.precio) * 100;
      return Math.round(descuento); // Redondea al número entero más cercano
    }
    return 0;
  }
}


