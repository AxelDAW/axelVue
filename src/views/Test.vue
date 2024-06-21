<template>

    <h1 class="rojo">Compra.</h1>
    <br>
    <ListaAlimentos @agregarCarrito="agregarCarrito" :lista="lista"/>
    <CarritoCompra ref="carritoCompra" :carrito="carrito"/>

    <button @click="borrarCarrito">Borrar carrito.</button>

    <RouterLink to="/prueba">Ir a Prueba.</RouterLink>
    <RouterLink @click="borrar" to="/login">Volver atrás.</RouterLink>
    <button @click="desloguearse">Salir</button>
    <div class="box">
        <h3>Hola</h3>
    </div>

    <button @click="buscar">Mostrar datos.</button>

</template>

<script>
import ListaAlimentos from '@/components/ListaAlimentos.vue'
import CarritoCompra from '@/components/CarritoCompra.vue'
import MisDatos from '../misdatos.json';

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
            usuario: localStorage.getItem('usuario'),
            contraseña: localStorage.getItem('contraseña'),
            username: '',
            email: ''
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

        borrar(){
            localStorage.removeItem('usuario');
            localStorage.removeItem('contraseña');
        },
        desloguearse(){
            localStorage.removeItem('usuario');
            localStorage.removeItem('contraseña');
            this.$router.push('/login');
        },

        consultaUsuarios( username, email ){
            
            return new Promise( (resolve) => {

                setTimeout(()=>{
                    
                    let datosDevolver = [];
                    MisDatos.map( k => { datosDevolver.push( { username: k.username + '_ALPESA', email: k.email } ) } );
                    resolve( datosDevolver )

                }, 3000)

            })            

        },

        async buscar(){

            let encontrado = await this.consultaUsuarios( this.username, this.email );


                console.log("test")
                console.log(encontrado);


        },
        
    },

    

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