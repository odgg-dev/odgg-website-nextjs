import { defineField, defineType } from "sanity";
export default defineType({
  name: "areaOfPractice",
  title: "Area Of Practice",
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
