import { LikeIcon } from '@/Icons';
import { motion } from 'framer-motion';

const ExploreChatLimitBadge = () => {
    
    return <motion.div
                className="z-50 rounded-md backdrop-blur bg-danger/20 backdrop-saturate-150 p-2 fixed"
                transition={{ type: "tween" }}
                initial={{ opacity: 0, left:"-50px",top: "150px" }}
                animate={{ opacity: 1, left:"0",top: "150px"}}
                exit={{ opacity: 0, left:"-50px",top: "150px" }}
                style={{ top: "150px"}}
            >
                <div className='flex items-center flex-col'>
                    <LikeIcon className='size-7' fill='#f31260'/>
                    <p className='font-tiny text-foreground/80 text-sm'>{localStorage.getItem("likesCount")}</p>
                </div>
            </motion.div>
}

export default ExploreChatLimitBadge
