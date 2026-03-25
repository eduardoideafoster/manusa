export const metadata = {
  title: "mIA - Manusa AI Assistant",
  description: "Prototipo del agente conversacional mIA de Manusa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
