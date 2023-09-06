import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { FactorRequest } from "~/models/FactorRequest";
import { FactorResponse } from "~/models/FactorResponse";

export const useAuthStore = defineStore("factors", () => {
  const index = async (vulnerabilityId: number) => {
    const { data, error } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors`,
    );

    return {
      data: data as FactorResponse[],
      error,
    };
  };

  const show = async (vulnerabilityId: number, factorId: number) => {
    const { data, error } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors/${factorId}`,
    );

    return {
      data: data as FactorResponse,
      error,
    };
  };

  const store = async (vulnerabilityId: number, factor: FactorRequest) => {
    const { data, error } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors`,
      {
        method: "POST",
        body: factor,
      },
    );

    return {
      data: data as FactorResponse,
      error,
    };
  };

  const update = async (
    vulnerabilityId: number,
    factorId: number,
    factor: FactorRequest,
  ) => {
    const { data, error } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}/factors/${factorId}`,
      {
        method: "PUT",
        body: factor,
      },
    );

    return {
      data: data as FactorResponse,
      error,
    };
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
