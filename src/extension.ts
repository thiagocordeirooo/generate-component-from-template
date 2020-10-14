import { commands, ExtensionContext, window, workspace } from "vscode";
import GenerateComponentLib from "./GenerateComponentLib";

export function activate(context: ExtensionContext) {
  const generateComponentsCommand = commands.registerCommand(
    "generate-component-from-template.generateComponents",
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
      GenerateComponentLib.generate(componentName, event.path);
    }
  }
};

export function deactivate() {}
