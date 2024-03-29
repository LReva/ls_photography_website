import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const AboutMe = () => {
  return (
    <div id='aboutMe-section'>
        <Stack direction={{ xs: 'column', sm: 'row' }}
               spacing={8}>
            <div>
                <p>Welcome to the world of photography, where each click of the camera is a love letter to the beauty around us. As amateur photographers, our hearts lie in the gentle embrace of nature – from the majestic landscapes that stretch into the horizon to the intimate world of macro photography. The abstract patterns and playful light in our photos reflect our deep-seated love for finding beauty in the unexpected.</p>
                <p>Whether it's exploring new places or capturing the transient beauty of a fleeting moment, we find joy in the perfect order of nature's canvas. It's in these moments that we find hope and inspiration, a testament to the enduring beauty of our world. Join us in this visual journey, as we uncover the stories and wonders hidden in plain sight.</p>
            </div>
            <Avatar
                alt="LS"
                src={require("../images/hibiscus.JPG")}
                sx={{ width: 226, height: 226, alignSelf: 'center' }}
            />
        </Stack>
    </div> 
  );
};

export default AboutMe;