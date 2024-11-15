import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'STELLA ',
      descripcion: 'Sandalias con flores bordadas a mano.',
      precio: 85000,
      imagen: 'https://i.pinimg.com/236x/fa/5b/d3/fa5bd3534643afd918520a02fea1f03a.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'KIM',
      descripcion: 'Zapato de taco ancho con detalles en pedreria.',
      precio: 77000,
      imagen: '/z4.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'STEFFY',
      descripcion: 'Glamour clasico, con detalles de un lazo fino con perlas.',
      precio: 80000,
      imagen: 'https://i.pinimg.com/236x/90/e0/c7/90e0c705dc8f2570df7b49eb1e9b8d14.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'NAIM',
      descripcion: 'Taco fico con brillos y detalles en pedreria.',
      precio: 73500,
      imagen: 'https://sposabella.mx/wp-content/uploads/2019/07/IMG_2082.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'DAYSEE',
      descripcion: ' Diseño basico, tacones de punta fina especial para tu boda',
      precio: 70000,
      imagen: 'https://i.pinimg.com/236x/41/de/f8/41def8ac377ed5ddc022d2ae93af1d6c.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'SMITH',
      descripcion: 'Detalles delicados.',
      precio: 67900,
      imagen: 'https://i.pinimg.com/236x/78/43/25/78432542466478ab0cce704a5663c04c.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'ANNIE',
      descripcion: 'Estilo autentico.',
      precio: 69000,
      imagen: 'https://i.pinimg.com/236x/a6/77/0d/a6770d59d020d1cf6e34b737fa5bfcdc.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'HADID',
      descripcion: 'Cuentan con una tira cruzada que aporta delicadeza al diseño',
      precio: 74000,
      imagen: 'https://i.pinimg.com/236x/fd/d5/89/fdd58923f5b42d8180d28c2a651effa4.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'JEFFEY',
      descripcion: 'Diseño clasico y fino.',
      precio: 61000,
      imagen: '/z5.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 10,
      nombre: 'MADDEN',
      descripcion: 'Edicion limitada.',
      precio: 78000,
      imagen: 'https://i.pinimg.com/236x/2d/73/71/2d73719a259bf21b7001893596790843.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 11,
      nombre: 'BEKY',
      descripcion: 'Edicion limitada.',
      precio: 80000,
      imagen: 'https://i.pinimg.com/564x/a6/48/57/a64857d119179931f9fc857f2263a8e9.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 12,
      nombre: 'SHELLY',
      descripcion: 'Detalles de pedreria en el taco.',
      precio: 89000,
      imagen: 'https://i.pinimg.com/736x/1d/4a/aa/1d4aaaf7c94f2072d764329d156fc2f8.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    }








  ];
  constructor(private carritoService: CarritoService) { }

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
