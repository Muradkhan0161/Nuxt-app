<template>
    <header class="header">
        <ul class="nav-items">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/user">Users</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
   .header{
       width: 100%;
       height: 100%;
       align-items: center;
       justify-content: center;
       background-color: gray;
       display: flex;
   }
   .nav-items{
       list-style: none;
       margin: 0%;
       padding: 0%;
       display: flex;
       justify-content: space-around;
       align-items: center;
       width: 40%;
       }
</style>