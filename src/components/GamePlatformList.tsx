import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone} from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe} from 'react-icons/bs'
import { GamePlatform } from '../hooks/useGames'
import Stack from '@mui/material/Stack';
interface GamePlatformListProps {
    platforms: GamePlatform[]
}
const GamePlatformList = ({platforms}: GamePlatformListProps) => {
   const iconMap: any = {
    pc: FaWindows, 
    playstation: FaPlaystation, 
    xbox: FaXbox, 
    mac: FaApple, 
    linux: FaLinux, 
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe

   }
 
    return (
    <> 
    <Stack direction="row" spacing={2}>
  

    {platforms.map((platform) => 
        iconMap[platform.slug]
    )}
    </Stack>
    </>
  )
}

export default GamePlatformList