import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
