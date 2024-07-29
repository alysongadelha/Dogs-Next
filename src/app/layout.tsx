import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/utils/fonts";
import { UserContextProvider } from "@/context/user-context";
import userGet from "@/actions/get-user";
import { Header } from "@/context/components/header";
import { Footer } from "@/context/components/footer";

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
