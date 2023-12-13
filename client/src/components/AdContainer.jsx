import { useNavigate } from 'react-router-dom';
import MyCard from './MyCard';
import { loader } from '../assets';
import { v4 as uuidv4 } from "uuid";

const AdContainer = ({title, isLoading, Ads}) => {
    const navigate = useNavigate();
    const handleNavigate = (Ad) => {
        navigate(`/campaign-details/${Ad.title}`, { state: Ad })
      }
  return (
    <>
    {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && Ads.length > 0 && Ads.map((Ad) => <MyCard 
          key={uuidv4()}
          {...Ad}
          handleClick={() => handleNavigate(campaign)}
        />)}
    </>
  )
}

export default AdContainer;