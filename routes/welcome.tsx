// routes/welcome.tsx
import { defineRoute } from "$fresh/src/server/defines.ts";
import Head from "@/components/Head.tsx";
import { isGitHubSetup } from "@/utils/github.ts";

function BitcoinWelcome() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl max-w-screen-md mx-auto p-8 space-y-6 shadow-md border border-gray-100 dark:border-gray-800">
      <h1 className="text-3xl font-bold">
        BTC<span className="text-orange-500">.</span>perguth
        <span className="text-orange-500">.</span>de
      </h1>

      <p className="text-gray-700 dark:text-gray-300 text-lg">
        Willkommen auf dem Bitcoin-Informationsportal von perguth.de
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-t-4 border-orange-500">
          <h2 className="text-xl font-semibold mb-3">
            Über dieses Portal
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Diese Seite bietet fundierte Informationen zu Bitcoin, der ersten und bekanntesten Kryptowährung.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-t-4 border-orange-500">
          <h2 className="text-xl font-semibold mb-3">
            Warum Bitcoin?
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 list-disc pl-5 space-y-1">
            <li>Dezentrales Finanzsystem</li>
            <li>Transparente Blockchain-Technologie</li>
            <li>Unabhängig von zentralen Institutionen</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3 mt-8">
        <h2 className="text-xl font-semibold mb-3">Ressourcen</h2>
        <a href="#" className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:translate-x-2 transition-transform">
          <span className="font-medium">Bitcoin Whitepaper</span>
          <span className="text-orange-500">→</span>
        </a>
        <a href="#" className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:translate-x-2 transition-transform">
          <span className="font-medium">Einsteiger-Guide</span>
          <span className="text-orange-500">→</span>
        </a>
        <a href="#" className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:translate-x-2 transition-transform">
          <span className="font-medium">Wallet-Empfehlungen</span>
          <span className="text-orange-500">→</span>
        </a>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="https://bitcoin.org"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehr über Bitcoin
        </a>
        <a
          href="https://perguth.de"
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2 px-6 rounded-md transition-colors text-center"
        >
          Zurück zu perguth.de
        </a>
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-8">
        &copy; {new Date().getFullYear()} perguth.de | Alle Rechte vorbehalten
      </p>
    </div>
  );
}

export default defineRoute((_req, ctx) => {
  return (
    <>
      <Head title="Bitcoin Portal | perguth.de" href={ctx.url.href} />
      <main className="flex-1 flex justify-center items-center py-12 px-4 bg-gray-100 dark:bg-gray-950 min-h-screen">
        {/* Wir behalten die GitHub-Setup-Bedingung bei, ersetzen aber die Komponente */}
        {isGitHubSetup() ? <BitcoinWelcome /> : <BitcoinWelcome />}
      </main>
    </>
  );
});
