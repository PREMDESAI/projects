import { Command } from "commander";

export const runCli = () => {
  const program = new Command();
  program
    .name("tree")
    .description("To show file tree")
    .argument("[dir]", "The name of the directory to show")
    .option("-a", "--all", "Show all files")
    .version("0.0.1");

  program.parse();
  return {
    dir: program.args[0] ?? ".",
    all: program.opts().a,
  };
};
