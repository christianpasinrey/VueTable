<script setup lang="ts">
    const props = defineProps({
        direction:{
            type: String,
            required: true,
            default: 'grid'
        },
        columns:{
            type: Number,
            required: false,
        },
        rows:{
            type: Number,
            required: false,
            default: 1
        },
        contentPosition:{
            type: String,
            required: false
        },
        contentWidth:{
            type: String,
            required: false,
            default: '100%'
        },
        contentHeight:{
            type: String,
            required: false,
            default: '100%'
        },
        textAlign:{
            type: String,
            required: false,
            default: 'center'
        }
    });

    const handleColumns = (columns: number) => {
        const cols = [];
        for(let i = 0; i < columns; i++){
            cols.push({
                id: i,
                name: `Columna ${i + 1}`
            })
        }
        return cols;
    }
</script>
<template>
    <main>
        <!-- use props in styles -->
        <div class="layout"
            :style="{
                display: 'flex',
                flexDirection: direction,
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                justifyContent: contentPosition,
                width: contentWidth,
            }"
        >
        
            <slot name="columns">
                <div v-for="column,i in handleColumns(6)" :key="`column-${i}`"
                    :style="{
                        display: 'flex',
                        justifyContent: contentPosition,
                        alignItems: contentPosition,
                        width: contentWidth,
                        height: contentHeight,
                        textAlign: textAlign,
                        margin: '0 50px'
                    }"
                >
                    <span>{{ column.name }}</span>
                </div>
            </slot>
        </div>
        
    </main>
</template>