const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

const getComponents = () => {
  let allComponents = [];

  const types = ["atoms", "molecules"];

  types.forEach((type) => {
    const allFiles = fs
      .readdirSync(path.resolve(`src/${type}`))
      .map((file) => ({
        input: `src/${type}/${file}`,
        output: `lib/${file.slice(0, -4) + "css"}`,
      }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (inputPath, output) => {
  const result = sass.renderSync({
    data: fs.readFileSync(path.resolve(inputPath)).toString(),
    outputStyle: "expanded",
    includePaths: [path.resolve("src")],
    file: inputPath,
  });

  fs.writeFileSync(path.resolve(output), result.css.toString());
};

try {
  fs.mkdirSync(path.resolve("lib"));
} catch (error) {
  console.log('Directory "lib" already exists');
  console.log("Continuing...");
}

compile("src/global.scss", "lib/global.css");

getComponents().forEach((component) => {
  compile(component.input, component.output);
});
