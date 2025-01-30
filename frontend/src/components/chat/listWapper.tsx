import React from "react";

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full border-small py-2 bg-neutral/10 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
