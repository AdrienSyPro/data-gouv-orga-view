<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type Organization from '@/models/members';
import { transformOrganization } from '@/services/dataTransformer';
import { formatDate } from '@/utils/date';

const route = useRoute();
const orgaId = route.params.id;
const organization = ref<Organization>(null);

onMounted(async () => {
  const data: Response = await fetch(`https://www.data.gouv.fr/api/1/organizations/${orgaId}`);
  const dataJson = await data.json();

  organization.value = dataJson;
})
</script>


<template>
  <div  class="detail-container">
    <div class="flex">
      <img class="rounded-image" :src="organization?.logo" />
      <h1>{{ organization?.name ?? "" }}</h1>
    </div>
    <div class="card">
      <p><strong>Acronyme:</strong> {{ organization?.acronym }}</p>
      <p><strong>Date de création:</strong> {{ organization?.created_at ? formatDate(organization.created_at) : "" }}</p>
      <p>
        <a :href="organization?.page">Voir la page de l'organisation -></a>
      </p>

      <DataTable :value="organization?.members" tableStyle="min-width: 50rem">
        <Column field="role" header="Rôle">
          <template #body="{ data }">
            <span>{{ data.role }}</span>
          </template>
        </Column>
        <Column field="user" header="Nom et prénom">
          <template #body="{ data }">
            <span>{{ data.user.last_name }} {{ data.user.first_name }}</span>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<style>
.flex {
  display: flex;
  align-items: center;
}
.rounded-image {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Makes the image a perfect circle */
  object-fit: cover; /* Ensures the image covers the entire area */
}

</style>
