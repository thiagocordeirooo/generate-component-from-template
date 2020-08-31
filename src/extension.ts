import { commands, ExtensionContext, window } from "vscode";
import GenerateComponentLib from "./GenerateComponentLib";

export function activate(context: ExtensionContext) {
  const generateComponentsCommand = commands.registerCommand(
    "generate-component-from-template.generateComponents",
    generateComponents
  );
  context.subscriptions.push(generateComponentsCommand);
}

const generateComponents = async () => {
  const componentName = await window.showInputBox({
    prompt: `Type the name of the new component`,
  });

  if (componentName) {
    GenerateComponentLib.generate(componentName);
  }
};

export function deactivate() {}
