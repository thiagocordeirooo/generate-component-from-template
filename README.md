<h1 align="center">Generate Components from Templates 🚀</h1>

A visual studio code extension for you to generate the any components from template files.

<p align="center">
  <img alt="Logo" width="300" src="assets/logo.png">
</p>

## First steps:

1. Create a folder named `.components-templates` in your application's root directory.

2. Create your files with the extension `.tmpl` in the folder `.components-templates` with a tag `{component_name}` to be replaced with the chosen name of your component, for example:

```jsx
import React from "react";

export default function {component_name}(){
  return <h2>{component_name}</span>;
}
```

## Usage

<p align="center">
  <img alt="Demo" width="800" src="assets/demo.gif">
</p>

## Extension Settings

This extension contributes the following settings:

- `generate-component-from-template.path-file-templates`: Path where your template files are located. Tip: Place at the root of the project.

- `generate-component-from-template.component-name`: Variable that will be used to name your competent and their respective files. Tip: Use between braces.

- `generate-component-from-template.files-extension`: Extension of the generated files.

- `generate-component-from-template.generate-index-export`: If true, it will generate an index file for standard component export.

## Contributors

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/LorenaKauane">
        <img src="https://avatars2.githubusercontent.com/u/26286922?s=460&u=863d459dfdfd58c53122c70c5d151531d0bb030b&v=4" style="border-radius:50%" width="100px;" alt=""/>
        <br />
        <sub><b>Lorena Kauane</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/thiagocordeirooo">
        <img src="https://avatars2.githubusercontent.com/u/11415689?s=460&u=3a3323bb7d958f599fa838c27bf659cdb50488e9&v=4" style="border-radius:50%" width="100px;" alt=""/>
        <br />
        <sub><b>Thiago Cordeiro</b></sub>
      </a>
      <br />
    </td>    
  </tr>
</table>
