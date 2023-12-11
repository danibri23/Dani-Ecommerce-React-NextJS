import NavBar from "@/components/nabvar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header>
      <NavBar />
      {children}
    </header>
  );
}