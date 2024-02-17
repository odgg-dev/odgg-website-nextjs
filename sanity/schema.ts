import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";

import language from "./schemas/language";
import employee from "./schemas/employee";
import areaOfPractice from "./schemas/areaOfPractice";
import occupations from "./schemas/occupations";
import companyPosition from "./schemas/companyPosition";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    language,
    employee,
    areaOfPractice,
    occupations,
    companyPosition,
  ],
};
