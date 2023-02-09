import { useRecipesContext } from 'context/recipes_context';
import { AiFillPrinter, AiFillHeart } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import { toast } from 'react-toastify';
import { Wrapper } from 'assets/wrappers/FunctionalButtons.styles';

const FunctionalButtons = ({ componentRef, id }) => {
  const { savedRecipes, setSavedRecipes, singleRecipe } = useRecipesContext();
  const { title, image } = singleRecipe;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleSaveRecipe = () => {
    const newRecipe = {
      id,
      title,
      image,
    };
    //eslint-disable-next-line
    const tempRecipesCard = savedRecipes.filter((item) => item.id == id);
    if (tempRecipesCard.length > 0) {
      toast.info(`${title} already exists in your list`);
      return;
    } else {
      setSavedRecipes([...savedRecipes, newRecipe]);
      toast.success(`Successfully added ${title} to your recipes!`);
    }
  };

  return (
    <Wrapper>
      <button onClick={handlePrint}>
        Print <AiFillPrinter />
      </button>
      <button onClick={handleSaveRecipe}>
        Save recipe <AiFillHeart />
      </button>
    </Wrapper>
  );
};

export default FunctionalButtons;
