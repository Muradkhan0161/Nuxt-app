<template>
    <h1>This is user view, with ID: {{$route.params.id}}</h1>
</template>

<script>
export default {
    validate (data) {
        return /^\d+$/.test(data.params.id);
    },
    layout: 'user'
}

</script>