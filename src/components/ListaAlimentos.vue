<template>

    <div v-if="lista.length>0">
        <p> Alimentos disponibles. </p>
        <ul>
            <li v-for="(prod, index) in lista" :key="index">{{ prod.nombre }}, {{ prod.precio }}€/Kg <button @click="$emit('agregarCarrito', prod)">Añadir al carrito.</button></li>
        </ul>
    </div>

</template>

<script>

export default {

    name: 'ListaAlimentos',

    props: [ 'lista' ]

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
