import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { FactorRequest, FacrorResponse } from "~/models";

export const useAuthStore = defineStore("factors", () => {
  const index = async (vulnerability_id: number) => {
    const { data } = await useApiFetch(`/api/vulnerabilities/${vulnerability_id}/factors`);
    return data as FacrorResponse[];
  };

  const show = async (vulnerability_id: number, factor_id: number) => {
    const { data } = await useApiFetch(`/api/vulnerabilities/${vulnerability_id}/factors/${factor_id}`);
    return data as FacrorResponse;
  }

  const store = async (vulnerability_id: number, factor: FactorRequest) => {
    const { data } = await useApiFetch(`/api/vulnerabilities/${vulnerability_id}/factors`, factor);
    return data as FacrorResponse;
  }

  const update = async (vulnerability_id: number, factor_id: number, factor: FactorRequest) => {
    const { data } = await useApiFetch(`/api/vulnerabilities/${vulnerability_id}/factors/${factor_id}`, factor);
    return data as FacrorResponse;
  }

  const destroy = async (vulnerability_id: number, factor_id: number) => {
    const { data } = await useApiFetch(`/api/vulnerabilities/${vulnerability_id}/factors/${factor_id}`);
    return data.statusCode === 200;
  }

  return {
    index,
    show,
    store,
    update,
    destroy,
  };
});
