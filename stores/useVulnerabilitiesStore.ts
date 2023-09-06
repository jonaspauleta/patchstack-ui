import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { VulnerabilityRequest } from "~/models/VulnerabilityRequest";

export const useVulnerabilitiesStore = defineStore("vulnerabilities", () => {
  const index = async () => {
    return await useApiFetch("/api/vulnerabilities");
  };

  const show = async (vulnerabilityId: number) => {
    return await useApiFetch(`/api/vulnerabilities/${vulnerabilityId}`);
  };

  const store = async (vulnerability: VulnerabilityRequest) => {
    return await useApiFetch("/api/vulnerabilities/", {
      method: "POST",
      body: vulnerability,
    });
  };

  const update = async (
    vulnerabilityId: number,
    vulnerability: VulnerabilityRequest,
  ) => {
    return await useApiFetch(`/api/vulnerabilities/${vulnerabilityId}`, {
      method: "PUT",
      body: vulnerability,
    });
  };

  const destroy = async (vulnerabilityId: number) => {
    return await useApiFetch(`/api/vulnerabilities/${vulnerabilityId}`, {
      method: "DELETE",
    });
  };

  return {
    index,
    show,
    store,
    update,
    destroy,
  };
});
