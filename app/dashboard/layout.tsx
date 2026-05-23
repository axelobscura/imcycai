export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[2fr_10fr] items-center justify-center font-sans min-h-full w-full">
      <div className="bg-red-500 min-h-full w-full">
        <h1>ASISTENTE INTELIGENTE DEL CEMENTO Y EL CONCRETO</h1>
      </div>
      <div className="bg-blue-500">
        {children}
      </div>
    </div>
  );
}
