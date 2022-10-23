import {useSelector} from "react-redux";
import {Box, Typography} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function IndexedCollections() {
  const theme = useSelector(state => state["themeToggle"]["theme"]);

  let
    arr = new Array(1, 2, 3),
    arr1 = Array(4, 5, 6),
    arr2 = [7, 8, 9];

  return (
    <Box id="IndexedCollections">
      <Typography variant="h1">索引集合类 (Indexed collections)</Typography>
      <section>
        <Typography variant="h2">📌 数组对象 (Array object)</Typography>
        <Typography variant="h3">创建数组 (creating an array)</Typography>
        <Typography variant="h3">填充数组 (populating an array)</Typography>
        <Typography variant="h3">引用数组元素 (referring to array elements)</Typography>
        <Typography variant="h3">遍历数组 (iterating over array)</Typography>
        <Typography variant="h3">数组的方法 (array methods)</Typography>
        <SyntaxHighlighter
          language="javascript"
          style={theme.codeBlock}
          showLineNumbers={true}
          wrapLongLines={true}>
          {`arr.at(1): ${arr.at(1)}`}
        </SyntaxHighlighter>
      </section>
    </Box>
  );
}
