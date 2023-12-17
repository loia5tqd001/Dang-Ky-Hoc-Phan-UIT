import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Skeleton from '@mui/material/Skeleton';
import { sendTrackingEvent } from '../../tracking';

function VideoInstruction() {
  return (
    <FormControl component="fieldset">
      <Box
        style={{
          width: '75vw',
          height: '42vw',
          position: 'relative',
          zIndex: 1,
          margin: '0 0  50px',
        }}
      >
        <FormLabel component="legend" style={{ paddingBottom: 5 }}>
          Video hướng dẫn:
        </FormLabel>
        <Skeleton variant="rectangular" width="100%" style={{ position: 'absolute', zIndex: -1 }}>
          <div style={{ paddingTop: '56%' }} />
        </Skeleton>
        <iframe
          onClick={() => {
            sendTrackingEvent.page1({
              action: 'video_instruction_click',
            });
          }}
          title={' '}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/NW5ShqomZBE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </FormControl>
  );
}

export default VideoInstruction;
