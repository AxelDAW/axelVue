<template>
    <form @submit.prevent="añadirObjeto">
        <p>Añadir objeto</p>
        <p>Nombre del objeto: <input type="text" required v-model="nombreObjeto"></p>
        <p>Cantidad: <input type="number" required v-model="numeroCantidades"></p>
        <button type="submit">Añadir Objeto</button>
        <br>
        <RouterLink to="/test">Ir a Test.</RouterLink>
    </form>
    <div>
        <p>Lista: </p>
        <ul>
            <li v-for="(objeto, index) in lista" :key="index">{{ objeto.nombre }}, {{ objeto.cantidad }}</li>
        </ul>
    </div>
</template>


<script>
const miColor="rojo"
export default {
    data() {
        return {
        nombreObjeto: '',
        numeroCantidades: null,
        lista: [{nombre: "Coche", cantidad: 3}]
    }
},
    methods: {
        añadirObjeto(){
            let objeto = {
                nombre: this.nombreObjeto,
                cantidad: Number(this.numeroCantidades)
            }
            this.lista.push(objeto);
            this.nombreObjeto = '';
            this.numeroCantidades = null;
        }
    }
}

</script>

