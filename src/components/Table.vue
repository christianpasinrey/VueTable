<script lang="ts" setup>
    import {ref,computed, onBeforeMount} from 'vue'

    const props = defineProps({
        data: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: false
        },
        theadColor: {
            type: String,
            required: false,
            default: '#f1f1f1'
        },
        theadTextColor: {
            type: String,
            required: false,
            default: '#000'
        },
        bordered: {
            type: Boolean,
            required: false,
            default: false
        },
        striped: {
            type: Boolean,
            required: false,
            default: false
        },
        rounded: {
            type: Boolean,
            required: false,
            default: false
        },
    });

    const emits = defineEmits(['clicked']);

    const createdRows = computed(()=>{
        // return props.data only with the columns in props.columns
        if(props.columns){
            return props.data.map((row)=>{
                const newRow = {};
                props.columns.forEach((column)=>{
                    newRow[column.key] = row[column.key];
                });
                return newRow;
            });
        }
        return props.data;
    });

    const handleColumn = (column) => {
        if(column === null){
            return '-';
        }
        return column;
    };

    const handleColumnNames = computed(()=>{
        if(props.columns){
            return props.columns.map(
                (column) => column.label
            );
        }
        return Object.keys(props.data[0]);
    });
</script>
<template>
        <table
        :style="{
            width: '100%',
            borderCollapse: 'collapse',
            borderSpacing: '0px',
        }"
    >
        <thead :style="{
            backgroundColor: props.theadColor,
            border: props.bordered ? '1px solid #f1f1f1' : 'none',
            borderRadius: props.rounded ? '10px' : '0px',
            color: props.theadTextColor,
        }">
            <tr>
                <th
                    v-for="(columnName,index) in handleColumnNames"
                    :key="`column-${index}`"
                    :style="{
                        borderTopLeftRadius: props.rounded && index === 0 ? '10px' : '0px',
                        paddingLeft: '10px',
                        textAlign: 'left',
                    }"
                >
                    {{ columnName }}
                </th>
                <th
                    :style="{
                        borderTopRightRadius: props.rounded ? '10px' : '0px',
                    }"
                >
                    &nbsp;
                </th>
            </tr>
        </thead>
        <tbody :style="{
            borderRadius: props.rounded ? '5px' : '0px',
        }">
            <tr
                v-for="(row,index) in createdRows"
                :key="`row-${index}`"
                :style="{
                    backgroundColor: props.striped && index % 2 === 0 ? '#f1f1f1' : 'transparent',
                    border: props.bordered ? '1px solid #f1f1f1' : 'none',
                }"
            >
                <td
                    v-for="(column,i) in row"
                    :key="`body-column-${i}`"
                    :style="{
                        paddingLeft: '10px',
                    }"
                    >
                    {{ handleColumn(column) }}
                </td>
                <td @click.prevent="emits('clicked',index)">
                    <slot name="actions" />
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="12"
                    :style="{
                        textAlign: 'right',
                        paddingRight: '30px',
                        backgroundColor: props.theadColor,
                        color: props.theadTextColor,
                        borderBottomLeftRadius: props.rounded ? '10px' : '0px',
                        borderBottomRightRadius: props.rounded ? '10px' : '0px',
                    }"
                >
                    <slot name="footer" />
                </td>
            </tr>
        </tfoot>
    </table>
    
</template>

<style scoped>
    tbody tr:hover{
        background-color: #57575780 !important;
        color: #fff;
        cursor: default;
    }
</style>
