import React from 'react';
import Stack from '@mui/material/Stack';
import CategoryBox from './CategoryBox.jsx';


const CategoriesGrid = ({categorySamplePhotos}) => {

    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems= "center"
            useFlexGap
            spacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{flexWrap: 'wrap'}}
        >
            {categorySamplePhotos.map((categorySamplePhoto, index) => (
                <CategoryBox key={index} categorySamplePhoto={categorySamplePhoto}/>
            ))}
        </Stack>
    );
};

export default CategoriesGrid;