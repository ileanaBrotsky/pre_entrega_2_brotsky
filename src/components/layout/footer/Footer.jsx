import { Grid } from "@mui/material";
import "./footer_styles.css";

const Footer = () => {
  return (
    <>
      <Grid container>
        <Grid className="footer" item xs={12}>
          &copy; {new Date().getFullYear()} - IBweb
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
