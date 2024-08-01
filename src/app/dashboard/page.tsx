import { Card } from "~/components/ui/card";
import { api } from "~/trpc/server";

export default async function Healthcheck() {
  const healthcheck = await api.healthcheck.listHealthchecks();

  void api.healthcheck.listHealthchecks.prefetch();

  return (
    <main className="flex min-h-[48.0rem] flex-col items-center justify-center">
      <section className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {healthcheck.map((healthcheck) => (
          <Card
            key={healthcheck.id}
            className={`p-4 ${healthcheck.value >= healthcheck.threshold ? "bg-red-600 dark:bg-red-800" : "bg-slate-600 dark:bg-slate-800"}`}
          >
            <h2 className="text-2xl font-bold">{healthcheck.name}</h2>
            <p>{healthcheck.description}</p>
            <p>{healthcheck.value}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
