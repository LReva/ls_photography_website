import React, {useEffect, useState}  from 'react';
import Stack from '@mui/material/Stack';
import CategoryBox from './CategoryBox.jsx';
import {all_category_sample_loader} from '../categorized_photos.js';


const CategoriesGrid = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchCategorySample = async () => {  
        const result = await all_category_sample_loader();
        setCategories(result);
        }
        fetchCategorySample();
    }, [])

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