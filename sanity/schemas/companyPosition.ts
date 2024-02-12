import { defineField, defineType } from "sanity";
export default defineType({
  name: "companyPosition",
  title: "Pozicija u Tvrtki",
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
