import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Image from "next/image";
import { TCategory } from "@/data/types";

export default function BasicCard(category: TCategory) {
  return (
    <Card variant="outlined" sx={{ width: 320 }} orientation="horizontal">
      <div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          {/* <Image
            width={300}
            height={300}
            alt={category.name}
            // src={category.urlImg}
          /> */}
        </AspectRatio>
        <Typography level="title-lg">{category.name}</Typography>
      </div>
      <CardContent orientation="horizontal">
        <div>
          {/* <Typography level="body-sm">{category.description}</Typography> */}
          {/* <Typography fontSize="lg" fontWeight="lg">
            Desde: 
          </Typography>
          <Button
            variant="solid"
            size="md"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600, background: 'teal' }}
          >
            Agregar
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}
