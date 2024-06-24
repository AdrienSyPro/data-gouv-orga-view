<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type Organization from '@/models/organization';
import { transformOrganization } from '@/services/dataTransformer';
import { formatDate } from '@/utils/date';

const organizations = ref<Organization[]>([]);

onMounted(async () => {
  const data: Response = await fetch("https://www.data.gouv.fr/api/1/organizations/?page_size=10");
  const dataJson = await data.json();

  organizations.value = dataJson.data.map((organization: Organization) => transformOrganization(organization));
})
</script>


<template>
  <div class="container">
  <div  class="table-container">
    <h1>Organizations</h1>

    <DataTable :value="organizations" tableStyle="min-width: 50rem">
      <Column field="name" header="Name">
        <template #body="{ data }">
          <span>{{ data.name }}</span>
        </template>
      </Column>
      <Column field="acronym" header="Acronym" >
        <template #body="{ data }">
          {{ data.acronym ?? '-' }}
        </template>
      </Column>
      <Column field="created_at" dataType="date" header="Date de création">
        <template #body="{ data }">
          {{ formatDate(data.created_at) }}
        </template>
      </Column>
      <Column field="last_modified" dataType="date" header="Date de modification" >
        <template #body="{ data }">
          {{ formatDate(data.last_modified) }}
        </template>
      </Column>
      <Column field="id" header="Détail">
        <template #body="{ data }">
          <router-link :to="{ name: 'organization-details', params: { id: data.id } }">
            Voir le détail de l'organization ->
          </router-link>
        </template>
      </Column>
    </DataTable>
  </div>
  </div>
</template>
