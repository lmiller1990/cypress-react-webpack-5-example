const cypress = require('cypress')

async function main() {
  let result = await cypress.run({
    testingType: "component",
    testFiles: "./**/*.spec.jsx",
    reporter: "junit",
    reporterOptions: "mochaFile=tests-component.[hash].xml,toConsole=true",
  });

  console.log(result);

  if (result && result.status === "failed") {
    throw new Error(result.message);
  }
}

main()

