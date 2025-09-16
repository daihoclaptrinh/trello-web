import Box from "@mui/material/Box";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.appBarHeight}px - ${theme.trelloCustom.boardBarHeight}px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Board Content
    </Box>
  );
}

export default BoardContent;
