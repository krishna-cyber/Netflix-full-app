import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./listcard.css";

const ListCard = () => {
  return (
    <div className='card'>
      <img
        src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
        alt=''
      />
      <div className='itemsinfo'>
        <div className='info'>
          <div className='icons'>
            <AiOutlineLike />
            <AiOutlineDislike />
            <AiOutlinePlayCircle />
            <IoIosAddCircleOutline />
          </div>
          <div className='iteminfo'>
            <span>1hr 30min</span>
            <span>16+</span>
            <span>2019</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              architecto blanditiis officiis autem beatae voluptatem impedit!
              Asperiores minus reiciendis ratione odit at, architecto nostrum
              repellendus. Ab officiis vitae omnis? Magni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
