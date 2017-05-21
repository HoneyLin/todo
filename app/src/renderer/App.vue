<template>
    <div id="app">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            <menus></menus>
            <main class="mdl-layout__content">
                <div class="page-content">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import('material-design-lite')
    import store from 'renderer/vuex/store'
    import Menus from 'components/Menus.vue'
    export default {
        store,
        components:{
            Menus
        }
    }
</script>

<style>
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

    * {
        margin: 0;
        padding: 0;
    }

    html,
    body,
    .page-content,
    .mdl-layout__content{
        height: 100%;
        
    }

    .page-content {
        align-items: center;
        background: radial-gradient(
                ellipse at center,
                rgba(255, 255, 255, 1) 0%,
                rgba(229, 229, 229, .85) 100%
        );
        background-position: center;
        display: flex;
        font-family: Lato, Helvetica, sans-serif;
        justify-content: center;
        text-align: center;
    }

</style>
