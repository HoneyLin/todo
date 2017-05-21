<template>
    <div class="mdl-layout__drawer">
        <!--<span class="mdl-layout-title">Title</span>-->
        <nav class="mdl-navigation" @click="closeNav">
            <router-link class="mdl-navigation__link" to="/">首页</router-link>
            <router-link class="mdl-navigation__link" to="/task-control">任务管理</router-link>
            <router-link class="mdl-navigation__link" to="/test">electrons测试</router-link>
        </nav>
    </div>
</template>
<style>
</style>
<script>
    export default{
        methods: {
            closeNav: function () {
                let drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
                let obfuscator = document.getElementsByClassName('mdl-layout__obfuscator')[0];
                if (drawer) {
                    drawer.classList.remove('is-visible');
                    obfuscator.classList.remove('is-visible');
                }
            }
        }
    }
</script>
