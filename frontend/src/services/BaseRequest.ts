import axios from "axios";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface BaseRequestParams {
  method: string;
  url?: string;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

export async function BaseRequest({
  method, url, setIsLoading
}: BaseRequestParams) {
  try {
    if (setIsLoading) setIsLoading(true);

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios({
      method,
      url,
      headers,
    });
    
    return response;
  } catch (error) {
    toast.error("Ocorreu um erro ao fazer a requisição.",{
      toastId:"Error"
    })
    throw error;
  } finally {
    if (setIsLoading) setIsLoading(false);
  }
}
