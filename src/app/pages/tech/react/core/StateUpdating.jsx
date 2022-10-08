import {Box, Typography} from "@mui/material";

export default function StateUpdating() {
  return (
    <Box id="StateUpdating">
      <Typography paragraph>
        I can never remember how to update an array of objects using React’s useState hook. When I Google “useState array update”, most of the StackOverflow links are already purple. I’m writing a blog post on it and I’m still going to have to look it up later I’m sure.

        There might be an example buried deep in the React docs somewhere I can reference, but the main idea is that the array of objects (or really any value) should be treated as immutable.
        Which is confusing, because it isn’t actually immutable. You can change
        it as you like. It’s just not “best practice” to do so.

        Below is a simple React useState array update example. It’s essentially some
        functions that perform the basic CRUD (create read update delete)
        operations on the state array. Try clicking on the Add Item button to
        add some items to the list. Then try changing the values in the inputs.
        <pre>
          <code className="language-jsx">
          </code>
        </pre>
      </Typography>
    </Box>
  );
}
