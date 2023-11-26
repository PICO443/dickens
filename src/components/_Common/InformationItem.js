import { Box, Grid, Typography } from "@mui/material";

export const InformationItem = ({ IconComponent, color, label, value }) => (
    <Grid item xs={4}>
      <Box 
        display="flex" 
        alignItems="center" 
        sx={{ padding: '0.5rem', border: `1px solid ${color}`, borderRadius: '0.25rem', height: '100%' }}
      >
        <IconComponent sx={{ color: color, fontSize: "2rem" }} />
        <Box ml={2} display="flex" flexDirection="column" justifyContent="center" flex={1}>
          <Typography variant="subtitle2" color="textSecondary" sx={{ fontSize: "0.9rem" }}>
            {label}
          </Typography>
          <Typography variant="body1" color="textPrimary" sx={{ fontSize: "1.2rem", fontWeight: 'bold' }}>
            {value}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );