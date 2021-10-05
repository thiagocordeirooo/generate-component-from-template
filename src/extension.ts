import { commands, ExtensionContext, window, workspace } from "vscode";
import GenerateComponentLib from "./GenerateComponentLib";
import { WORKSPACE_NAME } from "./constants";

export function activate(context: ExtensionContext) {
  const generateComponentsCommand = commands.registerCommand(
    `${WORKSPACE_NAME}.generateComponents`,
    generateComponents
  );
  context.subscriptions.push(generateComponentsCommand);
}

const generateComponents = async (event: any) => {
  if (workspace.workspaceFolders) {
    const componentName = await window.showInputBox({
      prompt: `Type the name of the new component`,
    });

    if (componentName) {
      GenerateComponentLib.generate(componentName, event.fsPath);
    }
  }
};

export function deactivate() {}
