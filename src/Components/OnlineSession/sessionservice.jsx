import API_BASE from "../api";

export async function bookSession(formData) {
  const res = await fetch(`${API_BASE}/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}
