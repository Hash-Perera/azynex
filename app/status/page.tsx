import Link from "next/link";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF] dark:bg-slate-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          System Status
        </h1>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <span className="font-medium text-slate-900 dark:text-white">
                Website
              </span>
              <span className="px-3 py-1 bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                Maintenance
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="font-medium text-slate-900 dark:text-white">
                API Services
              </span>
              <span className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="font-medium text-slate-900 dark:text-white">
                Database
              </span>
              <span className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Operational
              </span>
            </div>
          </div>
          {/* <p className="mt-6 text-slate-600 dark:text-slate-300">
            Estimated completion: 2 hours
          </p> */}
        </div>

        <Link
          href="/"
          className="inline-block mt-6 text-[#2563EB] hover:text-[#6366F1] font-medium"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
