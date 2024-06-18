<template>

<div v-if="carrito.length > 0">
        <p> Carrito de la compra. </p>
        <ul>
            <li v-for="(elem, index) in carrito" :key="index">{{ elem.nombre }}, {{ elem.precio }}€/Kg </li>
        </ul>
        <p>El total es: {{ total }}€/Kg</p>
    
    </div>

</template>

<script>

export default{

    data(){
        return {
            total : 0
        }
    },

    name: 'CarritoCompra',
    props: [ 'carrito' ],
    methods: {
        sumaPrecio(){
            this.total = this.carrito.reduce((total,prod) => {
                return total + prod.precio
            }, 0);
        }
    }
}

</script>

<style>
ul {
    margin-top: 10px;
    padding-left: 10px;
}

li {
    margin-bottom: 5px;
}

div {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 30px;
}
</style>