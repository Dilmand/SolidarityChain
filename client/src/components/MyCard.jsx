import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

const MyCard = ({title, dateOfCreation, prise, imgURL, handleClick}) => {
  return (
    <Card sx={{ width: 300 }}>
      <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">{dateOfCreation}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          src={imgURL}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Preis:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {prise}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          onClick={handleClick}
        >
          Ansehen
        </Button>
      </CardContent>
    </Card>
  );
};

export default MyCard;