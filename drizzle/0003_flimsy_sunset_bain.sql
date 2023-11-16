CREATE TABLE IF NOT EXISTS "amogus" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "date" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "todos" DROP COLUMN IF EXISTS "status";