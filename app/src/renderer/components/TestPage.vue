<template>
    <ul class="demo-list-item mdl-list">
        <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content" @click="newBrowser">
                create new BrowserWindow
            </span>
        </li>
    </ul>
</template>
<style>
    .demo-list-item {
        width: 300px;
    }
</style>
<script>
    export default{
        methods: {
            newBrowser: function () {
                // In the main process.
                const BrowserWindow = require('electron').remote.BrowserWindow;

                let win = new BrowserWindow({ width: 800, height: 600, show: false });
                win.on('closed', function() {
                    win = null;
                });

                win.loadURL('https://github.com');
                win.show();
            }
        }
    }
</script>
