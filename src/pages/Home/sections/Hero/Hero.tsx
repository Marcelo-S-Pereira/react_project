import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",

    }))

    const Styledimg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",

    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={ {xs:12, md:4}}>
                            <Styledimg src={Avatar} />
                        </Grid>
                        <Grid size={ {xs:12, md:8}}>
                            <Typography color="primary" variant="h2" textAlign="center">Marcelo S. Pereira</Typography>
                            <Typography color="primary" variant="h3" textAlign="center">I'm a Data Analyst</Typography>

                            <Grid container display="flex" justifyContent="center">
                                <Grid size={ {xs:12, md:4}} display="flex" justifyContent="center">
                                    <Button>
                                        <CloudDownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid size={ {xs:12, md:4}} display="flex" justifyContent="center">
                                    <Button>
                                        <WhatsAppIcon />
                                        Contact Me
                                    </Button>
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
