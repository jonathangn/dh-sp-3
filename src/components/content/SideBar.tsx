import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

interface SidebarProps {
  archives: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description: string;
  title: string;
}

function handleClick() {
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Publicaciones
        </Typography>
        {archives.map((archive) => (
          <Chip
            sx={{ margin: ".2rem" }}
            variant="outlined"
            onClick={handleClick}
            label={archive.title}
            key={archive.title}
          />
        ))}
      </Paper>
    </Grid>
  );
}
