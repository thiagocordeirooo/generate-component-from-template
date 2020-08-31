import { window, workspace } from "vscode";
import { CONFIG_PATH_FILE__TEMPLATES, WORKSPACE_NAME } from "./constants";
import fs = require("fs");

export default abstract class GenerateComponentLib {
  public static generate(componentName: string) {
    const pathFileTemplates = workspace
      .getConfiguration(WORKSPACE_NAME)
      .get(CONFIG_PATH_FILE__TEMPLATES);

    const fullPath = `${workspace.rootPath}/${pathFileTemplates}`;

    try {
      const files = fs.readdirSync(fullPath);
      window.showInformationMessage(
        `${workspace.rootPath}/${pathFileTemplates}`
      );

      files.forEach((file: string) => {
        const fileContent = fs.readFileSync(file, "utf-8");
      });
    } catch (error) {
      window.showErrorMessage(
        "No file was found. Check the path configured in the extension."
      );
    }
  }
}
