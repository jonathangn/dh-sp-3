import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { TCategory } from "@/data/types";
import ButtonBase from "@mui/material/ButtonBase";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

export default function BasicCard(category: TCategory) {
  return (
    <Card orientation="horizontal" style={{ borderRadius: '50% 50% 1rem 1rem' }}>
      <CardActionArea component={Link} style={{ padding: '.5rem' }} href={`/products#${category.name}`}>

        <div>
          <img
            width={150}
            height={150}
            alt={category.title}
            src={category.urlImg}
          />
          <Typography level="title-lg" style={{ textAlign: 'center' }}>{category.title}</Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}