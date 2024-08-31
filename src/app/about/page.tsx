import db from "@/utils/db";
import React from "react";

export default async function AboutPage() {
  const profile = await db.testProfile.create;
  return <div>AboutPage</div>;
}
