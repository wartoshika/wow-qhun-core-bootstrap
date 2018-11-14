# QhunCoreTS - Bootstrap repository to quickly create a new addon

## Usage steps:

1. Clone this repository: 
```bash
$ git clone https://github.com/wartoshika/wow-qhun-core-bootstrap.git myAddon
```
2. Navigate to created folder:
```bash
$ cd myAddon
```
3. Remove current .git folder: 
```bash
$ rmdir -f .git
```
4. **[Optional]** Create a new git folder:
```bash
$ git init
```
5. Install declared dependencies:
```bash
$ npm install
```
6. Run the transpiler to create Lua files:
```bash
$ npm start
```

Your complete addon can be found in the **`dist`** folder. Enjoy it :)