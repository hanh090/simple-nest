import { useCallback, useEffect, useState } from "react";
import * as httpService from "../helper/http";

export interface UseApiProps<FetchDataPayload> {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "PATCH";
  autoFetch?: boolean;
  autoFetchPayload?: FetchDataPayload;
}
export interface UseApiResponse<FetchDataPayload, ApiResult> {
  loading: boolean;
  data: ApiResult | undefined;
  fetchData: (payload?: FetchDataPayload) => Promise<ApiResult | undefined>;
}

const useApi = <ApiResult, FetchDataPayload = any>({
  endpoint,
  autoFetch = false,
  autoFetchPayload = {} as FetchDataPayload,
}: UseApiProps<FetchDataPayload>): UseApiResponse<
  FetchDataPayload,
  ApiResult
> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ApiResult>();

  const fetchData = useCallback(
    async (payload?: FetchDataPayload): Promise<ApiResult | undefined> => {
      setLoading(true);

      const response = await httpService.post(endpoint, payload);
      if (!response || !response.data) {
        setData(undefined);
        setLoading(false);
        return data;
      }

      if (response.data.success) {
        setData(response.data.result || true);
      }

      setLoading(false);
      return response.data.result || true;
    },
    // eslint-disable-next-line
    []
  );
  useEffect(() => {
    if (autoFetch) {
      fetchData(autoFetchPayload);
    }
    // eslint-disable-next-line
  }, [autoFetch]);

  return {
    loading,
    data,
    fetchData,
  };
};

export default useApi;
