import { Hammer } from "lucide-react";
export const myStructure2 = {
  name: "Zaposlenici",
  title: "odgg studio",
  icon: Hammer,
  structure: (S) =>
    S.list()
      .title("Base")
      .items([
        S.listItem()
          .title("Zaposlenici")
          .child(
            S.documentList().title("Zaposlenici").filter('_type=="employee"')
          ),
        S.listItem()
          .title("Kategorije")
          .child(
            S.list()
              .title("Kategorije")
              .items([
                S.listItem()
                  .title("Jezici")
                  .child(
                    S.documentList().title("Jezici").filter('_type=="language"')
                  ),
                S.listItem()
                  .title("Područja Rada")
                  .child(
                    S.documentList()
                      .title("Područja Rada")
                      .filter('_type=="areaOfPractice"')
                  ),

                S.listItem()
                  .title("Zvanje")
                  .child(
                    S.documentList()
                      .title("Jezici")
                      .filter('_type=="occupations"')
                  ),
                /*
                //maknuto da netko ne bi mijenjao/updateao
                //prema hr_text se filtriraju zaposlenici na o-nama page-u
                S.listItem()
                  .title("Pozicija u Tvrtki")
                  .child(
                    S.documentList()
                      .title("Pozicija u Tvrtki")
                      .filter('_type=="companyPosition"')
                  ), */
              ])
          ),
      ]),
};
