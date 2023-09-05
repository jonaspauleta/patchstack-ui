import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { FactorRequest } from "~/models/FactorRequest";
import { FactorResponse } from "~/models/FactorResponse";

export const useAuthStore = defineStore("factors", () => {
  const index = async (vulnerabilityId: number) => {
    const { data } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors`,
    );
    return data as FactorResponse[];
  };

  const show = async (vulnerabilityId: number, factorId: number) => {
    const { data } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors/${factorId}`,
    );
    return data as FactorResponse;
  };

  const store = async (vulnerabilityId: number, factor: FactorRequest) => {
    const { data } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors`,
      factor,
    );
    return data as FactorResponse;
  };

  const update = async (
    vulnerabilityId: number,
    factorId: number,
    factor: FactorRequest,
  ) => {
    const { data } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors/${factorId}`,
      factor,
    );
    return data as FactorResponse;
  };

  const destroy = async (vulnerabilityId: number, factorId: number) => {
    const { data } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors/${factorId}`,
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
