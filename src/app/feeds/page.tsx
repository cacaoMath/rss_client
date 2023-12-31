'use client';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from '@mui/icons-material';

function generateListItem(list: string[]) {
  return list.map((value, index) => (
    <ListItem key={index}>
      <ListItemAvatar></ListItemAvatar>
      <ListItemText primary={`https://${value}`} secondary="descriotion" />
    </ListItem>
  ));
}

export default function Feeds(): React.ReactNode {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Box />
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            p: 1,
            m: 4,
          }}
        >
          <Stack direction="row" spacing={2}>
            <Avatar>
              <Link />
            </Avatar>
            <Typography variant="h4">Registerd Feed Link</Typography>
          </Stack>
          <List>{generateListItem(['a', 'i', 'u'])}</List>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box />
      </Grid>
    </Grid>
  );
}
