import Menu from "@/app/components/menu";
import TopBar from "@/app/components/topBar";
import Footer from "@/app/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[2fr_10fr] items-center justify-center font-sans min-h-screen w-full">
      <TopBar />
      <div className="min-h-full w-full">
        <Menu />
      </div>
      <div className="min-h-screenw-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
