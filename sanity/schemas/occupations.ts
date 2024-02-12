import { defineField, defineType } from "sanity";
export default defineType({
  name: "occupations",
  title: "Zvanje",
  type: "document",
  fields: [
    defineField({
      name: "hr_text",
      title: "HR - Naziv",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "en_text",
      title: "EN - Naziv",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
