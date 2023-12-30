'use client';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Stack, Grid } from '@mui/material';
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
    <Grid
      container
      sx={{
        justifyContent: 'space-between',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
        width: '50%',
      }}
    >
      <Stack spacing={2} sx={{ p: 1, m: 1, width: 'auto' }}>
        <Avatar>
          <Link />
        </Avatar>
        <List>{generateListItem(['a', 'i', 'u'])}</List>
      </Stack>
    </Grid>
  );
}
