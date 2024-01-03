export async function addMessageFetcher(url: string, { arg }: { arg: string }) {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      message: arg,
    }),
  });
}
