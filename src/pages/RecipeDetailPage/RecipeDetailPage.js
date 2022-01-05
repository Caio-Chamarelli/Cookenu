import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { ScreenContainer, RecipeContainer, RecipeImage } from './styled';
import { Typography } from "@material-ui/core";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/urls";


const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]


    return (
        <ScreenContainer>
            {recipe ?
                <RecipeContainer>
                    <RecipeImage src={recipe.image}/>
                    <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
                    <Typography align={'center'}>{recipe.description}</Typography>
                </RecipeContainer>
            :
                <Loading/>
            }
        </ScreenContainer>
    )
}

export default RecipeDetailPage