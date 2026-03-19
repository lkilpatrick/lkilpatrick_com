"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VideoRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/content#presentations"); }, [router]);
  return null;
}
