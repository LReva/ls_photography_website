import React from 'react';
import Stack from '@mui/material/Stack';
import CategoryBox from './CategoryBox.jsx';


const CategoriesGrid = ({categories}) => {

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
            {categories.map((category, index) => (
                <CategoryBox key={index} photo={category}/>
            ))}
        </Stack>
    );
};

export default CategoriesGrid;