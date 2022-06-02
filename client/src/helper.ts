export const makeReq = async <T = any>(
  url: string,
  method: RequestInit["method"],
  body?: any
): Promise<T> => {
  console.log(JSON.stringify(body));
  let response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result);
  return result;
};
