import React from 'react';

export const metadata = {
  title:
  {
    absolute: "",
    default: "Next.js Tutorial- Profile Layout",
    template: "%s| Next.js",
  },
  description: "Generated by Next.js",
};

export default function ProfileLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}