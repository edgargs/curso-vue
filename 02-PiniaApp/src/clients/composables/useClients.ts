import type {Client} from "@/clients/interfaces/client";
import clientsApi from "@/api/clients-api";
import { useQuery } from '@tanstack/vue-query';
import {useClientsStore} from "@/store/clients";
import {storeToRefs} from "pinia";
import {computed, watch} from 'vue';

const getClients = async( page:number ):Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
    return data;
}

const useClients = () => {

    const store = useClientsStore();
    const {  currentPage, totalPages,clients } = storeToRefs(store);

    const { isLoading, data } = useQuery(
            ['clients?page=', currentPage],
            () => getClients( currentPage.value )
    );

    watch( data, clients => {
        if( clients )
            store.setClients(clients);
    })

    return {
        isLoading,
        currentPage,
        totalPages,
        clients,

        getPage( page: number) {
            store.setPage( page );
        },

    }
}

export default useClients;