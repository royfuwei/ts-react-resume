import { Box, Rating } from "@mui/material";
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import './HoverRating.scss';

const labels: { [index: string]: string } = {
  0.5: '有研究沒用過',
  1: '有研究測試過',
  1.5: '很少使用',
  2: '熟練度不高，以前工作有用到',
  2.5: '熟練度一般，以前工作常用',
  3: '熟練度一般，工作使用',
  3.5: '熟練度中上，工作偶爾使用',
  4: '熟練度中上，工作長使用',
  4.5: '熟練度高',
  5: '熟練度高+',

  // 0.5: 'Useless',
  // 1: 'Useless+',
  // 1.5: 'Poor',
  // 2: 'Poor+',
  // 2.5: 'Ok',
  // 3: 'Ok+',
  // 3.5: 'Good',
  // 4: 'Good+',
  // 4.5: 'Excellent',
  // 5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export function HoverRating({ rating = 3.5 }: { rating?: number}) {
  const [value, setValue] = React.useState<number | null>(rating);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      className="HoverRating"
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        /* onChange={(event, newValue) => {
          setValue(newValue);
        }} */
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box className="label" sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}