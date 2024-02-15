import { SanityDocument } from "next-sanity";
import { client } from "./client";
import { IEmployeeData } from "@/types";

export const getEmployees = async (): Promise<IEmployeeData[]> => {
  let groq = `*[_type == "employee" ]{
      _id, name,surname, slug,email,companyPosition->{hr_text,en_text},
      occupation->{hr_text,en_text},mainImage,educations,areaOfPractices[]->{hr_text,en_text},
      languages[]->{hr_title,en_title},memberships,articles,proffesionalConferences,bio
    }`;

  //in groq options are asc or desc
  groq += ` | order(publishedAt desc)`;
  return client.fetch(
    groq,
    {},
    {
      next: {
        revalidate: 120,
      },
    }
  );
};
