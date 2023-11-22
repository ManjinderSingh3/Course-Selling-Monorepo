export default function AuthorizationLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
}
