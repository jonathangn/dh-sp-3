import * as React from "react";
import Link from "@mui/material/Link";
import { Tab, Tabs } from "@mui/material";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Tabs centered>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            <Tab label={section.title} />
          </Link>
        ))}
      </Tabs>
    </React.Fragment>
  );
}
