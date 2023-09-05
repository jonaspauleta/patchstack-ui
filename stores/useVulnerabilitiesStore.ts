import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { VulnerabilityRequest, VulnerabilityResponse } from "~/models";

export const useAuthStore = defineStore("vulnerabilities", () => {
  const index = async () => {
    const { data } = await useApiFetch("/api/vulnerabilities");
    return data as VulnerabilityResponse[];
  };

  const show = async (vulnerability_id: number) => {
    const { data } = await useApiFetch(`/api/vulnerabilities/${vulnerability_id}`);
    return data as VulnerabilityResponse;
  }

  const store = async (vulnerability: VulnerabilityRequest) => {
    const { data } = await useApiFetch("/api/vulnerabilities/", vulnerability);
    return data as VulnerabilityResponse;
  }

  const update = async (vulnerability_id: number, vulnerability: VulnerabilityRequest) => {
    const { data } = await useApiFetch(`/api/vulnerabilities/${vulnerability_id}`, vulnerability);
    return data as VulnerabilityResponse;
  }

  const destroy = async (vulnerability_id: number) => {
    const { data } = await useApiFetch(`/api/vulnerabilities/${vulnerability_id}`);
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
