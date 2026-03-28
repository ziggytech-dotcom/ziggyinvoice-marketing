import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ZiggyInvoice vs Wave",
};

export default function WaveRedirect() {
  redirect("/vs-wave");
}
