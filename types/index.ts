export type TLocaleLang = "en" | "hr";

export interface IDualLangTextObject {
  hr_text: string;
  en_text: string;
}

export interface IEmployeeData {
  _id: string;
  name: string;
  surname: string;
  mainImage: {
    asset: ObjectConstructor[];
    _type: string;
  };
  educations: IDualLangTextObject[] | null;
  slug: { current: string; _type: string };
  email: string | null;
  companyPosition: IDualLangTextObject;
  occupation: IDualLangTextObject;
  areaOfPractices: IDualLangTextObject[] | null;
  proffesionalConferences: IDualLangTextObject[] | null;
  articles: IDualLangTextObject[] | null;
  memberships: IDualLangTextObject[] | null;
  languages: { hr_title: string; en_title: string }[] | null;
  bio: any | null;
}
