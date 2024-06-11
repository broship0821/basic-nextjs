export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children} &copy; This is Next JS!</div>;
}
