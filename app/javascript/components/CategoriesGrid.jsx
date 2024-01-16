import React from 'react';
import Stack from '@mui/material/Stack';
import CategoryBox from './CategoryBox.jsx';


const CategoriesGrid = ({categorySamplePhotos}) => {

    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems="center"
            spacing={8}
            sx={{flexWrap: 'wrap',
                 marginBottom: '4rem',
                 marginTop: '3rem'}}
        >
            {categorySamplePhotos.map((categorySamplePhoto, index) => (
                <CategoryBox key={index} categorySamplePhoto={categorySamplePhoto}/>
            ))}
        </Stack>
    );
};

export default CategoriesGrid;