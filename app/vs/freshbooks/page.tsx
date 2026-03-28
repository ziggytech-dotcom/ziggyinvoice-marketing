import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ZiggyInvoice vs FreshBooks",
};

export default function FreshbooksRedirect() {
  redirect("/vs-freshbooks");
}
