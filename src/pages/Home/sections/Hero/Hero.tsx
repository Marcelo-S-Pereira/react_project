import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import StyledButton from "../../../../components/StyledButton/StyledButton"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground.tsx"

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.up('xs')]: {//mobile
            paddingTop:"100px",

        },
        [theme.breakpoints.up('md')]: { // desktop
            paddingTop:"0px",

        },

    }))

    const Styledimg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border:`1px solid ${theme.palette.primary.contrastText}`,

    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground/>
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <Styledimg src={Avatar} />
                                </Box>
                                
                            </Box>                            
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}> Marcelo S. Pereira</Typography>
                            <Typography color="primary.contrastText" variant="h3" textAlign="center">I'm a Data Analyst</Typography>

                            <Grid container display="flex" justifyContent="center" spacing="7px" pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center" >
                                    
                                    <StyledButton onClick={()=> console.log("download")}>
                                        <CloudDownloadIcon />
                                        <Typography>
                                        Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={()=> console.log("whatsapp")}>
                                        <WhatsAppIcon />
                                        <Typography>
                                            Whatsapp
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
}

export default Hero
