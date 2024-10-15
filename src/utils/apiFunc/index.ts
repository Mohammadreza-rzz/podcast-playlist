import { headers } from "next/headers";

export async function getPlayList(type: string) {
  const host = headers().get("host");
  try {
    const response = await fetch(`http://${host}/api/playList/?type=${type}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${type}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getBookWithId(productId: string) {
  const host = headers().get("host");
  try {
    const response = await fetch(`http://${host}/api/playList/${productId}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${productId}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
