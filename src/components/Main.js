import ListItem from './ListItem'
import '../data'
import data from '../data'

export default function Main(){
  const listItem = data.map((item)=>{    
    return <ListItem
     key={item.id}
     item={item}    
    
    />
  })


  return (
    <div className='main'>
      {listItem}
    </div>
  )
}