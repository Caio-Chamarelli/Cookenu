import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { RecipeListContainer, AddRecipeButton } from './styled';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls'
import { Add } from "@material-ui/icons";
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const RecipeListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickCard = (id) => {
        goToRecipeDetail(history, id)
    }



    const recipeCards = recipes.map((recipe)=>{
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={(() => onClickCard(recipe.recipe_id))}
            />
        )
    })

    return (
        <RecipeListContainer>
            {recipeCards.length > 0 ? recipeCards : <Loading/>}
            <AddRecipeButton
                color={"primary"}
                onClick={() => goToAddRecipes(history)}
            />
                <Add />
        </RecipeListContainer>
    )
}

export default RecipeListPage