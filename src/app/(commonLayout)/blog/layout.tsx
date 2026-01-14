export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>This is blog layout</h1>
      {children}
    </div>
  );
}
