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
import { useQuery } from '@tanstack/react-query';
import { rssApi } from '../../../config/setup';
import { FeedData } from '@/../api/RssApi';

function generateListItem(list: FeedData[] | undefined) {
  return list?.map((value) => (
    <ListItem key={value.id}>
      <ListItemAvatar></ListItemAvatar>
      <ListItemText primary={value.url} secondary={value.description} />
    </ListItem>
  ));
}

export default function Feeds(): React.ReactNode {
  const { data: feedsRes } = useQuery({
    queryKey: ['feeds'],
    queryFn: rssApi.getFeeds,
  });
  const feeds = feedsRes?.data.map((value) => {
    return value as FeedData;
  });
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
          <List>{generateListItem(feeds)}</List>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box />
      </Grid>
    </Grid>
  );
}
