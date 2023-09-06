import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { VulnerabilityRequest } from "~/models/VulnerabilityRequest";
import { VulnerabilityResponse } from "~/models/VulnerabilityResponse";

export const useAuthStore = defineStore("vulnerabilities", () => {
  const index = async () => {
    const { data, error } = await useApiFetch("/api/vulnerabilities");

    return {
      data: data as VulnerabilityResponse[],
      error,
    };
  };

  const show = async (vulnerabilityId: number) => {
    const { data, error } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}`,
    );

    return {
      data: data as VulnerabilityResponse,
      error,
    };
  };

  const store = async (vulnerability: VulnerabilityRequest) => {
    const { data, error } = await useApiFetch("/api/vulnerabilities/", {
      method: "POST",
      body: vulnerability,
    });

    return {
      data: data as VulnerabilityResponse,
      error,
    };
  };

  const update = async (
    vulnerabilityId: number,
    vulnerability: VulnerabilityRequest,
  ) => {
    const { data, error } = await useApiFetch(
      `/api/vulnerabilities/${vulnerabilityId}`,
      {
        method: "PUT",
        body: vulnerability,
      },
    );

    return {
      data: data as VulnerabilityResponse,
      error,
    };
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
