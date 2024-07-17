import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/utils/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UserContextProvider } from "@/context/userContext";
import userGet from "@/actions/getUser";

export const metadata: Metadata = {
  title: "Gods Next App",
  description: "Social media for dogs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGet();

  return (
    <html lang="en">
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
