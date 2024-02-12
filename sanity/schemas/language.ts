import { defineField, defineType } from "sanity";
export default defineType({
  name: "language",
  title: "Language",
  type: "document",
  fields: [
    defineField({
      name: "hr_title",
      title: "HR - Naslov",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "en_title",
      title: "EN - Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
