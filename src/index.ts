import { exec } from "child_process";
import inquirer from "inquirer";

void inquirer
  .prompt([
    {
      type: "list",
      name: "changemylife",
      message: "What do you do with your life?",
      choices: [
        "Study in Bootcamp ISDI",
        "Study in a FP informatica",
        "Fight Mario",
      ],
    },
    {
      type: "checkbox",
      name: "happiness",
      message: "Are you happy?",
      choices: ["Yes", "No"],
    },
  ])
  .then(({ changemylife, happiness }) => {
    if (changemylife === "Study in Bootcamp ISDI") {
      console.log("100k a month easy");
    } else if (changemylife === "Fight Mario") {
      console.log(
        "Mario killed you, he said you were a rojo and his students got you"
      );
    } else if (changemylife === "Study in a FP informatica") {
      console.log(
        "soy programador jaja fasfa nEHidhchunhiasda342344231jaddwwnw xd lol"
      );
    }

    if (changemylife === "Study in Bootcamp ISDI" && happiness[0] === "Yes") {
      console.log("dont worry, you won't be happy for long");
    } else if (
      changemylife === "Study in a FP informatica" &&
      happiness[0] === "Yes"
    ) {
      console.log("How cute, you think you'll find a job... ");
    } else if (
      changemylife === "Study in a FP informatica" &&
      happiness[0] === "No"
    ) {
      console.log("Now apart of being unhappy you have no future, nice");
    }
  });
