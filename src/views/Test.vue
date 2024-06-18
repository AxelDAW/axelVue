<template>

    <h1 class="rojo">Compra.</h1>
    <br>
    <ListaAlimentos @agregarCarrito="agregarCarrito" :lista="lista"/>
    <CarritoCompra ref="carritoCompra" :carrito="carrito"/>

    <button @click="borrarCarrito">Borrar carrito.</button>

    <RouterLink to="/prueba">Ir a Prueba.</RouterLink>

    <div class="box">
        <h3>Hola</h3>
    </div>

</template>

<script>
import ListaAlimentos from '@/components/ListaAlimentos.vue'
import CarritoCompra from '@/components/CarritoCompra.vue'
import MisDatos from '../misdatos.json';
import { calculoSuma } from '@/helpers/Calculos';

export default {
    name:'Test',

    components: {
        ListaAlimentos,
        CarritoCompra
    },
   
    data (){
        return { 
            miColor: "rojo",
            lista: [{nombre: "Tomates", precio: 2}, {nombre: "Pescado", precio: 12}, {nombre: "Huevos", precio: 1}, {nombre: "Carne", precio: 8}],
            carrito: [],
            usuarios: [],
        }
    },
    methods: {
        agregarCarrito(prod){
            this.carrito.push(prod);
            this.sumaPrecio;
            this.$refs.carritoCompra.sumaPrecio();
        },
        
        borrarCarrito(carrito){
            this.carrito = []
        },

        consultaUsuarios(){
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (response.ok){
                    return response.json()
                }
                throw new Error(response.status);
            })
            .then(data=> {
                this.usuarios = data;
            })
            .catch(err => {
                console.error("Error: ", err.mesage)
            })            
        }
    },


    mounted(){
        
        console.log( MisDatos.filter( k => {
            return k.username.startsWith('A')
        } ) );

        console.log( calculoSuma( 2, 4 ) );
        /* this.consultaUsuarios(); */

    }

}
</script>

<style scoped>

h1 {
    color:red
}

button {
    height: 20px;
    width: 50%;
}

div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
</style>