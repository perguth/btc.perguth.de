// routes/welcome.tsx
import { defineRoute } from "$fresh/src/server/defines.ts";
import Head from "@/components/Head.tsx";
import { isGitHubSetup } from "@/utils/github.ts";

function BitcoinWelcome() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-xl max-w-screen-md mx-auto p-10 space-y-8 shadow-lg border border-gray-700">
      <h1 className="text-4xl font-extrabold text-center">
        BTC<span className="text-orange-500">.</span>perguth
        <span className="text-orange-500">.</span>de
      </h1>

      <p className="text-gray-300 text-lg text-center">
        Willkommen auf dem Bitcoin-Informationsportal von perguth.de
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-orange-500 shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Über dieses Portal
          </h2>
          <p className="text-gray-400">
            Diese Seite bietet fundierte Informationen zu Bitcoin, der ersten und bekanntesten Kryptowährung.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-orange-500 shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Warum Bitcoin?
          </h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Dezentrales Finanzsystem</li>
            <li>Transparente Blockchain-Technologie</li>
            <li>Unabhängig von zentralen Institutionen</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4 mt-10">
        <h2 className="text-2xl font-bold text-center">Ressourcen</h2>
        <a
          href="https://www.youtube.com/watch?v=sl2GDcNL6ak&list=PLfI4vuI6krFsJg7ymeujjfsggAq5JWjzN"
          className="flex justify-between items-center bg-gray-800 p-5 rounded-lg hover:scale-105 transition-transform shadow-md"
        >
          <span className="font-medium">Hintergrundinformationen</span>
          <span className="text-orange-500">→</span>
        </a>
        <a
          href="https://www.youtube.com/watch?v=cfkYr0sHowI&pp=ygUQYml0Y29pbiBlcmtsYWVydA%3D%3D"
          className="flex justify-between items-center bg-gray-800 p-5 rounded-lg hover:scale-105 transition-transform shadow-md"
        >
          <span className="font-medium">Bitcoin für Anfänger</span>
          <span className="text-orange-500">→</span>
        </a>
        <a
          href="https://www.youtube.com/c/myetherwallet"
          className="flex justify-between items-center bg-gray-800 p-5 rounded-lg hover:scale-105 transition-transform shadow-md"
        >
          <span className="font-medium">Wallet-Empfehlungen</span>
          <span className="text-orange-500">→</span>
        </a>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-6">
        <a
          href="https://bitcoin.org"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors text-center shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehr über Bitcoin
        </a>
        <a
          href="https://perguth.de"
          className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-md transition-colors text-center shadow-md"
        >
          Zurück zu perguth.de
        </a>
      </div>

      <p className="text-gray-500 text-sm text-center mt-10">
        &copy; {new Date().getFullYear()} perguth.de | Alle Rechte vorbehalten
      </p>
    </div>
  );
}

export default defineRoute((_req, ctx) => {
  return (
    <>
      <Head title="Bitcoin Portal | perguth.de" href={ctx.url.href} />
      <main className="flex-1 flex justify-center items-center py-16 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen">
        {/* Wir behalten die GitHub-Setup-Bedingung bei, ersetzen aber die Komponente */}
        {isGitHubSetup() ? <BitcoinWelcome /> : <BitcoinWelcome />}
      </main>
    </>
  );
});
