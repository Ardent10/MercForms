type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type GlobalApiCallHelperProps = {
  api: string;
  method?: HttpMethod;
  body?: any;
  headers?: Record<string, string>;
};

const baseURL =
  process.env.REACT_PUBLIC_API_BASE_URL !== undefined
    ? process.env.REACT_PUBLIC_API_BASE_URL
    : "http://localhost:5000/api";

export const globalApiCallHelper = async ({
  api,
  method,
  body = null,
  headers = {},
}: GlobalApiCallHelperProps) => {
  try {
    const response = await fetch(`${baseURL}${api}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("ERROR", error);
  }
};
