import React from 'react'
import { styled, Box, Typography } from '@mui/material';
const Image = styled(Box)`
    width: 100%;
    background: url(https://htmlcolorcodes.com/assets/images/colors/turquoise-color-solid-background-1920x1080.png) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Heading = styled(Typography)`
    font-size: 70px;
    color: ;
    line-height: 1;
 
`;

const SubHeading = styled(Typography)`
    font-size: 50px;
    margin-top:10px;
    color:orange
`;
    const Banner = () => {
    
        return (
            <Image>
                <Heading>A BLOG Application</Heading>
                <SubHeading>By Mayur Chavan</SubHeading>
            </Image>
        )
    }
    
    export default Banner;