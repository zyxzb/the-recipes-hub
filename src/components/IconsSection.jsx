import { TbSeedingOff, TbCurrencyDollar } from 'react-icons/tb';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineRoomService } from 'react-icons/md';
import { RiHandHeartLine } from 'react-icons/ri';
import { formatPrice } from 'utils/constants';
import { Wrapper } from 'assets/wrappers/IconsSection.styles';

const IconsSection = ({ singleRecipe, singleIsLoading }) => {
  const { glutenFree, readyInMinutes, pricePerServing, veryHealthy, servings } =
    singleRecipe;
  return (
    <Wrapper singleIsLoading={singleIsLoading}>
      <span>
        <TbSeedingOff />
        <span>Gluten-free: {glutenFree ? ` YES` : ` NO`}</span>
      </span>
      <span>
        <AiOutlineClockCircle />
        <span>
          Ready in{` `}
          {readyInMinutes}
          {` `}minutes
        </span>
      </span>
      <span>
        <TbCurrencyDollar />
        <span>
          {formatPrice(pricePerServing)}
          {` `}per serving
        </span>
      </span>
      <span>
        <RiHandHeartLine />
        <span>Super Healthy:{veryHealthy ? ` YES` : ` NO`}</span>
      </span>
      <span>
        <MdOutlineRoomService />
        <span>
          {servings}
          {` `}Servings
        </span>
      </span>
    </Wrapper>
  );
};

export default IconsSection;
