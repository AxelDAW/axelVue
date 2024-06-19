<template>
    
    <h1>Hola Mundo</h1>

    <form @submit.prevent="login">
        <div>
            <label>Usuario:</label>
            <input type="text" id="usuario" v-model="usuario" />
        </div>
        <div>
            <label>Contraseña:</label>
            <input type="text" id="contraseña" v-model="contraseña" />
        </div>
        <button @click="logConsola">TEST</button>
        <button type="submit">Login</button>
    </form>

</template>

<script>
import pruebaRoute from '@/pruebaRoute.json'

export default {
    data(){
        return{
            usuario: '',
            contraseña: ''
        }
    }, 
    methods: {

        logConsola(){

            console.log( "APRETADO" );

        },

        encontrarUsuario( usuario, contraseña ){

            return new Promise( (resolve) => {

                setTimeout(()=>{

                    const encontrado = pruebaRoute.find((element) => element.usuario === usuario && element.contraseña === contraseña);    
                    resolve( encontrado )

                }, 2000)

            } )

        },

        async login(){

            let encontrado = await this.encontrarUsuario( this.usuario, this.contraseña );

            if (encontrado && encontrado.usuario){

                console.log( encontrado );
                localStorage.setItem('usuario', this.usuario);
                localStorage.setItem('contraseña', this.contraseña);
            }

            this.$router.push('/test');
            
        }
    }
}

</script>