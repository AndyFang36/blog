import {Box, Typography} from "@mui/material";
import ArticleTitle from "../../../components/ArticleTitle";

export default function PackageFile() {
  return (
    <Box id="PackageFile">
      <ArticleTitle>What are peer dependencies in a Node module?</ArticleTitle>
      <a href="https://flaviocopes.com/npm-peer-dependencies/">https://flaviocopes.com/npm-peer-dependencies/</a>
      <Typography paragraph>
        In some package.json files, you might see a few lines like this:
        You might have already seen dependencies and devDependencies, but not peerDependencies.

        dependencies are the packages your project depends on.

        devDependencies are the packages that are needed during the development phase. Say a testing framework like Jest or other utilities like Babel or ESLint.

        In both cases, when you install a package, its dependencies and devDependencies are automatically installed by npm.

        peerDependencies are different. They are not automatically installed.

        When a dependency is listed in a package as a peerDependency, it is not automatically installed. Instead, the code that includes the package must include it as its dependency.

        npm will warn you if you run npm install and it does not find this dependency.

        Example: let’s say package a includes dependency b:

        a/package.json


          //...
          "dependencies":
          "b": "1.x"

        }
        Package b in turn wants package c as a peerDependency:

        b/package.json


          //...
          "peerDependencies":
          "c": "1.x"


        In package A, we must therefore add c as a dependency, otherwise when you install package b, npm will give you a warning (and the code will likely fail at runtime):

        a/package.json


          //...
          "dependencies":
          "b": "1.x",
          "c": "1.x"

        }
        The versions must be compatible, so if a peerDependency is listed as 2.x, you can’t install 1.x or another version. It all follows semantic versioning.
      </Typography>
    </Box>
  )
}
