import { defineStore } from 'pinia';
import { ref } from "vue";
import type { Client } from '@/clients/interfaces/client';

export const useClientsStore = defineStore('clients', () => {

    const currentPage = ref<number>(0);
    const totalPages = ref<number>(5);
    const clients = ref<Client[]>();

    return {
        //state:
        currentPage,
        totalPages,
        clients,

        //getters:

        //actions:
        setClients( newClients: Client[] ) {
            clients.value = newClients;
        },
        setPage( page: number ) {
            if (! (0<=page && page<=totalPages.value) ) return;
            currentPage.value = page;
        },
    }
});