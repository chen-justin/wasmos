// import {_process, Process} from "../preamble";
// import { process } from "../process";

import { File } from "@wasmos/fs";

export const enum ExitStatus {
  EXIT_FAILURE = -1,
  EXIT_SUCCESS = 0
}

function _main(argv: string[]): ExitStatus {
  Console.log(argv.slice(1).join(" "));

  return ExitStatus.EXIT_SUCCESS;
}

let f = new File();
// log(process.uid)
// log(process);
// log(process.argv[0]);
// process.exitCode = _main(process.argv);
