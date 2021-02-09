const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { readFileSync, writeFileSync } = require("fs");

const firebaseJson = require("./firebase.json");
const firebaseRc = JSON.parse(
  readFileSync(".firebaserc", { encoding: "utf-8" })
);

if (!argv.github) {
  throw new Error("github argument should be present!");
  return;
}

argv.github = argv.github.toLowerCase();

const projectName = "m3-pickly-pg2";
const prefix = "m3-pkpg-";

const createSiteName = (ghUser) => {
  return `${prefix}${ghUser}`;
};

const removeMemberToRc = (rcobject, ghuser) => {
  if (rcobject.targets[projectName].hosting[ghuser]) {
    delete rcobject.targets[projectName].hosting[ghuser];
  } else {
    console.log("removeMemberToRc: user is not exsits, no changes made.");
  }
  return rcobject;
};

const removeMemberToJson = (jsonobject, ghuser) => {
  let exists = false;
  const hosting = jsonobject.hosting.filter(({ target }) => {
    if (target === ghuser) {
      exists = true;
      return false;
    }
    return true;
  });

  if (!exists) {
    console.log("removeMemberToJson: user is not exsits, no changes made.");
  }

  return { ...jsonobject, hosting };
};

writeFileSync(
  ".firebaserc",
  JSON.stringify(removeMemberToRc(firebaseRc, argv.github), null, 2)
);
writeFileSync(
  "firebase.json",
  JSON.stringify(removeMemberToJson(firebaseJson, argv.github), null, 2)
);
