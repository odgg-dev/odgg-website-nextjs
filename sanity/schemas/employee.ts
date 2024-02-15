/* 
    rola - referenca na rola schemu
    slika-slika
    ime prezime- string
    obrazovanje- lista sttringova
    podrucje prakse-lista referenca na podrucje prakse 
    jezici - lista referenca na jezike
    clanstva -lista stringova
    clanci - lista stringova
    strucni skupovi -lista stringova
    kontakt - string 

*/
import { defineField, defineType } from "sanity";
export default defineType({
  name: "employee",
  title: "Zaposlenik",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ime",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "surname",
      title: "Prezime",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug*",
      type: "slug",
      options: {
        source: (doc, context) => `${doc.name}-${doc.surname}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Adresa",
      type: "string",
    }),
    defineField({
      name: "companyPosition",
      title: "Pozicija u Tvrtki",
      type: "reference",
      to: { type: "companyPosition" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "occupation",
      title: "Zvanje",
      type: "reference",
      to: { type: "occupations" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Slika",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "educations",
      title: "Obrazovanje",
      type: "array",
      of: [
        {
          name: "education",
          title: "Obrazovanje",
          type: "document",
          fields: [
            defineField({
              name: "hr_text",
              title: "HR - Naziv",
              type: "text",
            }),
            defineField({
              name: "en_text",
              title: "EN - Naziv",
              type: "text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "areaOfPractices",
      title: "Pordručja Prakse",
      type: "array",
      of: [{ type: "reference", to: { type: "areaOfPractice" } }],
    }),
    defineField({
      name: "languages",
      title: "Jezici",
      type: "array",
      of: [{ type: "reference", to: { type: "language" } }],
    }),
    defineField({
      name: "memberships",
      title: "Članstva",
      type: "array",
      of: [
        {
          name: "membership",
          title: "Članstvo",
          type: "document",
          fields: [
            defineField({
              name: "hr_text",
              title: "HR - Naziv",
              type: "text",
            }),
            defineField({
              name: "en_text",
              title: "EN - Naziv",
              type: "text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "articles",
      title: "Članci",
      type: "array",
      of: [
        {
          name: "article",
          title: "Članak",
          type: "document",
          fields: [
            defineField({
              name: "hr_text",
              title: "HR - Text",
              type: "text",
            }),
            defineField({
              name: "en_text",
              title: "EN - Text",
              type: "text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "proffesionalConferences",
      title: "Stručni Skupovi",
      type: "array",
      of: [
        {
          name: "proffesionalConference",
          title: "Stručni Skup",
          type: "document",
          fields: [
            defineField({
              name: "hr_text",
              title: "HR - Naziv",
              type: "text",
            }),
            defineField({
              name: "en_text",
              title: "EN - Naziv",
              type: "text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      name: "name",
      surname: "surname",
      media: "mainImage",
    },
    prepare(selection) {
      const { name, surname } = selection;
      return {
        ...selection,
        title: `${surname} ${name}`,
      };
    },
  },
});
export interface IEmployeeData {
  _id: string;
  name: string;
  surname: string;
  educations:
    | {
        hr_text: string;
        en_text: string;
      }[]
    | null;
  slug: { current: string; _type: string };
  email: string | null;
  companyPosition: { hr_text: string; en_text: string };
  occupation: { hr_text: string; en_text: string };
  areaOfPractices: { hr_text: string; en_text: string }[] | null;
  bio: any | null;
}
