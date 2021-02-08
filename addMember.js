const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { readFileSync, writeFileSync } = require("fs");

const firebaseJson = require("./firebase.json");
const firebaseRc = JSON.parse(
  readFileSync(".firebaserc", { encoding: "utf-8" })
);

if(!argv.github) {
  throw new Error('github argument should be present!');
  return;
}

argv.github = argv.github.toLowerCase()

const projectName = "m3-pickly-pg2";
const prefix = "m3-pkpg-";

const createSiteName = (ghUser) => {
  return `${prefix}${ghUser}`;
};

const addMemberToRc = (rcobject, ghuser) => {
  rcobject.targets[projectName].hosting[ghuser] = [createSiteName(ghuser)];
  return rcobject;
};

const addMemberToJson = (jsonobject, ghuser) => {
  const exsits = jsonobject.hosting.find(({ target }) => {
    return target === ghuser;
  });

  if(exsits) {
    console.log('user already exists, no changes made!');
  }

  if (!exsits) {
    let template = { ...jsonobject.hosting[0] };
    template.target = ghuser;
    jsonobject.hosting.push(template);
  }

  return jsonobject;
};

writeFileSync(
  ".firebaserc",
  JSON.stringify(addMemberToRc(firebaseRc, argv.github), null, 2)
);
writeFileSync(
  "firebase.json",
  JSON.stringify(addMemberToJson(firebaseJson, argv.github), null, 2)
);
