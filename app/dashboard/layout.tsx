import Menu from "@/app/components/menu";
import TopBar from "@/app/components/topBar";
import Footer from "@/app/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[50px_10fr] bg-img items-center justify-center font-sans min-h-screen w-full">
      <TopBar />
      <div className="relative z-50 min-h-full w-full overflow-visible">
        <Menu />
      </div>
      <div className="min-h-screenw-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
