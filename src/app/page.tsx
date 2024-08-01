import Link from "next/link";

import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
    <main className="flex min-h-[48.0rem] flex-col items-center justify-center">
      <section className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-slate-600 dark:text-slate-400">
            Healthcheck
          </span>{" "}
          Dashboard
        </h1>
        <p className="text-center text-2xl font-light">
          An example dashboard to monitor the health of a service.
        </p>
      </section>
      <section className="flex flex-col items-center gap-2">
        <Link href="/dashboard">
          <Button variant="default" size="lg">
            Dashboard
          </Button>
        </Link>
      </section>
    </main>
  );
}
