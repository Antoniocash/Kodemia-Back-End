import fs from "fs";

const deleteKoderById = (id) => {
  fs.readFile(
    "/home/antnio/back-end/sesion-4-CRUD/koders.json",
    "utf8",
    (error, data) => {
      if (error) throw error;
      let koderList = JSON.parse(data);
      koderList["koders"].forEach((koder, index) => {
        if (id === koder.id) {
          koderList["koders"].splice(index, 1);
        }
      });
      fs.writeFile("/home/antnio/back-end/sesion-4-CRUD/koders.json", JSON.stringify(data, null, "  "), (error) => {
        if (error) throw error;
        console.log("Koder eliminado");
      });
    }
  );
};

deleteKoderById(3);
