import fs from "fs";

function readKodersAndFilter() {
  fs.readFile(
    "/home/antnio/back-end/sesion-4-CRUD/koders.json",
    "utf8",
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        const koderList = JSON.parse(data);
        console.log(koderList);
        const filteredByAge = koderList.filter(koder => {
            return koder.age >= 25
        })
      }
    }
  );
}

readKodersAndFilter();
