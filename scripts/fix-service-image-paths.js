const fs = require("fs");

const map = {
  ivf: "service-ivf",
  iui: "service-iui",
  "follicular-ultrasound": "service-ultrasound",
  "infertility-tests": "service-infertility-tests",
  "male-infertility": "service-male-infertility",
  "mini-ivf": "service-mini-ivf",
  laparoscopy: "service-laparoscopy",
  "low-amh": "service-low-amh",
  cryopreservation: "service-cryopreservation",
  era: "service-era",
  "donor-gametes": "service-donor-gametes",
  pgt: "service-pgt",
};

const p = "data/site.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));

for (const item of d.ourServices.items) {
  const base = map[item.id];
  if (!base) throw new Error(`Missing map for ${item.id}`);
  item.image = `/images/services/${base}-soft.png`;
}

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log(d.ourServices.items.map((i) => i.image).join("\n"));
