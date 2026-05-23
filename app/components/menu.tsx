import Link from "next/link";

export default function Menu() {
    return (
      <div className="flex justify-center items-center min-h-screen w-full flex-1 flex-col items-center justify-center font-sans">
        <div className="bg-white rounded-lg p-4 w-full">
            <ul>
            <li>
                <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link href="/dashboard">Dashboard</Link>
            </li>
            </ul>
        </div>
      </div>
    );
  }
  