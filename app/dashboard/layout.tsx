import Menu from "@/app/components/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[2fr_10fr] items-center justify-center font-sans min-h-screen w-full">
      <div className="min-h-full">
        <Menu />
      </div>
      <div className="min-h-full">
        {children}
      </div>
    </div>
  );
}
