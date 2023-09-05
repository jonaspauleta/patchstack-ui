import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { VulnerabilityRequest } from "~/models/VulnerabilityRequest";
import { VulnerabilityResponse } from "~/models/VulnerabilityResponse";

export const useAuthStore = defineStore("vulnerabilities", () => {
  const index = async () => {
    const { data } = await useApiFetch("/api/vulnerabilities");
    return data as VulnerabilityResponse[];
  };

  const show = async (vulnerabilityId: number) => {
    const { data } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}`,
    );

    return data as VulnerabilityResponse;
  };

  const store = async (vulnerability: VulnerabilityRequest) => {
    const { data } = await useApiFetch("/api/vulnerabilities/", vulnerability);

    return data as VulnerabilityResponse;
  };

  const update = async (
    vulnerabilityId: number,
    vulnerability: VulnerabilityRequest,
  ) => {
    const { data } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}`,
      vulnerability,
    );

    return data as VulnerabilityResponse;
  };

  const destroy = async (vulnerabilityId: number) => {
    const { data } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}`,
    );

    return data;
  };

  return {
    index,
    show,
    store,
    update,
    destroy,
  };
});
