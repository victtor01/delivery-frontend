export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="w-full h-screen bg-gray-50 overflow-auto">{children}</main>;
}
