import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function CloseButtonSmall({ onClick }) {
  return (
    <HighlightOffIcon 
      onClick={onClick} 
      sx={{ fontSize: 32, color: '#333333', cursor: 'pointer' }} 
    />
  );
}