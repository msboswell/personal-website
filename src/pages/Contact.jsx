import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@material-ui/core';
import Info from '../components/Info';

export default () => {
  return (
    <div>
      <Info title={'Example Form'}>
        This page contains an example of a Contact Form that could be used at
        some point in the future. The form below has no functionality and is
        only used for UI reference.
      </Info>
      <div
        style={{
          display: 'flex',
          jusitfyContent: 'center',
        }}
      >
        <form style={{ width: '50%' }}>
          <Typography variant="h4" color="inherit">
            Contact Form
          </Typography>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input id="message" multiline rows={5} />
          </FormControl>

          <Button
            style={{ width: '20%' }}
            variant="contained"
            color="primary"
            size="medium"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
