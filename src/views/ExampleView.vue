<script setup lang="ts">
  import { ref,computed } from 'vue';
  import Table from '@/components/Table.vue';

  const data = ref([
    {
        id: 1,
        name:'Christian',
        age: 35,
        created_at: '2023/08/24',
        email: 'contacto@christianpasinrey.es'
    },
    {
        id: 2,
        name:'Raul',
        age: 38,
        created_at: '2023/07/15',
        email: 'raul@example.org',
    },
    {
        id: 3,
        name:'Laura',
        age: null,
        created_at: '2023/05/1',
        email: 'laura@example.org',
    },
    {
        id: 4,
        name:'Hermenegildo',
        age: 38,
        created_at: '2023/01/6',
        email: 'hermes@example.org',
    },
    {
        id: 5,
        name:'Elisa',
        age: 28,
        created_at: '2023/04/3',
        email: 'elisa@example.org',
    },
    {
        id: 6,
        name:'Lucas',
        age: 25,
        created_at: '2023/01/01',
        email: null,
    },
  ]);

  const clickedRow = ref(null);
  const dialogOpened = ref(false);

  const actionClicked = (row) => {
    clickedRow.value = row;
  };
  
  const editData = () => {
    setTimeout(() => {
      console.log(`edit ${clickedRow.value}?`)
    }, 100);
  }

  const handleIndexData = computed(()=>{
    return clickedRow.value === null ? 
    null :
    data.value[clickedRow.value];
  });

  const confirmDeleteData = () => {
    setTimeout(() => {
     console.log(`delete ${handleIndexData.value.name}?`);
      let dialog = document.getElementById('delete-modal');
      console.log(dialog);
      dialog.showModal();
      dialogOpened.value = true;
    }, 100);
  }
  
  const submitDeleteData = () => {
      data.value.splice(clickedRow.value, 1);
      let dialog = document.getElementById('delete-modal');
      dialogOpened.value = false;
      dialog.close();
      clickedRow.value = null;
  }

  const cancelDeleteData = () => {
    let dialog = document.getElementById('delete-modal');
    dialog.close();
    dialogOpened.value = false;
    clickedRow.value = null;
  }
</script>
<template>
  <div style="width:100%">
    <Table
      :data="data"
      :columns="[
        {
          key: 'id',
          label: 'ID'
        },
        {
          key: 'name',
          label: 'Nombre'
        },
        {
          key: 'age',
          label: 'Edad'
        },
        {
          key: 'email',
          label: 'Email'
        }
      ]"
      bordered
      striped
      rounded
      theadColor="blue"
      theadTextColor="white"
      @clicked="actionClicked"
    >
        <template #actions>
          <button @click.prevent="editData">Edit</button>
          <button @click.prevent="confirmDeleteData">Delete</button>
        </template>
        <template #footer>
          Numero de registros: {{data.length}}
        </template>
    </Table>

    <div class="dialog-background" v-if="dialogOpened"></div>
    <dialog v-if="clickedRow != null" id="delete-modal">
      <div class="dialog-message">
        <p>¿Estás seguro de que quieres eliminar a {{handleIndexData.name}}?</p>
      </div>
      <div class="dialog-actions">
        <button @click.prevent="submitDeleteData">Sí</button>
        <button @click.prevent="cancelDeleteData">No</button>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
  dialog{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .dialog-message{
    margin-right: 20px;
  }

  .dialog-actions{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .dialog-background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
    background-color: rgba(0,0,0,0.3);
    z-index: 999;
  }

  
</style>
