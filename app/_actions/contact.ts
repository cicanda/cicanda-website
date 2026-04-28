"use server";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const REQUIRED = ["name", "email", "message"] as const;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    return {
      status: "error",
      message:
        "The contact form isn't configured yet. Please email info@cicanda.com directly.",
    };
  }

  for (const field of REQUIRED) {
    const value = formData.get(field);
    if (typeof value !== "string" || value.trim() === "") {
      return { status: "error", message: "Please fill in every required field." };
    }
  }

  const payload = {
    access_key: key,
    subject: "New CICANDA contact form submission",
    from_name: "CICANDA Website",
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service") || "Not specified",
    message: formData.get("message"),
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return {
        status: "error",
        message: "We couldn't send your message. Please try again in a moment.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "We couldn't send your message. Please check your connection and try again.",
    };
  }
}
