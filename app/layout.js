import "./globals.css";

export const metadata = {
  title: "Jazverse Studio",
  description: "Prompt-led product studio for shaping immersive AI experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
