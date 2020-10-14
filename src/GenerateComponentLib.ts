import { window, workspace } from "vscode";
import {
  CONFIG_EXTENSION_COMPONENT,
  CONFIG_GENERATE_INDEX_EXPORT,
  CONFIG_PATH_FILE__TEMPLATES,
  CONFIG_VAR_COMPONENT_NAME,
  WORKSPACE_NAME,
} from "./constants";
import fs = require("fs");
import path = require("path");

export default abstract class GenerateComponentLib {
  public static generate(componentName: string, currentPath: string) {
    const pathFileTemplates = workspace
      .getConfiguration(WORKSPACE_NAME)
      .get(CONFIG_PATH_FILE__TEMPLATES);

    const varComponentName = workspace
      .getConfiguration(WORKSPACE_NAME)
      .get(CONFIG_VAR_COMPONENT_NAME);

    const extensionComponent = workspace
      .getConfiguration(WORKSPACE_NAME)
      .get(CONFIG_EXTENSION_COMPONENT);

    const generateIndexExport = workspace
      .getConfiguration(WORKSPACE_NAME)
      .get(CONFIG_GENERATE_INDEX_EXPORT);

    const fullPath = `${workspace.rootPath}/${pathFileTemplates}`;

    try {
      const files = fs.readdirSync(fullPath);

      const dirName = path.join(currentPath, componentName);
      if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
      }

      files.forEach((file: string) => {
        const fileContent = fs.readFileSync(path.join(fullPath, file), "utf-8");

        const regex = new RegExp(`${varComponentName}`, "gi");

        const fileData = fileContent.replace(regex, componentName);

        GenerateComponentLib.createFile(
          path.join(
            dirName,
            `${componentName}${file.replace(".tmpl", "")}.${extensionComponent}`
          ),
          fileData
        );
      });

      if (generateIndexExport) {
        GenerateComponentLib.createFile(
          path.join(dirName, `index.${extensionComponent}`),
          `export { default } from "./${componentName}";\n`
        );
      }
    } catch (error) {
      window.showErrorMessage(
        "No file was found. Check the path configured in the extension."
      );
    }
  }

  private static createFile(path: string, data: any) {
    fs.writeFile(path, data, async (err) => {
      if (err) {
        return window.showErrorMessage("Falha na criação do arquivo HTML");
      }
    });
  }
}
