import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "todo list",
  description: "Generated by soom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          <li>
            <Link href="/read/1">html</Link>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="delete"></input>
          </li>
        </ul>
      </body>
    </html>
  );
}
