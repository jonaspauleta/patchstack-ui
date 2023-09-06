import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { FactorRequest } from "~/models/FactorRequest";

export const useFactorsStore = defineStore("factors", () => {
  const index = async (vulnerabilityId: number) => {
    return await useApiFetch(`/api/vulnerabilities/${vulnerabilityId}/factors`);
  };

  const show = async (vulnerabilityId: number, factorId: number) => {
    return await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors/${factorId}`,
    );
  };

  const store = async (vulnerabilityId: number, factor: FactorRequest) => {
    return await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors`,
      {
        method: "POST",
        body: factor,
      },
    );
  };

  const update = async (
    vulnerabilityId: number,
    factorId: number,
    factor: FactorRequest,
  ) => {
    return await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors/${factorId}`,
      {
        method: "PUT",
        body: factor,
      },
    );
  };

  const destroy = async (vulnerabilityId: number, factorId: number) => {
    return await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors/${factorId}`,
      {
        method: "DELETE",
      },
    );
  };

  return {
    index,
    show,
    store,
    update,
    destroy,
  };
});
