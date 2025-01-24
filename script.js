// EXER 02 SCR
function run_exer02() {
  // OUPUT VAR
  let output_var = [];

  function cl(str) {
    if (str == null) {
      str = "";
    }
    output_var.push(str);
    console.log(str);
  }

  cl("RUN EXERO2");

  // RETURN OUTPUT VAR TO PAGE
  console.log("OUTPUT VAR LENGTH(" + output_var.length + ")");

  let ret_str = output_var.join("\n");

  return ret_str;
}

// QUICK & EASY MAKE AVAIL TO THE INDEX.HTML
window.run_exer02 = run_exer02;
