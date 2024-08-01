CREATE SCHEMA IF NOT EXISTS "healthcheckdashboard";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "healthcheckdashboard"."healthcheck" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" varchar,
	"value" varchar,
	"threshold" varchar,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "healthcheckdashboard"."healthcheck" USING btree ("name");