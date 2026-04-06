import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

        <p className="mt-3 text-slate-600">
          This is a simple dashboard page.
        </p>

        <Link
          href="/login"
          className="mt-6 inline-block rounded-xl bg-slate-900 px-4 py-3 text-white hover:bg-slate-700"
        >
          Back to Login
        </Link>
      </div>
    </main>
  );
}