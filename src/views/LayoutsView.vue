<script setup lang="ts">

    import Layout from '@/components/Layout.vue';
    
   
</script>
<template>
    <Layout
        direction="row"
        :columns="6"
        :rows="2"
        contentPosition="center"
        contentWidth="100"
        contentHeight="100"
        textAlign="center"
    >
        <template #columns></template>
    </Layout>

</template>