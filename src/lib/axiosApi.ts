import axios, { type AxiosRequestConfig } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const axiosApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await axiosApi.get<T>(url, config);
  return res.data;
};

export const postRequest = async <T>(
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await axiosApi.post<T>(url, data, config);
  return res.data;
};
export const postFormDataRequest = async <T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  const formData = objectToFormData(data || {});

  const res = await axiosApi.post<T>(url, formData, {
    ...config,
    headers: {
      ...config?.headers,
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

function objectToFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();

  const buildFormData = (data: any, parentKey?: string) => {
    if (data && typeof data === "object" && !(data instanceof File)) {
      Object.keys(data).forEach((key) => {
        buildFormData(data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? "" : data;
      formData.append(
        parentKey || "",
        typeof value === "number" ? value : value.toString()
      );
    }
  };
  buildFormData(obj);
  return formData;
}

export const putRequest = async <T>(
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await axiosApi.put<T>(url, data, config);
  return res.data;
};

export const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await axiosApi.delete<T>(url, config);
  return res.data;
};
