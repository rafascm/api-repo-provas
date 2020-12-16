CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"id_category" bigint NOT NULL,
	"id_subject" bigint NOT NULL,
	"id_professor" bigint NOT NULL,
	"url" varchar(255) NOT NULL,
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "subjects_professors" (
  "id" serial NOT NULL,
	"id_subject" bigint NOT NULL,
	"id_professor" bigint NOT NULL,
  CONSTRAINT "subjects_professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("id_category") REFERENCES "categories"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("id_subject") REFERENCES "subjects"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk2" FOREIGN KEY ("id_professor") REFERENCES "professors"("id");

ALTER TABLE "subjects_professors" ADD CONSTRAINT "subjects_professors_fk0" FOREIGN KEY ("id_subject") REFERENCES "subjects"("id");
ALTER TABLE "subjects_professors" ADD CONSTRAINT "subjects_professors_fk1" FOREIGN KEY ("id_professor") REFERENCES "professors"("id");

