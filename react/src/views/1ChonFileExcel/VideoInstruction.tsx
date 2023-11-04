import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

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
        <Skeleton variant="rect" width="100%" style={{ position: 'absolute', zIndex: -1 }}>
          <div style={{ paddingTop: '56%' }} />
        </Skeleton>
        <iframe
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
