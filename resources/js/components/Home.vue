<template>
    <div class="home px-5 py-5">
        <div class="d-flex flex-wrap">

            <div class="folder mx-3 my-3" v-for="i in 10" :key="i">
                <div class="folder-icon d-flex justify-content-center">
                    <img :src="$root.getUrl('images/icon-folder.png')" alt="" class="img-fluid">
                </div>
                <div class="folder-name">
                    <p class="h5">Category 1</p>
                </div>
            </div>

        </div>
    </div>
</template>
