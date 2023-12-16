import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

const MyCard = ({ creatorName, title, imageUrl, description, goal, endDate }) => {
  return (
    <Card className="w-[280px] h-[380px] overflow-hidden shadow-lg bg-white flex flex-col">
      {/* Stellen Sie sicher, dass das Bild die obere Hälfte der Karte füllt und zentriert/bedeckt wird */}
      <div className="w-full h-1/2 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover object-center" />
      </div>
      <CardContent className="flex-1">
        <Typography level="h5" component="h3" className="font-bold text-xl mb-2">
          {title}
        </Typography>
        <Typography level="body2" component="p" className="text-gray-700 text-base flex-1">
          {description}
        </Typography>
        <div className="mt-4">
          <Typography level="body3" component="p" className="text-gray-600">
            Ziel: {goal}
          </Typography>
          <Typography level="body3" component="p" className="text-gray-600">
            Endet am: {endDate}
          </Typography>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Typography level="body3" component="p" className="text-gray-600">
            Erstellt von: {creatorName}
          </Typography>
          <BookmarkAdd />
        </div>
      </CardContent>
    </Card>
  );
};

export default MyCard;
