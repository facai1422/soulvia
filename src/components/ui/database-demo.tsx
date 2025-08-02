"use client";

import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

export const DatabaseDemo = () => {
  return (
    <div className="p-4 rounded-xl bg-accent/20 w-full">
      <DatabaseWithRestApi 
        title="Soulvia API - Secure Anonymous Communication"
        circleText="API"
        badgeTexts={{
          first: "USERS",
          second: "CHAT", 
          third: "GROUPS",
          fourth: "DELETE"
        }}
        buttonTexts={{
          first: "Soulvia",
          second: "v3_secure"
        }}
        lightColor="#0ea5e9"
      />
    </div>
  );
};