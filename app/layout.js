import "./globals.css";

export const metadata = {
  title: "React Projects",
  description: "React Projects using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
