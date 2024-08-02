import { Card } from "~/components/ui/card";
import { api } from "~/trpc/server";

export default async function Healthcheck() {
  const healthcheck = await api.healthcheck.listHealthchecks();

  void api.healthcheck.listHealthchecks.prefetch();

  return (
    <main className="flex min-h-[48.0rem] flex-col">
      <section className="container grid grid-cols-2 items-center justify-center gap-12 px-4 py-16 lg:grid-cols-3 xl:grid-cols-4">
        {healthcheck.map((healthcheck) => (
          <Card
            key={healthcheck.id}
            className={`${healthcheck.value >= healthcheck.threshold ? "bg-red-600 dark:bg-red-800" : "bg-slate-600 dark:bg-slate-800"}`}
          >
            <div className="flex flex-row flex-wrap items-center gap-4 p-4 pe-6">
              <div className="flex-1 flex-col gap-6">
                <h2 className="text-2xl font-bold">{healthcheck.name}</h2>
                <p className="text-md font-light">{healthcheck.description}</p>
              </div>
              <span className="text-xl font-medium">{healthcheck.value}</span>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
